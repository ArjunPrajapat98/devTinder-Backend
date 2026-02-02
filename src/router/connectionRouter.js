import express from 'express';
import { reviewConnectionController, sendConnectionController } from '../controller/connectionController.js';
import { userAuth } from '../middleware/authMiddleware.js';

export const connectionRouter = express.Router();

connectionRouter.post('/send/:status/:id', userAuth, sendConnectionController)
connectionRouter.post('/review/:status/:id', userAuth, reviewConnectionController)