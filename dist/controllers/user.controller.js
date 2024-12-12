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
exports.deleteUserController = exports.updateUserController = exports.getUserByRolesController = exports.getUserByIdController = exports.getUsersController = exports.createUserController = exports.logOutController = exports.loginController = void 0;
const user_service_1 = require("../services/user.service");
const activity_log_service_1 = require("../services/activity_log.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, user_service_1.getUserByEmail)(email);
        if (!user) {
            throw new Error("User not found");
        }
        let userId = user.id;
        const valid = yield bcrypt_1.default.compare(password, user.password);
        if (!valid) {
            throw new Error("Invalid password");
        }
        const token = jsonwebtoken_1.default.sign({ sub: user.id }, process.env.JWT_SECRET);
        yield (0, activity_log_service_1.createActivityLog)({
            action: "login",
            description: "logged in",
            userId
        });
        res.status(200).json({ token, userId, roleId: user.roleId });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.loginController = loginController;
const logOutController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "Logged out" });
});
exports.logOutController = logOutController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.createUser)(req.body);
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables");
        }
        const token = jsonwebtoken_1.default.sign({ sub: user.id }, process.env.JWT_SECRET);
        yield (0, activity_log_service_1.createActivityLog)({
            action: "create",
            description: "created an account",
            userId: (user === null || user === void 0 ? void 0 : user.id) || "",
        });
        res.status(201).json({ user, token });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createUserController = createUserController;
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getUsersController = getUsersController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.getUserById)(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getUserByIdController = getUserByIdController;
const getUserByRolesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getUsers)();
        const usersWithRoles = users.filter((user) => user.roleId === req.params.roleId);
        res.status(200).json(usersWithRoles);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getUserByRolesController = getUserByRolesController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, user_service_1.updateUser)(req.params.id, req.body);
        const user = yield (0, user_service_1.getUserById)(req.params.id);
        // await createActivityLog({
        //   action: "update",
        //   description: "updated their account",
        //   userId: user?.id || ""
        // });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.getUserById)(req.params.id);
        yield (0, user_service_1.deleteUser)(req.params.id);
        yield (0, activity_log_service_1.createActivityLog)({
            action: "delete",
            description: "deleted their account",
            userId: (user === null || user === void 0 ? void 0 : user.id) || "",
        });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteUserController = deleteUserController;
