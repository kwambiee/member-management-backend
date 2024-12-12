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
exports.deleteActivityLog = exports.updateActivityLog = exports.getActivityLogById = exports.getActivityLogs = exports.createActivityLog = void 0;
const activity_log_model_1 = __importDefault(require("../models/activity_log.model"));
const createActivityLog = (activityLogData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!activityLogData.action || !activityLogData.description || !activityLogData.userId) {
        throw new Error("action, description and memberId are required");
    }
    return yield activity_log_model_1.default.create(activityLogData);
});
exports.createActivityLog = createActivityLog;
const getActivityLogs = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield activity_log_model_1.default.findAll({
        order: [['createdAt', 'DESC']]
    });
});
exports.getActivityLogs = getActivityLogs;
const getActivityLogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield activity_log_model_1.default.findByPk(id);
});
exports.getActivityLogById = getActivityLogById;
const updateActivityLog = (id, activityLogData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield activity_log_model_1.default.update(activityLogData, {
        where: {
            id
        }
    });
});
exports.updateActivityLog = updateActivityLog;
const deleteActivityLog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield activity_log_model_1.default.destroy({
        where: {
            id
        }
    });
});
exports.deleteActivityLog = deleteActivityLog;
