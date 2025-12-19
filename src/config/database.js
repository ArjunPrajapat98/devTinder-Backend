import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arjun:arjun@devtinder.lpxntat.mongodb.net/devTinder');
}