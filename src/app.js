import express from 'express';
import { connectDB } from './config/database.js';

const app = express();
import { UserModal } from './modals/user.js';
import { loginValidation, signupValidation } from './validation/validation.js';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import jwt from "jsonwebtoken"
import { userAuth } from './config/middleware.js';

app.use(express.json());
app.use(cookieParser());

app.post('/signup', async (req, res) => {
    try {
        signupValidation(req);
        let { firstName, lastName, email, password } = req?.body

        const isHashPassword = await bcrypt.hash(password, 10);

        let userInstance = new UserModal({ firstName, lastName, email, password: isHashPassword });
        await userInstance.save();

        res.status(201).send('User signup successfully')

    } catch (error) {
        res.status(400).send('Error in signup' + error)
    }
})

app.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        loginValidation({ email, password });

        let user = await UserModal.findOne({ email: email });
        if (!user) {
            res.status(404).send(`User not found with this ${email}`)
        }
        let decoded = await user.compareHashPassword(password);
        if (decoded) {
            let token = await user.getJwt();
            res.cookie("token", token, { expires: new Date(Date.now() + 24 * 7 * 3600000) });
            res.status(200).send("User login successfully")
        }
    } catch (error) {
        res.status(400).send('Error in signup' + error)
    }
})

app.get("/profile", userAuth, async (req, res) => {
    try {
        let { user } = req;
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send('Error in signup' + error)
    }
})

app.post('/sendRequest', userAuth, async (req, res) => {
    try {
        let { user } = req;
        res.status(200).send(`${user.firstName} send request successfully`)
    } catch (error) {
        res.status(400).send('something went wrong' + error)
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