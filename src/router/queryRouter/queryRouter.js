import express from 'express';
import { eqQueryController } from '../../controller/queryController.js';

export const queryRouter = express.Router();

queryRouter.get('/equal', eqQueryController)

