import express from 'express';
import { connectDB } from './database/database.js';
import { adminAuth } from './middleware/middileware.js';
import { userRouter } from './router/userRouter/userRouter.js';
import { authRouter } from './router/authRouter/authRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use(errorHandler);

connectDB().then(() => {
    console.log('Mongodb Connected Successfully')
    app.listen(3000, () => {
        console.log('Server created successfully');
    })
}).catch((error) => {
    console.log(error)
});