import mongoose from "mongoose";
import { userModal } from "./user.js";

const ConnectionSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: userModal
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: userModal
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const ConnectionModal = mongoose.model("ConnectionModal", ConnectionSchema)