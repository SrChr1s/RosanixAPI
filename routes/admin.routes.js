import { Router } from "express";
import { authentication, authorization } from "../middlewares/auth.middle.js";
import { getAllTasks, getAllUsers } from "../controllers/admin.ctrl.js";

const router = Router();

router.get("/admin/users", authentication, authorization, getAllUsers);

router.get("/admin/tasks", authentication, authorization, getAllTasks);

export { router as adminRouter };
