import express from 'express';
import { connectDB } from './database/database.js'
import { UserModal } from './modals/userModal.js';

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        let userInstance = new UserModal(req.body);
        await userInstance.save();

        res.send(userInstance);
    } catch (error) {

    }
})

connectDB()
    .then((res) => {
        console.log('Database connected successfully');
        app.listen(4000, () => {
            console.log('Server is working on port 4000')
        })
    }).catch((error) => {
        console.log('Error : Database is not connected')
    })