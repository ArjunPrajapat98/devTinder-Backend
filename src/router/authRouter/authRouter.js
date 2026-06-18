import express from 'express';

export const authRouter = express.Router();
import { validate } from '../../middleware/validate.js';
import { createUserSchema } from '../../validations/authValidation.js';
import { signupController } from '../../controller/authController.js';

authRouter.post('/signup', validate(createUserSchema), signupController)