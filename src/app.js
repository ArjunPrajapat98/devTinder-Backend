import express from 'express';
import { connectDB } from './config/database.js';

const app = express();
import cookieParser from 'cookie-parser';
import { authRouter } from './router/authRouter.js';
import { userRouter } from './router/userRouter.js';
import { profileRouter } from './router/profileRouter.js';
import { connectionRouter } from './router/requestRouter.js';

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/user', userRouter);
app.use('/request', connectionRouter)

connectDB().then(() => {
    console.log('Database connected successfully')
    app.listen(4000, () => {
        console.log('Server is working on Port 4000')
    })
}).catch((error) => {
    console.log('Error : Database , Database not connected')
})