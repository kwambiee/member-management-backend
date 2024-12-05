import express from "express";
import bodyParser from "body-parser";
import roleRoutes from "./routes/role.route";
import userRoutes from "./routes/user.route";
import memberRoutes from "./routes/member.route";
import activityLogRoutes from "./routes/activity_log.route";

const app = express();

app.use(bodyParser.json());

app.use("/roles", roleRoutes);
app.use("/users", userRoutes);
app.use("/members", memberRoutes);
app.use("/activity_logs", activityLogRoutes);


export default app;
