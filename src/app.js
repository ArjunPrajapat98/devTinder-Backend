import express from 'express';
import cookieParser from 'cookie-parser';

import { connectDB } from './config/database.js'
import { authRouter } from './router/authRouter.js';
import { profileRouter } from './router/profileRouter.js';
import { connectionRouter } from './router/connectionRouter.js';
import { userRouter } from './router/userRouter.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/request', connectionRouter);
app.use('/user', userRouter)

connectDB()
    .then((res) => {
        console.log('Database connected successfully');
        app.listen(4000, () => {
            console.log('Server is working on port 4000')
        })
    }).catch((error) => {
        console.log('Error : Database is not connected')
    })