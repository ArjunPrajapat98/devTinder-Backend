import { userModal } from "../modals/user.js"
import jwt from "jsonwebtoken";

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

export const deleteUserController = async (req, res, next) => {
    try {
        let { _id } = req.body;
        if (!_id) {
            throw new Error('User id not found')
        }

        const deleteUser = await userModal.findByIdAndDelete(_id);
        res.status(200).json({
            success: true,
            result: deleteUser
        })

    } catch (error) {
        next(error)
    }
}

export const updateUserController = async (req, res, next) => {
    try {
        let { id } = req.params;
        let { name, age, email, password } = req.body;

        const allow_update = ["name", "age", "email", "password"]
        const action = Object.keys(req.body).every((el) => allow_update.includes(el))
        if (!action) {
            throw new Error('User update not allow')
        }

        const updatedUser = await userModal.findByIdAndUpdate(id, { name, age, email, password }, { returnDocument: "after" });

        res.status(200).json({
            success: true,
            result: updatedUser
        })
    } catch (error) {
        next(error)
    }
}

export const userProfileController = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            result: req.user
        })
    } catch (error) {
        next(error)
    }
}