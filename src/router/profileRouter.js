import express from 'express';
import { userProfileController } from '../controller/profileController.js';
import { userAuth } from '../middleware/authMiddleware.js';

export const profileRouter = express.Router();

profileRouter.get('/view', userAuth, userProfileController);