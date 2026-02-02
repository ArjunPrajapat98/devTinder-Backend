import { Connections } from "../modals/connectionModal.js"

export const userRequestReceivedController = async (req, res) => {
    try {
        const loginUser = req?.user?._id;

        const connection = await Connections.find({
            toUserId: loginUser,
            status: "Interested"
        }).populate('fromUserId', 'firstName lastName')

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

export const matchConnectionController = async (req, res) => {
    try {
        const loginUser = req?.user?._id;

        const matchConnection = await Connections.find({
            status: 'Accept',
            $or: [
                { fromUserId: loginUser },
                { toUserId: loginUser },
            ]
        }).populate('fromUserId', 'firstName lastName').populate('toUserId', 'firstName lastName')

        const formatedArray = matchConnection?.map((el) => el?.fromUserId?._id.equals(loginUser) ? el?.toUserId : el?.fromUserId)

        res.status(200).json({
            message: 'success',
            result: formatedArray
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}