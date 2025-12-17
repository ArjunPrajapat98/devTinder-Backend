import express from 'express';
import { connectDB } from './config/database.js';

const app = express();
import { UserModal } from './modals/user.js';
import { signupValidation } from './validation/validation.js';

app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        signupValidation(req);

        let obj = req?.body
        let userInstance = new UserModal(obj);
        await userInstance.save();

        res.status(201).send('User signup successfully')

    } catch (error) {
        res.status(400).send('Error in signup' + error)
    }
})

app.get('/userByEmail', async (req, res) => {
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

app.get('/userById', async (req, res) => {
    let userId = req?.body?._id;
    try {
        let findUser = await UserModal.findById(userId);
        res.send(findUser);
    } catch (error) {
        res.status(400).send('Something went wrong')
    }
})

app.get('/userByOne', async (req, res) => {
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

app.get('/feed', async (req, res) => {
    try {
        const list = await UserModal.find({});
        res.send(list);
    } catch (error) {
        res.status(400).send('something went wrong')
    }
})

app.delete('/userDelete', async (req, res) => {
    let userId = req?.body?._id;
    try {
        const user = await UserModal.findByIdAndDelete(userId)
        res.send(user);
    } catch (error) {
        res.status(400).send('something went wrong')
    }
})

app.patch('/updateUser/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let data = req.body;

        let ALLOW_UPDATE = ["firstName", "lastName", "dob", "age", "photoUrl", "gender", "device", "skills"];
        let is_ALLOW = Object.keys(data)?.every((el) => ALLOW_UPDATE.includes(el));
        if(is_ALLOW){
            
        }
        let update = await UserModal.findByIdAndUpdate(id, reqData, { returnDocument: 'after' })
        res.send(update);
    } catch (error) {
        res.status(400).send('something went wrong')
    }
})

// app.patch('/updateUser', async (req, res) => {
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

connectDB().then(() => {
    console.log('Database connected successfully')
    app.listen(4000, () => {
        console.log('Server is working on Port 4000')
    })
}).catch((error) => {
    console.log('Error : Database , Database not connected')
})