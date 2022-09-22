const jwt = require('../utils/jwt');

const verifyToken = (req, res, next) =>{
    const token = req.headers['tokenkey'];
    const verify = jwt.decoded(token);
    if(verify.data) return next();
    return res.send({
        status:500,
        error: verify
    });

};

module.exports = verifyToken;