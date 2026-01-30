import Joi from 'joi';

export const signupSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
})

export const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

export const sendConnectionValidation = ({ fromUserId, toUserId, status }) => {
    if (!fromUserId) {
        throw new Error('Invalid from user is required')
    } else if (!toUserId) {
        throw new Error('Invalid to usre is required')
    } else if (!status) {
        throw new Error('Status is required')
    } else if (!(["Ignore", "Interested"].includes(status))) {
        throw new Error('Invalid status')
    }
}