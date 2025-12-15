import express from 'express';
import { connectDB } from './config/database.js';

const app = express();
import { adminAuth } from './config/middleware.js'

app.use('/admin', adminAuth)

app.get('/admin/getUser', (req, res) => {
    try {
        res.send('User data fetched successfully')
    } catch (error) {
        console.log('error', error)
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