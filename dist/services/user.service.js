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
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = exports.getUserByEmail = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne({
        where: {
            email,
        },
    });
});
exports.getUserByEmail = getUserByEmail;
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userData.email || !userData.password) {
        throw new Error("email and password are required");
    }
    return yield user_model_1.default.create(userData);
});
exports.createUser = createUser;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findAll();
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findByPk(id);
});
exports.getUserById = getUserById;
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.update(userData, {
        where: {
            id,
        },
    });
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.destroy({
        where: {
            id,
        },
    });
});
exports.deleteUser = deleteUser;
