import express from 'express';

const app = express();
import { adminAuth, userAuth } from "./middleware/admin.js"

app.use('/admin', adminAuth);


app.get('/admin/user', (req, res) => {
    res.send('Admin User data fetch successfully')
})

app.get('/user', userAuth, (req, res) => {
    res.send('User data fetch succefully')
})

app.listen(3000, () => {
    console.log('Backend is working on port 3000')
})