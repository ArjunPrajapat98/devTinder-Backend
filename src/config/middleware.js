import jwt from 'jsonwebtoken'
import { UserModal } from '../modals/user.js';

export const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if(!token){
            res.status(404).send('Token not found')
        }
        const { _id } = await jwt.verify(token, "Common@7070");
        if(!_id){
            res.status(404).send('Invalid token, User not found')
        }
        const user = await UserModal.findById(_id);
        if(!user){
            res.status(404).send('Invalid token, User not found')
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(400).send('Error in userAuth' + error)
    }
}