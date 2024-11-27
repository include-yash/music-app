import express from "express";
import { userLogIn, userLogout, userSignUp } from "../controllers/user.controller.js";

const UserRouter = express.Router();

UserRouter.route("/signup").post(userSignUp);
UserRouter.route("/login").post(userLogIn);
UserRouter.route("/logout").post(userLogout);

export default UserRouter;