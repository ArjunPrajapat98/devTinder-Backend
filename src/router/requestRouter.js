import express from 'express';
import { sendRequestValidation } from '../validation/validation.js'
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

        const receiver = await UserModal.findOne({ id: toUserId });
        if (!receiver?._id) {
            throw new Error('Receiver user not found')
        }

        const matchConnection = await Connections.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId }
            ]
        })
        if (matchConnection) {
            throw new Error('Connection already made')
        }

        let connectUser = new Connections({ fromUserId, toUserId, status })
        await connectUser.save();

        response(res, 200, `${req?.user?.firstName} ${status} ${receiver?.firstName}`, connectUser)
    } catch (error) {
        response(res, 400, error?.message, [])
    }
})