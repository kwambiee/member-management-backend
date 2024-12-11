import { Router } from "express";
import passport from "passport";

import {
  getUserByIdController,
  getUsersController,
  updateUserController,
  createUserController,
  deleteUserController,
  loginController,
  logOutController,
} from "../controllers/user.controller";

import "../config/passport";

const router = Router();

console.log(router);

router.post("/", createUserController);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getUsersController
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getUserByIdController
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateUserController
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteUserController
);
router.post("/login", loginController);
router.post(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  logOutController
);

export default router;
