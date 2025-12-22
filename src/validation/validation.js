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

export const sendRequestValidation = (request) => {
    if (!request?.fromUserId) {
        throw new Error('Invalid token, From User id is Required')
    } else if (!request?.toUserId) {
        throw new Error('To User id is Required')
    } else if (!request?.status) {
        throw new Error('Status is Required')
    } else if (!['Interested', "Ignore"].includes(request?.status)) {
        throw new Error('Invalid Status')
    }
}