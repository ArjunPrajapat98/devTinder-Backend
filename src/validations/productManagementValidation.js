import Joi from "joi";

export const createProductManagementSchema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().empty(''),
    price: Joi.number().integer().empty(''),
    stock: Joi.number().integer().empty(''),
    rating: Joi.number().min(0).max(5).precision(1).empty(''),
    tags: Joi.string().empty(''),
});