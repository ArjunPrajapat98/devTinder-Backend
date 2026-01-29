import jwt from 'jsonwebtoken';
import { UserModal } from '../modals/userModal.js';

const privateKey = 'Common@12345';

export const userAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies;
        if (!token) {
            return res.status(400).json({
                message: 'Invalid token',
                success: false,
            })
        }

        const { _id } = await jwt.verify(token, privateKey);

        const findUser = await UserModal.findById(_id);

        if(!findUser?._id){
            return res.status(400).json({
                message:'User not found with this token'
            })
        }

        req.user = findUser;

        next();

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}