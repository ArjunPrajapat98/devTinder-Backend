export const adminAuth = (req, res, next) => {
    let token = 'abcd';// req.body.token
    let isAuthenticate = token === 'abcd';
    if (!isAuthenticate) {
        res.status(400).json({
            message: 'Invalid token',
            success: false
        })
    } else {
        next();
    }
}