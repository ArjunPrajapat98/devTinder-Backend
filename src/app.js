import express from 'express';
import { connectDB } from './database/database.js';
import { adminAuth } from './middleware/middileware.js';
import { userRouter } from './router/userRouter/userRouter.js';
import { authRouter } from './router/authRouter/authRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';
import { connectionRouter } from './router/connectionRouter/connectionRouter.js';
import { queryRouter } from './router/queryRouter/queryRouter.js';
import { userManagementRouter } from './router/userManagementRouter/userManagementRouter.js';
import { productManagementRouter } from './router/productManagementRouter/productManagementRouter.js';
import { dashboardRouter } from './router/dashboardRouter/dashboardRouter.js';
import { ordersRouter } from './router/ordersRouter/ordersRouter.js';

import './utils/cronjob.js'

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/connections', connectionRouter)
app.use('/query', queryRouter) 
app.use('/userManagement', userManagementRouter)
app.use('/productManagement', productManagementRouter)
app.use('/orders', ordersRouter)
app.use('/dashboard', dashboardRouter)
app.use(errorHandler);

connectDB().then(() => {
    console.log('Mongodb Connected Successfully')
    app.listen(3000, () => {
        console.log('Server created successfully');
    })
}).catch((error) => {
    console.log(error)
});