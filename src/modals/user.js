import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 2, // [2, "Min Length 2 is Required"],
        maxLength: 50, // [50, "Max Length 50 is Required"],
        required: true, // [true, "Name is Required"],
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true, // [true, "Email id should be unique"],
    },
    password: {
        type: String,
    },
}, { timestamps: true })

export const UserModal = mongoose.model('UserModal', userSchema)


// import mongoose, { mongo } from "mongoose";

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         minLength: 2, // [2, "Min Length 2 is Required"],
//         maxLength: 50, // [50, "Max Length 50 is Required"],
//         required: true, // [true, "Name is Required"],
//     },
//     lastName: {
//         type: String,
//     },
//     dob: {
//         type: Date,
//     },
//     age: {
//         type: Number,
//         min: 18, // [18, "Min Age 18 is Required"],
//         max: 50, //[50, "Max Age 50 is Required"],
//     },
//     email: {
//         type: String,
//         lowercase: true,
//         trim: true,
//         unique: true, // [true, "Email id should be unique"],
//     },
//     password: {
//         type: String,
//     },
//     photoUrl: {
//         type: String,
//         default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxktO4qO4mbP6WXsDNI3zJuFasw440pvO4kg&s",
//     },
//     gender: {
//         type: String,
//         enum: {
//             values: ['male', 'female', 'other'],
//             message: "Invalid gender type {VALUE}"
//         }
//     },
//     device: {
//         type: String,
//         validate(value) {
//             if (!(['web', 'mobile'].includes(value))) {
//                 throw new Error('Invalid device type')
//             }
//         }
//     },
//     skills: {
//         type: [String],
//     },
// }, { timestamps: true })

// export const UserModal = mongoose.model('UserModal', userSchema)