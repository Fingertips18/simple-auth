import express from "express";

import AuthController from "../controllers/auth.controller.js";
import { AuthRoutes } from "../constants/routes.constant.js";

const router = express.Router();

router.post(AuthRoutes.signUp.path, AuthController.signUp);

router.post(AuthRoutes.signIn.path, AuthController.signIn);

router.post(AuthRoutes.signOut.path, AuthController.signOut);

router.post(AuthRoutes.verifyEmail.path, AuthController.verifyEmail);

router.post(AuthRoutes.forgotPassword.path, AuthController.forgotPassword);

router.post(
  `${AuthRoutes.resetPassword.path}/:token`,
  AuthController.resetPassword
);

export default router;
