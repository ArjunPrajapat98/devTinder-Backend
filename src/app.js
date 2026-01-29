import express from 'express';
import { connectDB } from './config/database.js'
import { authRouter } from './router/authRouter.js';

const app = express();
app.use(express.json());

app.use('/auth', authRouter);

connectDB()
    .then((res) => {
        console.log('Database connected successfully');
        app.listen(4000, () => {
            console.log('Server is working on port 4000')
        })
    }).catch((error) => {
        console.log('Error : Database is not connected')
    })