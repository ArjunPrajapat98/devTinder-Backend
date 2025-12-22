import express from 'express';
import { userAuth } from '../config/middleware.js';

export const profileRouter = express.Router();

profileRouter.get('/view', userAuth, async (req, res) => {
    try {
        let { user } = req;
        let response = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt,
            udpatedAt: user.udpatedAt,
            _id: user._id,
        }
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send('Error in signup' + error)
    }
})