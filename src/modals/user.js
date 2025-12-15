import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    dob: {
        type: Date,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})

export const UserModal = mongoose.model('UserModal', userSchema)