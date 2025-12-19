import express from 'express';
import { connectDB } from './config/database.js'
import { userModal } from './modals/UserModal.js';

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    try {
        let obj = req.body;
        let userInstance = new userModal(obj);
        await userInstance.save();
        res.send(`${userInstance?.firstName} signup successfully`)
    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
})

app.get('/userByEmail', async (req, res) => {
    try {
        let { email } = req.body;
        if (!email) {
            res.status(404).send('User email not found')
        }
        let user = await userModal.findOne({ email: email });
        if (!user) {
            res.status(404).send('User not found')
        }
        res.send(user)
    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
})

app.get('/userById', async (req, res) => {
    try {
        let { _id } = req.body;
        if (!_id) {
            res.status(404).send('User id not found')
        }
        let user = await userModal.findById(_id);
        if (!user) {
            res.status(404).send('User not found')
        }
        res.send(user);
    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
})

app.get('/feed', async (req, res) => {
    try {
        let list = await userModal.find({});
        res.send(list);
    } catch (error) {
        res.status(400).send("something went wrong" + error)
    }
})

// app.patch('/updateUser/:id', async (req, res) => {
//     try {
//         let { id } = req.params;
//         let { firstName, lastName, email, password } = req.body;
//         let updatedUser = await userModal.findByIdAndUpdate(id, { firstName, lastName, email, password });
//         res.send({ message: 'User updated successfully', result: updatedUser });
//     } catch (error) {
//         res.status(400).send('something went wrong' + error)
//     }
// })

// app.delete('/userDelete', async (req, res) => {
//     try {
//         let { _id } = req.body;
//         let updatedUser = await userModal.findByIdAndDelete(_id);
//         if(!updatedUser){
//             return res.status(404).send('User not found')
//         }
//         res.send(`User ${updatedUser?.firstName} deleted successfully`)
//     } catch (error) {
//         res.status(400).send('something went wrong' + error)
//     }
// })

app.delete('/userDelete', async (req, res) => {
    try {
        let { _id } = req.body;
        let updatedUser = await userModal.deleteOne({ _id: _id });
        console.log('updatedUser', updatedUser)
        res.send(`User deleted successfully`)
    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
})

app.patch('/updateUser/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let { firstName, lastName, email, password } = req.body;
        let updatedUser = await userModal.updateOne({ _id: id }, { firstName, lastName, email, password });
        res.send({ message: 'User updated successfully', result: updatedUser });
    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
})

connectDB().then(() => {
    console.log('Database connected successfully');
    app.listen(4000, () => {
        console.log('Server is listening Port 4000')
    })
}).catch((error) => {
    console.log('Error : Database not connected')
})

// 82 - 120 is remaining