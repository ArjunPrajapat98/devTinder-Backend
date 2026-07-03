import express from 'express';
import { dashboardAnaliticsController } from '../../controller/dashboardController.js';
import { authToken } from '../../middleware/middileware.js';

export const dashboardRouter = express.Router();

dashboardRouter.get('/data', authToken, dashboardAnaliticsController)