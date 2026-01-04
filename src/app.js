import express from 'express';
import { connectDB } from './database/database.js';

const app = express();
import { userRouter } from './router/userRouter.js';
import { authRouter } from './router/authRouter.js';

app.use(express.json());

app.use('/auth', authRouter);
app.use('/user', userRouter);


connectDB().then((res) => {
    console.log('Database connection success')
    app.listen(4000, () => {
        console.log('Port 4000 is working')
    })
}).catch((error) => {
    console.log('error', error)
})