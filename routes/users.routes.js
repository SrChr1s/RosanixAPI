import { Router } from "express";
import { authentication } from "../middlewares/auth.middle.js";
import { profile } from "../controllers/users.ctrl.js";

const router = Router();

router.get("/profile", authentication, profile);

export { router as usersRouter };
