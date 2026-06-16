
export const adminAuth = (req, res, next) => {
    let token = '123' // client token
    let storeToken = '123' // stored token
    let check = (storeToken === token) ? true : false;

    if (!check) {
        res.status(200).send('Invalid credentials')
    } else {
        next();
    }
}