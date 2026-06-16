import express from 'express';
import { adminAuth } from '../../middleware/middileware.js';
import { defaultController, userController } from '../../controller/userController.js';

export const userRouter = express.Router();

userRouter.post('/createUser', adminAuth, userController)