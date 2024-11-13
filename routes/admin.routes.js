import { Router } from "express";
import { authentication, authorization } from "../middlewares/auth.middle.js";
import {
  createOneUser,
  getAllTasks,
  getAllUsers,
} from "../controllers/admin.ctrl.js";

const router = Router();

router.get("/admin/users", authentication, authorization, getAllUsers);

router.post("/admin/users", authentication, authorization, createOneUser);

router.get("/admin/tasks", authentication, authorization, getAllTasks);

export { router as adminRouter };
