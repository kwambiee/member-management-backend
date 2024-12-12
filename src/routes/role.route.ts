import { Router } from "express";
import {
  getRolesController,
  deleteRoleController,
} from "../controllers/role.controller";

const router = Router();

router.get("/", getRolesController);
router.delete("/:id", deleteRoleController);

export default router;
