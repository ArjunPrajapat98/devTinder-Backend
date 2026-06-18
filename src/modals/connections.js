import mongoose from "mongoose";

const ConnectionSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const ConnectionModal = mongoose.model("ConnectionModal", ConnectionSchema)