import express from 'express';
import { userAuth } from '../config/middleware.js';

export const requestRouter = express.Router();

requestRouter.post('/send', userAuth, async (req, res) => {
    try {
        let { user } = req;
        res.status(200).send(`${user.firstName} send request successfully`)
    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
})
