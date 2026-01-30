import mongoose from "mongoose";

const connectionSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Form User id is requierd'],
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'To User id is requierd'],
    },
    status: {
        type: String,
        required: [true, 'Status is requierd'],
        enum: {
            values: ['Ignore', 'Interested', 'Accept', 'Reject'],
            message: '`{PATH}``{VALUE}` not valid'
        },
    }
})

connectionSchema.pre('save', function () {
    let user = this;
    if (user.fromUserId.equals(user.toUserId)) {
        throw new Error('Can not send request to yourself')
    }
})

export const Connections = mongoose.model('Connections', connectionSchema);