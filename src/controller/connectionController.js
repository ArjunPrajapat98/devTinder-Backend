import { ConnectionModal } from "../modals/connections.js";
import { userModal } from "../modals/user.js";

export const sendConnectionController = async (req, res, next) => {
    try {
        let fromUserId = req?.user?._id;
        let toUserId = req?.params?.id;
        let status = req?.params?.status

        if (status !== 'Interested') {
            res.status(400).json({
                success: false,
                error: 'Invalid status'
            })
        }

        const checkToUser = await userModal.findById(toUserId);
        if (!checkToUser?._id) {
            throw new Error('Invalid user id')
        }

        if (fromUserId.equals(toUserId)) {
            throw new Error('Can not send request to yourself')
        }

        const finalUser = await ConnectionModal.findOne({
            fromUserId,
            toUserId,
            status: 'Interested'
        });

        if (finalUser?._id) {
            throw new Error('Connection request already exist')
        }

        let userInstance = new ConnectionModal({ fromUserId, toUserId, status });

        const createdUser = await userInstance.save();

        res.status(200).json({
            success: true,
            result: createdUser
        })

        //  validate fromUserId, toUserId, status
        //  status should be Interested
        //  toUserId should be exist is db
        //  can not send request to your self
        //  can not send request again to the same user

    } catch (error) {
        next(error)
    }
}

// 'Ignore', 'Interested', 'Accept', 'Reject'