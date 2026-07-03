import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    "orderId": {
        type: String
    },
    "customerId": {
        type: String
    },
    "orderDate": {
        type: String,
    },
    "status": {
        type: String
    },
    "items": {
        type: String,
        
    },
    "totalAmount": {
        type: Number
    },
    "shippingAddress": {
        type: String
    },
    "paymentMethod": {
        type: String
    },
}, { timestamps: true })

export const ordersModel = mongoose.model('ordersModel', ordersSchema);


