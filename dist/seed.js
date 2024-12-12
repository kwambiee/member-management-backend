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
exports.seedRoles = seedRoles;
const role_model_1 = __importDefault(require("./models/role.model"));
function seedRoles() {
    return __awaiter(this, void 0, void 0, function* () {
        const roles = ["Admin", "Member"];
        for (const roleName of roles) {
            const [_, created] = yield role_model_1.default.findOrCreate({
                where: { roleName: roleName },
            });
            if (created) {
                console.log(`Role ${roleName} created`);
            }
            else {
                console.log(`Role ${roleName} already exists`);
            }
        }
    });
}
// I want to create a seed function that will create users, it only requires username, email
