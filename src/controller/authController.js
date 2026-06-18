import { userModal } from "../modals/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const privateKey = 'Common@123'

export const signupController = async (req, res, next) => {
    try {
        let { name, age, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        const userInstance = new userModal({ name, age, email, password: hashPassword });

        const userObject = await userInstance.save();

        res.status(200).json({
            success: true,
            message: 'success',
            result: hashPassword,
        })

    } catch (error) {
        next(error)
    }
}

export const loginController = async (req, res, next) => {
    try {
        let { email, password } = req.body;

        const userExist = await userModal.findOne({ email });
        if (!userExist) {
            throw new Error('Invalid credentials')
        }

        const comparePassword = await bcrypt.compare(password, userExist?.password)
        if (!comparePassword) {
            throw new Error('Invalid credentials')
        }

        const generateToken = await jwt.sign({ _id: userExist?._id }, privateKey)

        res.cookie("token", generateToken, { expires: new Date(Date.now() + 24 * 7 * 3600000) })

        res.status(200).json({
            success: true,
            result: {
                token: generateToken
            }
        })
        // validate email , password
        // check user exist in db using email id
        // compare hash password is correct
        // generate jwt token
        // send response with token

    } catch (error) {
        next(error)
    }
}