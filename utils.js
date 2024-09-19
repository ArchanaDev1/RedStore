const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next)=>{
    const token = req.params.token;

    jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
        if(err){
            res.json({errMsg: "Invalid token!"});
        }
        else{
            req.userInfo = decode;
            next();
        }
    })
}

module.exports = verifyToken;