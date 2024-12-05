import { Router } from "express";

import { createActivityLogController, getActivityLogsController, getActivityLogByIdController, updateActivityLogController, deleteActivityLogController } from "../controllers/activity_log.controller";

const router = Router();

router.post("/", createActivityLogController);
router.get("/", getActivityLogsController);
router.get("/:id", getActivityLogByIdController);
router.put("/:id", updateActivityLogController);
router.delete("/:id", deleteActivityLogController);

export default router;