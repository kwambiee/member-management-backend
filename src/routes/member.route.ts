import { Router } from "express";

import {createMemberController, getMembersController, getMemberByIdController, updateMemberController, deleteMemberController} from "../controllers/member.controller";

const router = Router();

router.post("/", createMemberController);
router.get("/", getMembersController);
router.get("/:id", getMemberByIdController);
router.put("/:id", updateMemberController);
router.delete("/:id", deleteMemberController);

export default router;