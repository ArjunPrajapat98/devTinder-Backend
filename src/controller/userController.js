import { userModal } from "../modals/user.js"

export const userByEmailController = async (req, res, next) => {
    try {
        let { email } = req.body;

        if (!email) {
            throw new Error("email id not found")
        }

        const user = await userModal.findOne({ email });
        if (!user) {
            throw new Error("invalid email id")
        }

        res.status(200).json({
            success: true,
            result: user
        })
    } catch (error) {
        next(error)
    }
}

export const userByIdController = async (req, res, next) => {
    try {
        let { _id } = req.body;
        if (!_id) {
            throw new Error("invalid user id")
        }

        const user = await userModal.findById(_id);
        if (!user) {
            throw new Error("user not found")
        }

        res.status(200).json({
            success: true,
            result: user
        })

    } catch (error) {
        next(error)
    }
}

export const allUsersController = async (req, res, next) => {
    try {
        let users = await userModal.find({});

        res.status(200).json({
            success: true,
            result: users
        })
    } catch (error) {
        next(error)
    }
}