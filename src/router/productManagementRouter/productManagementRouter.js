import express from 'express';
import { createProductManagement, getProductList } from '../../controller/productManagementController.js';
import { validate } from '../../middleware/validate.js';
import { createProductManagementSchema } from '../../validations/productManagementValidation.js';

export const productManagementRouter = express.Router();

productManagementRouter.post('/create', validate(createProductManagementSchema), createProductManagement)
productManagementRouter.get('/list', getProductList)