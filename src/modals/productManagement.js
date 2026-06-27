import mongoose from 'mongoose';

const productManagementSchema = new mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    rating: {
        type: Number
    },
    tags: {
        type: String,
        enum: ["mobile", "android"],
        default: "android"
    }
}, { timestamps: true })

export const productManagement = mongoose.model("productManagement", productManagementSchema);