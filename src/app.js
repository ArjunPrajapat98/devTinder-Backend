import express from 'express';
import { connectDB } from './database/database.js';
import { adminAuth } from './middleware/middileware.js';
import { userRouter } from './router/userRouter/userRouter.js';

const app = express();

app.use('/user', userRouter)

connectDB().then(() => {
    console.log('Mongodb Connected Successfully')
    app.listen(3000, () => {
        console.log('Server created successfully');
    })
}).catch((error) => {
    console.log(error)
});