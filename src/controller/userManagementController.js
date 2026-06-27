import { userManagementModal } from "../modals/userManagement.js"

export const createUserManagement = async (req, res, next) => {
    try {
        let { firstName, lastName, email, age, role, status, phone } = req.body;
        const createdUser = new userManagementModal({ firstName, lastName, email, age, role, status, phone });
        const userInstance = await createdUser.save();

        res.status(200).json({
            success: true,
            message: 'success',
            result: userInstance,
        })

    } catch (error) {
        next(error);
    }
}

export const getListUserManagement = async (req, res, next) => {
    try {
        let { search = "", status = "", limit, offset = 1 } = req.body;

        let skip = (offset - 1) * limit;

        let query = {};

        if (status) {
            query.status = status;
        }
        if (search) {
            query.$or = [
                { firstName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ]
        }

        let result = await userManagementModal.find(query).skip(skip).limit(limit);

        res.status(200).json({
            success: true,
            message: 'success',
            result,
        })

    } catch (error) {
        next(error);
    }
}