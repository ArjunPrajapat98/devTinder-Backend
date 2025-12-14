export const adminAuth = (req, res, next) => {
    let token = 'xyz' // req.body.token
    let isAuthenticate = token === 'xyz'
    if (!isAuthenticate) {
        res.status(401).send('Unauthorize user')
    } else {
        next();
    }
}

export const userAuth = (req, res, next) => {
    let token = 'abc' // req.body.token;
    let isAllow = token === 'abc';
    if (!isAllow) {
        res.status(401).send('Unauthorize user');
    } else {
        next();
    }
} 