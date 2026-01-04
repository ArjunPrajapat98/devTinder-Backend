import mongoose from 'mongoose';

export const connectDB = async (req, res) => {
    await mongoose.connect('mongodb+srv://arjun:arjun@devtinder.lpxntat.mongodb.net/devTinder');
}