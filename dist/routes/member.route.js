"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const member_controller_1 = require("../controllers/member.controller");
require("../config/passport");
const router = (0, express_1.Router)();
router.post("/", passport_1.default.authenticate('jwt', { session: false }), member_controller_1.createMemberController);
router.get("/", passport_1.default.authenticate('jwt', { session: false }), member_controller_1.getMembersController);
router.get("/:id", passport_1.default.authenticate('jwt', { session: false }), member_controller_1.getMemberByIdController);
router.put("/:id", passport_1.default.authenticate('jwt', { session: false }), member_controller_1.updateMemberController);
router.delete("/:id", passport_1.default.authenticate('jwt', { session: false }), member_controller_1.deleteMemberController);
exports.default = router;
