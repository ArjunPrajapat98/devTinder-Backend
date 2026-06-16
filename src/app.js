import express from 'express';
import { adminAuth } from './middleware/middileware.js';

const app = express();

app.get('/setting/:id', adminAuth, (req, res) => {
    res.status(200).send("This is a valid token")
})

app.get('/dashboard', adminAuth, (req, res) => {
    res.status(200).send('This is a dashboard')
})

app.listen(3000, () => {
    console.log('Server created successfully')
})