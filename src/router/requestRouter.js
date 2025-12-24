import express from 'express';
import { receiveRequestValidation, sendRequestValidation } from '../validation/validation.js'
import { response } from '../helper/response.js';
import { userAuth } from '../config/middleware.js';
import { UserModal } from '../modals/user.js';
import { Connections } from '../modals/connection.js';

export const connectionRouter = express.Router();

connectionRouter.post('/send/:status/:id', userAuth, async (req, res) => {
    try {
        let fromUserId = req.user._id;
        let toUserId = req.params.id;
        let status = req.params.status;

        sendRequestValidation({ fromUserId, toUserId, status });

        const receiver = await UserModal.findOne({ _id: toUserId });
        if (!receiver?._id) {
            throw new Error('Receiver user not found')
        }

        const matchConnection = await Connections.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId }
            ]
        })
        if (matchConnection?._id) {
            throw new Error('Connection already made')
        }

        let connectUser = new Connections({ fromUserId, toUserId, status })
        await connectUser.save();

        response(res, 200, `${req?.user?.firstName} ${status} ${receiver?.firstName}`, connectUser)
    } catch (error) {
        response(res, 400, error?.message, [])
    }
})

connectionRouter.post('/receiver/:status/:id', userAuth, async (req, res) => {
    try {
        let fromUserId = req.user._id;
        let toUserId = req.params.id;
        let status = req.params.status;

        receiveRequestValidation({ fromUserId, toUserId, status })

        const userExist = await UserModal.findOne({ _id: toUserId });
        if (!userExist?._id) {
            throw new Error('To user not found')
        }

        const user = await Connections.findOne({
            fromUserId: toUserId,
            toUserId: fromUserId, // loged in user = req.user._id = fromUserId,
            status: 'Interested'
        })
        if (user?._id) {
            user.status = status;
            let updateUser = await user.save();

            response(res, 200, 'Success', updateUser)
        } else {
            throw new Error('User not found')
        }

    } catch (error) {
        response(res, 400, error.message, [])
    }
})