import express from 'express';

const app = express();

app.use('/home', (req, res) => {
    res.send('Home Route')
})

app.use('/dashboard', (req, res) => {
    res.send('This is dashboard route')
})

app.use('/', (req, res) => {
    res.send('Default Route')
})

app.listen(3000, () => {
    console.log('Port 3000 is working...')
})