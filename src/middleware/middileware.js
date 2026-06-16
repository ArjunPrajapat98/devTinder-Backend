
export const adminAuth = (req, res, next) => {
    try {
        let token = '123' // client token
        let storeToken = '123' // stored token
        let check = (storeToken === token) ? true : false;
        if (!check) {
            res.status(200).send('Invalid credentials')
        } else {
            next();
        }
    } catch (error) {
        res.status(500).send('Error in middileware')
    }
}