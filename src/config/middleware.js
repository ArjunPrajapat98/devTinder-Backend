export const adminAuth = (req, res, next) => {
    let token = 'abc'; // req.body.token
    let isAuthenticate = token === 'abc';
    if (!isAuthenticate) {
        res.status(401).send('Unauthorized token')
    } else {
        next()
    }
}