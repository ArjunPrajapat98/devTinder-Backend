import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const privateKey = 'Common@12345';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

userSchema.methods.getJWT = async function () {
    let user = this;
    let data = await jwt.sign({ _id: user?._id }, privateKey)
    return data;
}
export const UserModal = mongoose.model('UserModal', userSchema);