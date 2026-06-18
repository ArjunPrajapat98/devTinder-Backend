import express from 'express';

export const authRouter = express.Router();
import { validate } from '../../middleware/validate.js';
import { createUserSchema, validateLoginUser } from '../../validations/authValidation.js';
import { loginController, signupController } from '../../controller/authController.js';

authRouter.post('/signup', validate(createUserSchema), signupController)
authRouter.post('/login', validate(validateLoginUser), loginController)