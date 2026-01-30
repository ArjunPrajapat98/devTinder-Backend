import { sendConnectionValidation } from "../middleware/errorSchema.js";
import { Connections } from "../modals/connectionModal.js";
import { UserModal } from "../modals/userModal.js";

export const sendConnectionController = async (req, res) => {
    try {
        let fromUserId = req?.user?._id;
        let toUserId = req.params?.id;
        let status = req.params?.status;

        sendConnectionValidation({ fromUserId, toUserId, status });

        const checkUser = await UserModal.findById(toUserId);
        if (!checkUser?._id) {
            return res.status(400).json({
                message: 'Invalid User Id',
                success: false
            })
        }

        const isExistAlready = await Connections.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId },
            ]
        })
        if (isExistAlready?._id) {
            return res.status(400).json({
                message: 'Connection already exist',
                success: false
            })
        }

        const created = new Connections({ fromUserId, toUserId, status });

        const result = await created.save();

        res.status(200).json({
            message: `${req?.user?.firstName} ${status} to ${checkUser?.firstName}`,
            result
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}