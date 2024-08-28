import express from "express";

import AuthController from "../controllers/auth.controller.js";
import { AuthRoutes } from "../constants/routes.js";

const router = express.Router();

router.get(AuthRoutes.signUp.path, AuthController.signUp);

router.get(AuthRoutes.signIn.path, AuthController.signIn);

router.get(AuthRoutes.signOut.path, AuthController.signOut);

export default router;
