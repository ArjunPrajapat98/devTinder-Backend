import express from 'express';
import { adminAuth } from './middleware/middileware';

const app = express();

app.get('/setting/:id', adminAuth, (req, res) => {
    res.status(200).send("Error")
})

app.listen(3000, () => {
    console.log('Server created successfully')
})