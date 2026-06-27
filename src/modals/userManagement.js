import mongoose from "mongoose";

const userManagementSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    age: {
        type: Number,
    },
    role: {
        type: String,
        enum: ['Customer', 'Admin', 'SuperAdmin'],
        default: 'Customer',
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    }
}, { timestamps: true })

export const userManagementModal = mongoose.model('userManagementModal', userManagementSchema);