import express from "express";
import passport from "passport";
import bodyParser from "body-parser";
import roleRoutes from "./routes/role.route";
import userRoutes from "./routes/user.route";
import memberRoutes from "./routes/member.route";
import activityLogRoutes from "./routes/activity_log.route";
import dotenv from "dotenv";
import { errorMiddleware } from "./middleware/error";

import path from "path";

const app = express();

app.use(express.json());

app.use(bodyParser.json());

//post a welcome message to the root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use("/roles", roleRoutes);
app.use("/users", userRoutes);
app.use("/members", memberRoutes);
app.use("/activity_logs", activityLogRoutes);

app.use(errorMiddleware);

export default app;
