import bcrypt from 'bcrypt';
import { UserModal } from '../modals/userModal.js';

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

        const userInstance = await UserModal({ firstName, lastName, email, password: hashPassword })
        await userInstance.save();

        res.status(200).json({
            success: true,
            message: `${userInstance?.firstName} signup successfully`,
            result: userInstance
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}