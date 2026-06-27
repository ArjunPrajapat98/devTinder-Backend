import express from 'express';
import { createUserManagement, getListUserManagement } from '../../controller/userManagementController.js';
import { validate } from '../../middleware/validate.js';
import { createUserManagementSchema } from '../../validations/userManagementValidation.js';

export const userManagementRouter = express.Router();

userManagementRouter.post('/create', validate(createUserManagementSchema), createUserManagement)
userManagementRouter.post('/list', getListUserManagement)