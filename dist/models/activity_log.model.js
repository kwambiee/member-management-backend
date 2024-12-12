"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLogs = void 0;
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
const core_1 = require("@sequelize/core");
let ActivityLogs = class ActivityLogs extends core_1.Model {
};
exports.ActivityLogs = ActivityLogs;
__decorate([
    decorators_legacy_1.PrimaryKey,
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER),
    __metadata("design:type", Object)
], ActivityLogs.prototype, "id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], ActivityLogs.prototype, "action", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    __metadata("design:type", String)
], ActivityLogs.prototype, "userId", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], ActivityLogs.prototype, "description", void 0);
exports.ActivityLogs = ActivityLogs = __decorate([
    (0, decorators_legacy_1.Table)({
        tableName: "activity_logs",
        timestamps: true,
    })
], ActivityLogs);
exports.default = ActivityLogs;
