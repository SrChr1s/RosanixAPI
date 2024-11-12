import { Router } from "express";
import { authentication } from "../middlewares/auth.middle.js";
import { updateInfo } from "../controllers/users.ctrl.js";

const router = Router();

router.put("/user", authentication, updateInfo);

export { router as usersRouter };
