import express from 'express';
import { UserModal } from '../modals/user.js';

export const userRouter = express.Router();

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
        let user = await UserModal.findOne({ email: email })

        if (!user) {
            res.status(404).send('User not found')
        }
        res.send(user);
    } catch (error) {
        res.status(400).send('Something went wrong')
    }
})

userRouter.get('/feed', async (req, res) => {
    try {
        const list = await UserModal.find({});
        res.send(list);
    } catch (error) {
        res.status(400).send('something went wrong')
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

// userRouter.patch('/updateUser', async (req, res) => {
//     try {
//         let user = req.body;
//         let getEmail = req.body.email;

//         let findUser = await UserModal.updateOne({ email: getEmail },
//             {
//                 $set: user,
//                 $inc: { balance: 90 }
//             });
//         res.send(findUser);

//     } catch (error) {
//         res.status(400).send('something went wrong')
//     }
// })