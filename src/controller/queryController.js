import { userModal } from "../modals/user.js"

export const eqQueryController = async (req, res, next) => {
    try {
        // const result = await userModal.find({
        //     age: { $eq: 30 }
        // })

        // const result = await userModal.find({
        //     age: { $ne: 30 }
        // })

        // const result = await userModal.find({
        //     age: { $ne: 30, $exists: true }
        // })

        // const result = await userModal.find({
        //     age: { $gt: 30 }
        // })

        // const result = await userModal.find({
        //     age: { $gte: 30 }
        // })

        // const result = await userModal.find({
        //     age: { $lt: 30 }
        // })

        // const result = await userModal.find({
        //     age: { $lte: 30 }
        // })

        // const result = await userModal.find({
        //     age: {
        //         $gt: 20,
        //         $lt: 30
        //     }
        // })

        // const result = await userModal.find({
        //     age: { $in: [25, 30] }
        // })

        // const result = await userModal.find({
        //     age: { $nin: [25, 30], $exists: true }
        // })

        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        
        const result = await userModal.find({
            age: { $lte: 25, $exists: true },
            createdAt: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        });

        res.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        next(error)
    }
}