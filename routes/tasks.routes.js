import { Router } from "express";
import { authentication } from "../middlewares/auth.middle.js";
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
  completeOne,
} from "../controllers/tasks.ctrl.js";
import { valSchema } from "../middlewares/val.schema.js";
import { taskSchema } from "../schemas/task.schemas.js";

const router = Router();

router.get("/tasks", authentication, getAll);

router.get("/tasks/:id", authentication, getOne);

router.post("/tasks", authentication, valSchema(taskSchema), createOne);

router.put("/tasks/:id", authentication, valSchema(taskSchema), updateOne);

router.patch("/tasks/:id", authentication, completeOne);

router.delete("/tasks/:id", authentication, deleteOne);

export { router as tasksRouter };
