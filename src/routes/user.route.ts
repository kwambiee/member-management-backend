import { Router } from "express";

import {
  getUserByIdController,
  getUsersController,
  updateUserController,
  createUserController,
  deleteUserController,
  loginController,
} from "../controllers/user.controller";
import { authenticate } from "../middleware/auth";


const router = Router();

router.post("/", createUserController);
router.get("/", authenticate(),getUsersController);
router.get("/:id", getUserByIdController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
router.post("/login", loginController);

export default router;
