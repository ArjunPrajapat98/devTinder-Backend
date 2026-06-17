import express from 'express';
import { adminAuth } from '../../middleware/middileware.js';
import { allUsersController, userByEmailController, userByIdController } from '../../controller/userController.js';

export const userRouter = express.Router();

userRouter.get('/userByEmail', userByEmailController)
userRouter.get('/userById', userByIdController)
userRouter.get('/allUsers', allUsersController)