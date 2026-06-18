import express from 'express';
import { userAuth } from '../../middleware/middileware.js';
import { sendConnectionController } from '../../controller/connectionController.js';
import { validate } from '../../middleware/validate.js';
import { validationSendConnection } from '../../validations/connectionValidation.js';

export const connectionRouter = express.Router();

connectionRouter.post('/:id/:status', userAuth, validate(validationSendConnection), sendConnectionController)