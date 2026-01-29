import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModal } from '../modals/userModal.js';

const privateKey = 'Common@12345';

export const signupController = async (req, res) => {
    try {
        let { firstName, lastName, email, password } = req.body;

        const findUsers = await UserModal.findOne({ email: email });

        if (findUsers?._id) {
            return res.status(400).json({
                message: `User already exist with this ${findUsers?.email}`
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const userInstance = new UserModal({ firstName, lastName, email, password: hashPassword })
        const updatedInstance = await userInstance.save();

        res.status(200).json({
            success: true,
            message: `${updatedInstance?.firstName} signup successfully`,
            result: updatedInstance
        })
    } catch (error) {
        res.status(500).json({
            message: error?.message,
            error
        })
    }
}

export const loginController = async (req, res) => {
    try {
        let { email, password } = req.body;

        const userExist = await UserModal.findOne({ email: email });

        if (!userExist?._id) {
            return res.status(400).json({
                message: 'Invalid credentials',
                success: false
            })
        }

        const compareHash = await bcrypt.compare(password, userExist?.password);

        if (!compareHash) {
            return res.status(400).json({
                message: 'Invalid credentials',
                success: false
            })
        }

        const token = await userExist.getJWT();

        res.cookie("token", token);

        res.status(200).json({
            message: `${userExist?.firstName} login successfully`,
            success: true,
            result: { token }
        })
    } catch (error) {
        res.status(500).json({
            message: error?.message,
            success: false
        })
    }
}

export const logoutController = async (req, res) => {
    try {
        await jwt.sign({ _id: req?.user?._id }, privateKey, { expiresIn: '0d' })
        res.cookie("token", null, { expires: new Date(Date.now()) });
        res.status(200).json({
            message: 'User Logout successfully',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: error?.message,
            success: false
        })
    }
}