export const userAuth = async (req, res, next) => {
    try {
        let token = "xyz"; // req.body
        let isCheckToken = token === 'xyz';
        if (!isCheckToken) {
            res.status(400).send("Invalid token")
        } else {
            next();
        }
    } catch (error) {
        res.status(400).send('something went wrong' + error)
    }
}