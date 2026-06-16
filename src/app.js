import express from 'express';

const app = express();

app.use("/test", (req, res) => {
    res.status(400).send("Hello world")
})

app.get('/userlist', (req, res) => {
    res.status(200).send('This is a user list data')
})

app.listen(8100, () => {
    console.log('Node js server started successfully')
})