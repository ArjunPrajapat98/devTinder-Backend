import Joi from "joi";

export const validationSendConnection = Joi.object({
    fromUserId: Joi.string().required(),
    toUserId: Joi.string().required(),
    status: Joi.string().required(),
})