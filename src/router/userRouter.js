import express from 'express';
import { userAuth } from '../middleware/authMiddleware.js';
import { matchConnectionController, userRequestReceivedController } from '../controller/userController.js';

export const userRouter = express.Router();

userRouter.get('/request/received', userAuth, userRequestReceivedController)
userRouter.get('/match-connection', userAuth, matchConnectionController)