import express from 'express';
import { signupSchema, loginSchema } from '../middleware/errorSchema.js';
import { validate } from '../middleware/validationMiddleware.js';
import { loginController, logoutController, signupController } from '../controller/authController.js';

export const authRouter = express.Router();

authRouter.post('/signup', validate(signupSchema), signupController);
authRouter.post('/login', validate(loginSchema), loginController);
authRouter.post('/logout', logoutController)