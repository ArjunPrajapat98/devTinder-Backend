import jwt from 'jsonwebtoken'
import { UserModal } from '../modals/user.js';
import Joi from "joi";

export const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            res.status(404).send('Token not found')
        }
        const { _id } = await jwt.verify(token, "Common@7070");
        if (!_id) {
            res.status(404).send('Invalid token, User not found')
        }
        const user = await UserModal.findById(_id);
        if (!user) {
            res.status(404).send('Invalid token, User not found')
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send('Error in userAuth' + error)
    }
}

export const signupValidate = async (req, res, next) => {
    const signupValidationSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
    const { error } = signupValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error?.details[0]?.message, success: false });
    }
    next();
}