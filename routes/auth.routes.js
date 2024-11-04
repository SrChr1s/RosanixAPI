import { Router } from "express";
import { login, register, logout } from "../controllers/auth.ctrl.js";
import { loginSchema, regisSchema } from "../schemas/auth.schemas.js";
import { valSchema } from "../middlewares/val.schema.js";

const router = Router();

router.post("/login", valSchema(loginSchema), login);

router.post("/register", valSchema(regisSchema), register);

router.post("/logout", logout);

export { router as authRouter };
