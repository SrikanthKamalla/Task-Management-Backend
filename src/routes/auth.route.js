import express from "express";
import { signUp, login } from "../controllers/user.controllers.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import { loggedInUserInfo } from "../controllers/user.controllers.js";

const router = express.Router();
router.post("/signUp", signUp);
router.post("/login", login);
router.get("/me", isLoggedIn, loggedInUserInfo);
export default router;
