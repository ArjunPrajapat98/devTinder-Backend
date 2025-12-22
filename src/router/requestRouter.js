import express from 'express';
import { userAuth } from '../config/middleware.js';
import { sendRequestValidation } from '../validation/validation.js';
import { UserModal } from '../modals/user.js';
import { Connections } from '../modals/connection.js';

export const requestRouter = express.Router();

requestRouter.post('/send/:status/:id', userAuth, async (req, res) => {
    try {
        let fromUserId = req?.user?._id;
        let toUserId = req.params.id;
        let status = req.params.status;

        sendRequestValidation({ fromUserId, toUserId, status });

        let findUser = await Connections.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId }
            ]
        })
        if (findUser) {
            return res.status(400).json({ message: 'Connection already made' })
        }

        let isValidToUser = await UserModal.findById(toUserId);
        if (!isValidToUser) {
            return res.status(400).send('Receiver user not found or Invalid user')
        }

        let createdData = new Connections({ fromUserId, toUserId, status });
        await createdData.save();

        res.status(200).json({
            message: `${req.user.firstName} send request successfully`,
            result: createdData,
            success: true
        })

    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
})
