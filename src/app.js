import express from 'express';
import { connectDB } from './database/database.js'

const app = express();

app.use('/test', (err, req, res, next) => {
    res.send(err)
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