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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
const core_1 = require("@sequelize/core");
const user_model_1 = __importDefault(require("./user.model"));
let Member = class Member extends core_1.Model {
};
exports.Member = Member;
__decorate([
    decorators_legacy_1.PrimaryKey,
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER),
    __metadata("design:type", Object)
], Member.prototype, "id", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Member.prototype, "firstName", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    decorators_legacy_1.NotNull,
    __metadata("design:type", String)
], Member.prototype, "lastName", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    __metadata("design:type", Object)
], Member.prototype, "profilePicture", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.DATE),
    decorators_legacy_1.NotNull,
    __metadata("design:type", Date)
], Member.prototype, "dateOfBirth", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    __metadata("design:type", String)
], Member.prototype, "phone", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    __metadata("design:type", String)
], Member.prototype, "roleId", void 0);
__decorate([
    (0, decorators_legacy_1.BelongsTo)(() => user_model_1.default, "userId"),
    __metadata("design:type", user_model_1.default)
], Member.prototype, "user", void 0);
__decorate([
    (0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING),
    __metadata("design:type", String)
], Member.prototype, "userId", void 0);
exports.Member = Member = __decorate([
    (0, decorators_legacy_1.Table)({
        tableName: "members",
        timestamps: true,
    })
], Member);
exports.default = Member;
