import express from 'express';
const app = express();

app.get('/user', (req, res) => {
    res.send({ firstname: 'Arjun', lastname: 'Prajapat' })
})

app.post('/user', (req, res) => {
    // save data in database
    res.send('Data saved in database')
})

app.delete('/user', (req, res) => {
    res.send('Data deleted successfully')
})

app.listen(3000, () => {
    console.log('Port 3000 is working...')
})