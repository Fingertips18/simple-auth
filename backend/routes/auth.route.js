import express from "express";

import AuthController from "../controllers/auth.controller.js";
import { AuthRoutes } from "../constants/routes.js";

const router = express.Router();

router.post(AuthRoutes.signUp.path, AuthController.signUp);

router.post(AuthRoutes.signIn.path, AuthController.signIn);

router.post(AuthRoutes.signOut.path, AuthController.signOut);

export default router;
