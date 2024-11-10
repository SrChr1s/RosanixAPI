import { Router } from "express";
import { authentication } from "../middlewares/auth.middle.js";
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../controllers/tasks.ctrl.js";
import { valSchema } from "../middlewares/val.schema.js";
import { taskSchema } from "../schemas/task.schemas.js";

const router = Router();

router.get("/home", authentication, getAll);
router.get("/home/tarea/:id", authentication, getOne);
router.post("/home", authentication, valSchema(taskSchema), createOne);
router.put("/home/tarea/:id", authentication, valSchema(taskSchema), updateOne);
router.delete("/home/tarea/:id", authentication, deleteOne);

export { router as tasksRouter };
