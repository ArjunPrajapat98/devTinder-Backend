import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    res.send('This is test route')
})

app.use('/dashboard', (req, res) => {
    res.send("This is dashboard route")
})

app.use('/', (req, res) => {
    res.send("This is default route")
})

app.listen(7000, () => {
    console.log('Server is working on port 7000')
})