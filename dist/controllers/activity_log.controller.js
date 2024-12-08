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
exports.deleteActivityLogController = exports.updateActivityLogController = exports.getActivityLogByIdController = exports.getActivityLogsController = exports.createActivityLogController = void 0;
const activity_log_service_1 = require("../services/activity_log.service");
const createActivityLogController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityLog = yield (0, activity_log_service_1.createActivityLog)(req.body);
        res.status(201).json(activityLog);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createActivityLogController = createActivityLogController;
const getActivityLogsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityLogs = yield (0, activity_log_service_1.getActivityLogs)();
        res.status(200).json(activityLogs);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getActivityLogsController = getActivityLogsController;
const getActivityLogByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityLog = yield (0, activity_log_service_1.getActivityLogById)(req.params.id);
        res.status(200).json(activityLog);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getActivityLogByIdController = getActivityLogByIdController;
const updateActivityLogController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityLog = yield (0, activity_log_service_1.updateActivityLog)(req.params.id, req.body);
        res.status(200).json(activityLog);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateActivityLogController = updateActivityLogController;
const deleteActivityLogController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityLog = yield (0, activity_log_service_1.deleteActivityLog)(req.params.id);
        res.status(200).json(activityLog);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteActivityLogController = deleteActivityLogController;
