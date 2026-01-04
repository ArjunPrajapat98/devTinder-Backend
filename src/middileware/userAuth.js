export const userAuth = async (req, res, next) => {
    try {
        let token = 'xyz'; // req.body
        let isAuthenticate = token === 'xyz1';
        if (!isAuthenticate) {
            return res.status(400).send('Invalid token')
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}