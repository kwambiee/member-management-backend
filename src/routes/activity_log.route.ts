import { Router } from "express";
import passport from "passport";
import { createActivityLogController, getActivityLogsController, getActivityLogByIdController, updateActivityLogController, deleteActivityLogController } from "../controllers/activity_log.controller";
import "../config/passport";

const router = Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createActivityLogController
);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getActivityLogsController
);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  getActivityLogByIdController
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateActivityLogController
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteActivityLogController
);

export default router;