import express from 'express';
import { userAuth } from '../middleware/authMiddleware.js';
import { userRequestReceivedController } from '../controller/userController.js';

export const userRouter = express.Router();

userRouter.get('/request/received', userAuth, userRequestReceivedController)