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
exports.getRolesController = exports.createRoleController = void 0;
const role_service_1 = require("../services/role.service");
const createRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield (0, role_service_1.createRole)(req.body);
        res.status(201).json(role);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createRoleController = createRoleController;
const getRolesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield (0, role_service_1.getRoles)();
        res.status(200).json(roles);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getRolesController = getRolesController;
