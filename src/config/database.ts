// @ts-nocheck
import { Sequelize } from "@sequelize/core";
import { SqliteDialect } from "@sequelize/sqlite3";
import User from "../models/user.model";
import Role from "../models/role.model";
import Member from "../models/member.model";
import ActivityLogs from "../models/activity_log.model";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db/database.sqlite" || "/tmp/database.sqlite",
  pool: { max: 1, idle: Infinity, maxUses: Infinity },
  models: [User, Role, Member, ActivityLogs],
  // write data to the database file
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    sequelize.getQueryInterface().sequelize.query("PRAGMA foreign_keys = ON");

    console.log("Database connected successfully.");
    await sequelize.sync({ alter: true }); // Sync models to the database
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { sequelize };
