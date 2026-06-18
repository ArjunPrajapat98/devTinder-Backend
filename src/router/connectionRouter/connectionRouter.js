import express from 'express';
import { userAuth } from '../../middleware/middileware.js';
import { feedConnectionController, matchConnectionController, receivedConnectionController, reviewConnectionController, sendConnectionController } from '../../controller/connectionController.js';
import { validate } from '../../middleware/validate.js';
import { validationSendConnection } from '../../validations/connectionValidation.js';

export const connectionRouter = express.Router();

connectionRouter.post('/send/:id/:status', userAuth, validate(validationSendConnection), sendConnectionController)
connectionRouter.post('/review/:id/:status', userAuth, validate(validationSendConnection), reviewConnectionController)
connectionRouter.post('/received', userAuth, receivedConnectionController)
connectionRouter.post('/match', userAuth, matchConnectionController)
connectionRouter.post('/feed', userAuth, feedConnectionController)