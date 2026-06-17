import { userModal } from "../modals/user.js";

export const signupController = async (req, res, next) => {
    try {
        let { name, age, email, password } = req.body;

        const userInstance = new userModal({ name, age, email, password });

        const userObject = await userInstance.save();

        res.status(200).json({
            success: true,
            message: 'success',
            result: userObject,
        })

    } catch (error) {
        next(error)
    }
}