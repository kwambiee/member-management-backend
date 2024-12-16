const request = require('supertest');
import { sequelize, connectDB } from "../config/database";
import express from 'express';
import passport from 'passport';
import userRoutes from '../routes/user.route';
import activityLogRoutes from '../routes/activity_log.route';
import { seedRoles } from '../seed';
import Role from '../models/role.model';

jest.mock('axios'); 

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use('/users', userRoutes);
app.use('/activity_logs', activityLogRoutes);

let server: import('http').Server;

beforeAll(async () => {
    await connectDB();
    await seedRoles(); 
    server = app.listen(3002, () => {
        console.log('Test server running on port 3002');
    });
});

afterAll(async () => {
    server.close();
    await sequelize.close();
});

describe(' Activity Log Routes', () => {
    let roleId: string;
    let token: string;
    let userId: string;

        beforeAll(async () => {
        const memberRole = await Role.findOne({ where: { roleName: 'Member' } });
        if (memberRole) {
        roleId = memberRole.id;
        }

        const userData = {
            username: 'Mr. Doe',
            email: 'mrryy@example.com',
            password: 'password',
            roleId: roleId,
            hasProfile: false
        };

        const createResponse = await request(app)
            .post('/users')
            .send(userData)
            .expect(201); 

        token = createResponse.body.token;
        userId = createResponse.body.user.id;
    });

    afterAll(async () => {
        // Cleanup created test data
        await request(app)
            .delete(`/users/${userId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
    });

    it('should create a activity', async () => {
        const activityLogData = {
            action: 'create',
            description: 'created an activity',
            userId: userId
        };

        const response = await request(app)
            .post('/activity_logs')
            .set('Authorization', `Bearer ${token}`)
            .send(activityLogData);


        expect(response.status).toBe(201);
        expect(response.body.action).toBe('create');
        expect(response.body.description).toBe('created an activity');
        expect(response.body.userId).toBe(userId);
    });

    it('should get all activity logs', async () => {
        const response = await request(app)
            .get('/activity_logs')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); 
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });

});

