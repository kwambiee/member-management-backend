"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.connectDB = void 0;
// @ts-nocheck
const core_1 = require("@sequelize/core");
const user_model_1 = __importDefault(require("../models/user.model"));
const role_model_1 = __importDefault(require("../models/role.model"));
const member_model_1 = __importDefault(require("../models/member.model"));
const activity_log_model_1 = __importDefault(require("../models/activity_log.model"));
const sequelize = new core_1.Sequelize({
    dialect: "sqlite",
    storage: "db/database.sqlite" || "/tmp/database.sqlite",
    pool: { max: 1, idle: Infinity, maxUses: Infinity },
    models: [user_model_1.default, role_model_1.default, member_model_1.default, activity_log_model_1.default],
    // write data to the database file
    logging: false,
});
exports.sequelize = sequelize;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        sequelize.getQueryInterface().sequelize.query("PRAGMA foreign_keys = ON");
        console.log("Database connected successfully.");
        yield sequelize.sync({ alter: true }); // Sync models to the database
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
exports.connectDB = connectDB;
