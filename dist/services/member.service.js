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
exports.deleteMember = exports.updateMember = exports.getMemberByUserId = exports.getMemberById = exports.getMembers = exports.createMember = void 0;
const member_model_1 = __importDefault(require("../models/member.model"));
const createMember = (memberData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!memberData.firstName || !memberData.lastName || !memberData.userId || !memberData.roleId) {
        throw new Error("firstname, lastname and userId are required");
    }
    return yield member_model_1.default.create(memberData);
});
exports.createMember = createMember;
const getMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.default.findAll();
});
exports.getMembers = getMembers;
const getMemberById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.default.findByPk(id);
});
exports.getMemberById = getMemberById;
const getMemberByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.default.findOne({
        where: {
            userId
        }
    });
});
exports.getMemberByUserId = getMemberByUserId;
const updateMember = (id, memberData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.default.update(memberData, {
        where: {
            id
        }
    });
});
exports.updateMember = updateMember;
const deleteMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield member_model_1.default.destroy({
        where: {
            id
        }
    });
});
exports.deleteMember = deleteMember;
