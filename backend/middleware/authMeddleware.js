const jwt = require('jsonwebtoken');

const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message:'Access token missing'});
    };

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error){
            return res.status(403).json({message:'Invalid Token'});
        }

        req.user = decoded;
        next();
    });
};

module.exports = authenticateToken;