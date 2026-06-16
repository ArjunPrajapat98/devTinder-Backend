import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    }
})

export const userModal = mongoose.model('userModal', userSchema);