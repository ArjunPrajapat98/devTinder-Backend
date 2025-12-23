import mongoose from 'mongoose';

const connectionSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Form User id is requierd']
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'To User id is requierd']
    },
    status: {
        type: String,
        enum: {
            values: ['Ignore', 'Interested', 'Accept', 'Reject'],
            message: '`{PATH}``{VALUE}` not valid'
        },
        required: [true, 'Status is requierd']
    }

}, { timestamps: true })

connectionSchema.pre('save', function () {
    const user = this;
    if (user.fromUserId.equals(user.toUserId)) {
        throw new Error('Can not send request to yourself')
    }
})

connectionSchema.index({ fromUserId: 1, toUserId: 1 });

export const Connections = mongoose.model('Connections', connectionSchema);