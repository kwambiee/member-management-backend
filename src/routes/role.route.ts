import { Router } from "express";
import { createRoleController, getRolesController } from "../controllers/role.controller";

const router = Router();

router.post("/", createRoleController);
router.get("/", getRolesController);

export default router;
