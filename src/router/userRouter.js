import express from 'express';
import { UserModal } from '../modals/user.js';
import { userAuth } from '../config/middleware.js';
import { response } from '../helper/response.js';
import { Connections } from '../modals/connection.js';

export const userRouter = express.Router();

userRouter.get('/request/received', userAuth, async (req, res) => {
    try {
        const connection = await Connections.find({
            toUserId: req.user._id,
            status: 'Interested'
        })
            .populate('fromUserId', 'firstName lastName')
            .populate('toUserId', 'firstName lastName')

        response(res, 200, "Success", connection)
    } catch (error) {
        response(res, 400, error.message)
    }
})

userRouter.get('/match-connection', userAuth, async (req, res) => {
    try {
        let loginUser = req.user._id;

        const matchUser = await Connections.find({
            status: 'Accept',
            $or: [
                { fromUserId: loginUser },
                { toUserId: loginUser }
            ]
        }).populate('fromUserId', 'firstName lastName').populate('toUserId', 'firstName lastName')

        const result = matchUser.map((el) => el.toUserId._id.equals(loginUser) ? el.fromUserId : el.toUserId)

        response(res, 200, 'success', result)
    } catch (error) {
        response(res, 400, error.message, [])
    }
})

userRouter.get('/feed', userAuth, async (req, res) => {
    try {
        let logedInUser = req.user._id;
        let page = req.query.page || 1;
        let limit = req.query.limit || 10;
        let skip = (page - 1) * limit

        const connectionUsers = await Connections.find({
            $or: [
                { fromUserId: logedInUser },
                { toUserId: logedInUser },
            ]
        }).select("fromUserId toUserId")

        const hideUsers = new Set();

        connectionUsers.forEach((el) => {
            hideUsers.add(el.fromUserId.toString());
            hideUsers.add(el.toUserId.toString());
        })

        const users = await UserModal.find({
            $and: [
                { _id: { $nin: Array.from(hideUsers) } },
                { _id: { $ne: logedInUser } }
            ]
        }).skip(skip).limit(limit);

        response(res, 200, 'success', users)
    } catch (error) {
        response(res, 400, error.message, [])
    }
})

userRouter.get('/userByEmail', async (req, res) => {
    let email = req?.body?.email;
    try {
        let user = await UserModal.find({ email: email })

        if (!user) {
            res.status(404).send('User not found')
        }
        res.send(user);
    } catch (error) {
        res.status(400).send('Something went wrong')
    }
})

userRouter.get('/userById', async (req, res) => {
    let userId = req?.body?._id;
    try {
        let findUser = await UserModal.findById(userId);
        res.send(findUser);
    } catch (error) {
        res.status(400).send('Something went wrong')
    }
})

userRouter.get('/userByOne', async (req, res) => {
    let email = req?.body?.email;
    try {
        let user = await UserModal.findOne({ firstName: 'Arjun', lastName: 'Prajapat' })

        if (!user) {
            res.status(404).send('User not found')
        }
        res.send(user);
    } catch (error) {
        res.status(400).send('Something went wrong')
    }
})

userRouter.delete('/userDelete', async (req, res) => {
    let userId = req?.body?._id;
    try {
        const user = await UserModal.findByIdAndDelete(userId)
        res.send(user);
    } catch (error) {
        res.status(400).send('something went wrong')
    }
})

userRouter.patch('/updateUser/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;
        let { firstName, lastName, dob, age, photoUrl, gender, device, skills } = data;

        let ALLOW_UPDATE = ["firstName", "lastName", "dob", "age", "photoUrl", "gender", "device", "skills"];
        let is_ALLOW = Object.keys(data)?.every((el) => ALLOW_UPDATE?.includes(el));
        if (!is_ALLOW) {
            res.status(400).send('Update not allow')
        }
        let update = await UserModal.findByIdAndUpdate(id, {
            firstName, lastName, dob, age, photoUrl, gender, device, skills
        }, { returnDocument: 'after' })
        res.send({ result: update, success: true });
    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
})

userRouter.patch('/updateUser', async (req, res) => {
    try {
        let user = req.body;
        let getEmail = req.body.email;

        let findUser = await UserModal.updateOne({ email: getEmail },
            {
                $set: user,
                $inc: { balance: 90 }
            });
        res.send(findUser);

    } catch (error) {
        res.status(400).send('something went wrong')
    }
})