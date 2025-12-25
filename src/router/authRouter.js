import express from 'express';

export const authRouter = express.Router();
import { signupValidate, userAuth } from '../config/middleware.js';
import { loginController, logoutController, signupController } from '../controller/authController.js';

authRouter.post('/signup', userAuth, signupValidate, signupController);
authRouter.post("/login", loginController);
authRouter.post("/logout", userAuth, logoutController);