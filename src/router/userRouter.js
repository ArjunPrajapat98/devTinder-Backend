import express, { application } from 'express';
import { userModal } from '../modals/userModal.js';

export const userRouter = express.Router();

userRouter.post('/userByOne', async (req, res) => {
    try {
        const { email } = req.body;

        const users = await userModal.findOne({ email: email });

        res.status(200).json({
            message: 'Success',
            result: users
        })

    } catch (error) {
        res.status(500).send('Error' + error.message)
    }
})

userRouter.post('/userById', async (req, res) => {
    try {
        const { _id } = req.body;

        const user = await userModal.findById(_id);

        res.status(200).json({
            message: 'success',
            result: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            result: []
        })
    }
})

userRouter.delete('/userDelete', async (req, res) => {
    try {
        const { _id } = req.body;

        const user_delete = await userModal.findByIdAndDelete(_id);

        res.status(200).json({
            message: 'success',
            result: user_delete
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

userRouter.patch('/updateUser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const object = req.body;

        const user = await userModal.findByIdAndUpdate(id, object);

        res.status(200).send({
            message: 'edit',
            result: user
        })

    } catch (error) {
        res.status(500).send(error.message);
    }
})

userRouter.patch('/updateUser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const object = req.body;

        const user = await userModal.updateOne(id, object);

        res.status(200).send({
            message: 'edit',
            result: user
        })

    } catch (error) {
        res.status(500).send(error.message);
    }
})