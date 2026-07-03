import { userManagementModal } from "../modals/userManagement.js"

export const dashboardAnaliticsController = async (req, res, next) => {
    try {
        const findUsers = await userManagementModal.aggregate([
            // { $match: { status: "inactive" } },
            { $group : {
                _id: '$status',
                totalUsers: { $sum: 1}

            }}
            // {
            //     $project: {
            //         firstName: 1,
            //         status: 1
            //     }
            // },
            // { $sort : {firstName : 1}},
        ])

        res.status(200).json({
            success: true,
            message: 'success',
            // total_records: findUsers?.length,
            result: findUsers,
        })

    } catch (error) {
        next(error)
    }
}
// date filter from - to date
// users - totalUsers, ageWiseUsers
// connection - totalUsers
// user management - totalUsers, activeUsers, inactiveUsers, ageWiseUsers
// product management - totalUsers, monthlyUsers
// response = {
//     user: {
//         totalUsers: 0,
//         ageWiseUsers: 0,
//     },
//     connection: {
//         totalUsers: 0,
//     },
//     user_management: {
//         totalUsers: 0,
//         activeUsers: 0,
//         inactiveUsers: 0,
//         ageWiseUsers: 0,
//     },
//     product_management: {
//         totalUsers: 0,
//     },
// }