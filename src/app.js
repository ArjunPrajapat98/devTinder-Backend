import express from 'express';
import { adminAuth } from './middleware/middileware.js';
import { userRouter } from './router/userRouter/userRouter.js';

const app = express();

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('Server created successfully')
})