import { ConnectionModal } from "../modals/connections.js";
import { userModal } from "../modals/user.js";

export const sendConnectionController = async (req, res, next) => {
    try {
        let fromUserId = req?.user?._id;
        let toUserId = req?.params?.id;
        let status = req?.params?.status

        const checkToUser = await userModal.findById(toUserId);
        if (!checkToUser?._id) {
            throw new Error('Invalid user id')
        }

        if (fromUserId.equals(toUserId)) {
            throw new Error('Can not send request to yourself')
        }

        const finalUser = await ConnectionModal.findOne({
            $or: [
                { fromUserId, toUserId },
                { fromUserId: toUserId, toUserId: fromUserId }
            ]
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

export const reviewConnectionController = async (req, res, next) => {
    try {
        let fromUserId = req?.user?._id;
        let toUserId = req.params.id;
        let status = req.params.status;

        let toUserExist = await userModal.findOne({ _id: toUserId });
        if (!toUserExist?._id) {
            throw new Error('Receiver user not found')
        }

        let receiverStatus = ["Accept", "Reject"];
        if (!receiverStatus.includes(status)) {
            throw new Error('Invalid Status')
        }

        const userData = await ConnectionModal.findOne({
            fromUserId: toUserId,
            toUserId: fromUserId, // loged in user = req.user._id = fromUserId,
            status: 'Interested'
        })

        if (!userData?._id) {
            throw new Error('Invalid User')
        }
        userData.status = status
        let updateUser = await userData.save();

        console.log('updateUser', updateUser);

        res.status(200).json({
            success: true,
            result: updateUser
        })

    } catch (error) {
        next(error);
    }
}

export const receivedConnectionController = async (req, res, next) => {
    try {
        let { _id } = req.user;

        let data = await ConnectionModal.find({
            toUserId: _id,
            status: "Interested",
        })
            .populate('fromUserId', 'name')
            .populate('toUserId', 'name')

        console.log('data', data)

        res.status(200).json({
            success: true,
            result: data
        })

    } catch (error) {
        next(error);
    }
}

export const matchConnectionController = async (req, res) => {
    try {
        let loginUser = req?.user?._id;

        const matchConnection = await ConnectionModal.find({
            status: 'Accept',
            $or: [
                { fromUserId: loginUser },
                { toUserId: loginUser }
            ]
        }).populate('fromUserId', 'name').populate('toUserId', 'name')

        res.status(200).json({
            success: true,
            result: matchConnection
        })

    } catch (error) {
        next(error)
    }
}

export const feedConnectionController = async (req, res) => {
    try {
        res.send('success')
    } catch (error) {
        next(error)
    }
}