import { Router } from "express";
import { authentication } from "../middlewares/auth.middle.js";
import {
  changeEmail,
  confirmEmail,
  updateInfo,
  changePassw,
} from "../controllers/users.ctrl.js";

const router = Router();

router.get("/confirm-account/:uuid", confirmEmail);

router.get("/change-email/:userId/:newEmail", changeEmail);

router.put("/user", authentication, updateInfo);

router.put("/user/change-password", authentication, changePassw);

export { router as usersRouter };
