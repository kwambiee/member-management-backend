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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMemberController = exports.updateMemberController = exports.getMemberByIdController = exports.getMembersController = exports.createMemberController = void 0;
const member_service_1 = require("../services/member.service");
const activity_log_service_1 = require("../services/activity_log.service");
const user_service_1 = require("../services/user.service");
const createMemberController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield (0, member_service_1.createMember)(req.body);
        // userModel
        const user = yield (0, user_service_1.getUserById)(member.userId);
        if (user) {
            yield (0, user_service_1.updateUser)(member.userId, Object.assign(Object.assign({}, user), { hasProfile: true }));
        }
        else {
            throw new Error("User data is incomplete");
        }
        yield (0, activity_log_service_1.createActivityLog)({ action: "create", description: "created their profile", userId: (member === null || member === void 0 ? void 0 : member.userId) || "" });
        res.status(201).json(member);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createMemberController = createMemberController;
const getMembersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield (0, member_service_1.getMembers)();
        res.status(200).json(members);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getMembersController = getMembersController;
const getMemberByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield (0, member_service_1.getMemberById)(req.params.id);
        res.status(200).json(member);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getMemberByIdController = getMemberByIdController;
const updateMemberController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, member_service_1.updateMember)(req.params.id, req.body);
        const member = yield (0, member_service_1.getMemberById)(req.params.id);
        yield (0, activity_log_service_1.createActivityLog)({ action: "create", description: "updated their account", userId: (member === null || member === void 0 ? void 0 : member.userId) || "" });
        res.status(200).json(member);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateMemberController = updateMemberController;
const deleteMemberController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield (0, member_service_1.getMemberById)(req.params.id);
        yield (0, member_service_1.deleteMember)(req.params.id);
        yield (0, activity_log_service_1.createActivityLog)({ action: "delete", description: "deleted their account", userId: (member === null || member === void 0 ? void 0 : member.userId) || "" });
        res.status(200).json(member);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteMemberController = deleteMemberController;
