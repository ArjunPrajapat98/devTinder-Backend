import express from 'express';
import { adminAuth } from '../../middleware/middileware.js';

export const userRouter = express.Router();

userRouter.get('/user/:id', adminAuth, (req, res) => {
    res.status(200).send('This is a user router')
})

userRouter.get('/', (req, res) => {
    res.status(200).send('This is a default router')
})