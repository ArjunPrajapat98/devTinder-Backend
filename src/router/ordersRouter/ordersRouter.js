import express from 'express';
import { createOrders, getListOrders } from '../../controller/ordersController.js';

export const ordersRouter = express.Router();

ordersRouter.post('/create', createOrders)
ordersRouter.post('/list', getListOrders)