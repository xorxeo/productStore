const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    if(req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(req.headers);
        if(!token) {
            res.status(401).json({message: 'User not authorized!'});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log("decoded token from authMiddleware", decoded);
        req.user = decoded;
        next();
    } catch(e) {
        res.status(401).json({message: 'User not authorized!!!'});
    }
}