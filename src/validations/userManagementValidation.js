import Joi from "joi";

export const createUserManagementSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    // email: Joi.string().required(),
    // age: Joi.number().integer().empty(''),
    role: Joi.string().required(),
    // status: Joi.string().required(),
    phone: Joi.number().integer().empty(''),
});