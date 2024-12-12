import { Router } from "express";
import passport from "passport";
import {createMemberController, getMembersController, getMemberByIdController, updateMemberController, deleteMemberController} from "../controllers/member.controller";
import "../config/passport";

const router = Router();

router.post("/",  passport.authenticate('jwt', { session: false }),createMemberController);
router.get("/",  passport.authenticate('jwt', { session: false }),getMembersController);
router.get("/:id", passport.authenticate('jwt', { session: false }), getMemberByIdController);
router.put("/:id",  passport.authenticate('jwt', { session: false }),updateMemberController);
router.delete("/:id",  passport.authenticate('jwt', { session: false }),deleteMemberController);

export default router;