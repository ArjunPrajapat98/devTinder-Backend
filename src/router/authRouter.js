import express, { application } from 'express';
import { userModal } from '../modals/userModal.js';

export const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
    try {
        const obj = req.body;
        const userInstance = new userModal(obj);
        const createdUser = await userInstance.save();

        res.status(200).json({
            message: 'Success',
            result: createdUser
        })

    } catch (error) {
        return res.status(400).send(error.message);
    }
})