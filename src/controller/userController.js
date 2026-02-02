import { Connections } from "../modals/connectionModal.js"

export const userRequestReceivedController = async (req, res) => {
    try {
        const loginUser = req?.user?._id;

        const connection = await Connections.find({
            $or: [
                { fromUserId: loginUser },
                { toUserId: loginUser }
            ]
        }).populate('fromUserId', 'firstName lastName').populate('toUserId', 'firstName lastName')

        res.status(200).json({
            message: 'success',
            result: connection
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}