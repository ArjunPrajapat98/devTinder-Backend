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