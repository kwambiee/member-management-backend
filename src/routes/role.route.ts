import { Router } from "express";
import { createRoleController, getRolesController,deleteRoleController } from "../controllers/role.controller";



const router = Router();

router.post("/", createRoleController);
router.get("/", getRolesController);
router.delete("/:id", deleteRoleController);

export default router;
