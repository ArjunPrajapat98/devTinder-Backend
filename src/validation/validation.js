import validator from 'validator'

export const signupValidation = (req) => {
    let { firstName, lastName, dob, age, email, password, photoUrl, gender, device, skills } = req.body;
    if (!firstName || !lastName) {
        throw new Error('Name is Required')
    } else if (!validator.isEmail(email)) {
        throw new Error('Invalid creadentials')
    } else if (!validator.isStrongPassword(password)) {
        throw new Error('Invalid creadentials')
    }
}

export const loginValidation = ({ email, password }) => {
    if (!email) {
        throw new Error('Email is Required')
    } else if (!validator.isEmail(email)) {
        throw new Error('Invalid creadentials')
    } else if (!validator.isStrongPassword(password)) {
        throw new Error('Invalid creadentials')
    }
}

export const sendRequestValidation = ({ fromUserId, toUserId, status }) => {
    if (!fromUserId) {
        throw new Error('Sender id is required')
    } else if (!toUserId) {
        throw new Error('Receiver id is required')
    } else if (!status) {
        throw new Error('Status is required')
    } else if (!(['Ignore', 'Interested'].includes(status))) {
        throw new Error('Invalid status')
    }
}