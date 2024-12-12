"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const activity_log_controller_1 = require("../controllers/activity_log.controller");
require("../config/passport");
const router = (0, express_1.Router)();
router.post("/", passport_1.default.authenticate("jwt", { session: false }), activity_log_controller_1.createActivityLogController);
router.get("/", passport_1.default.authenticate("jwt", { session: false }), activity_log_controller_1.getActivityLogsController);
router.get("/:id", passport_1.default.authenticate("jwt", { session: false }), activity_log_controller_1.getActivityLogByIdController);
router.put("/:id", passport_1.default.authenticate("jwt", { session: false }), activity_log_controller_1.updateActivityLogController);
router.delete("/:id", passport_1.default.authenticate("jwt", { session: false }), activity_log_controller_1.deleteActivityLogController);
exports.default = router;
