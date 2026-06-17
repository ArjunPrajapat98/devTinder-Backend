import express from 'express';
import { adminAuth } from '../../middleware/middileware.js';
import { allUsersController, deleteUserController, updateUserController, userByEmailController, userByIdController } from '../../controller/userController.js';
import { validate } from '../../middleware/validate.js';
import { createUserSchema } from '../../validations/authValidation.js';

export const userRouter = express.Router();

userRouter.get('/userByEmail', userByEmailController)
userRouter.get('/userById', userByIdController)
userRouter.get('/allUsers', allUsersController)
userRouter.delete('/deleteUser', deleteUserController)
userRouter.patch('/:id', validate(createUserSchema), updateUserController)