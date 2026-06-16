import express from 'express';

const app = express();

const adminAuth = (req, res)

app.get('/setting/:id', (req, res) => {
    res.status(200).send("Error")
})

app.listen(3000, () => {
    console.log('Server created successfully')
})