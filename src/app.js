import express from 'express';
import { connectDB } from './config/database.js';

const app = express();
import { UserModal } from './modals/user.js';

app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        let obj = req?.body
        let userInstance = new UserModal(obj);
        await userInstance.save();

        res.status(201).send('User signup successfully')

    } catch (error) {
        res.status(400).send('Error in signup')
    }
})

connectDB().then(() => {
    console.log('Database connected successfully')
    app.listen(4000, () => {
        console.log('Server is working on Port 4000')
    })
}).catch((error) => {
    console.log('Error : Database , Database not connected')
})