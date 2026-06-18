import jwt from 'jsonwebtoken'
import { userModal } from '../modals/user.js';

export const adminAuth = (req, res, next) => {
    try {
        let token = '123' // client token
        let storeToken = '123' // stored token
        let check = (storeToken === token) ? true : false;
        if (!check) {
            res.status(200).send('Invalid credentials')
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send('Error in middileware')
    }
}

export const userAuth = async (req, res, next) => {
    try {
        let { id } = req.params;
        let { token } = req.cookies;

        const { _id } = await jwt.verify(token, 'Common@123');
        if (!_id) {
            throw new Error('Invalid User')
        }

        const user = await userModal.findById(_id);
        if (!user?._id) {
            throw new Error('User not found')
        }

        req.user = user;
        next();
    } catch (error) {
        next(error)
    }
}