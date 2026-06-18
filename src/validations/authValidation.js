import Joi from 'joi'

export const createUserSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().empty(''),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

export const validateLoginUser = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})