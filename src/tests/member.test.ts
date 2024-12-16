const request = require('supertest');
import { sequelize, connectDB } from "../config/database";
import express from 'express';
import passport from 'passport';
import userRoutes from '../routes/user.route';
import memberRoutes from '../routes/member.route';
import { seedRoles } from '../seed';
import Role from '../models/role.model';

jest.mock('axios'); 

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use('/users', userRoutes);
app.use('/members', memberRoutes);

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

describe(' Member Routes', () => {
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

    it('should create a member', async () => {
        const memberData = {
            firstName: 'John',
            lastName: 'Doe',
            profilePicture: 'https://example.com',
            dateOfBirth: '1990-01-01',
            phone: '1234567890',
            userId: userId,
            roleId: roleId
        };


        const response = await request(app)
            .post('/members')
            .set('Authorization', `Bearer ${token}`)
            .send(memberData);


        expect(response.body).toHaveProperty('id');
        expect(response.body.firstName).toBe(memberData.firstName);
        expect(response.body.lastName).toBe(memberData.lastName);
        expect(response.body.profilePicture).toBe(memberData.profilePicture);
        expect(new Date(response.body.dateOfBirth).toISOString().split('T')[0]).toBe(memberData.dateOfBirth); // Adjusted check
        expect(response.body.phone).toBe(memberData.phone);
        expect(response.body.userId).toBe(memberData.userId);
        expect(response.body.roleId).toBe(memberData.roleId);
    });

    it('should get all members', async () => {
        const response = await request(app)
            .get('/members')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); // Ensure response is an array
        expect(response.body.length).toBeGreaterThanOrEqual(1);
    });

});

