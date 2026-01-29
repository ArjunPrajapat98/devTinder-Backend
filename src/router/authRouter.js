import express from 'express';
import { signupSchema } from '../middleware/errorSchema.js';
import { validate } from '../middleware/validationMiddleware.js';
import { signupController } from '../controller/authController.js';

export const authRouter = express.Router();

authRouter.post('/signup', validate(signupSchema), signupController)