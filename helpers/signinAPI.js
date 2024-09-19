const db = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signinAPI = (req,res)=>{
    db.Users.findOne({email:req.body.email})
        .then((userInfo)=>{
            if(userInfo){
                if(bcrypt.compareSync(req.body.password, userInfo.password)){
                    res.status(200).json({
                        username:userInfo.username,
                        email:userInfo.email,
                        isAdmin:userInfo.isAdmin,
                        _id:userInfo._id,
                        token: jwt.sign({
                            username:userInfo.username,
                            email:userInfo.email,
                            isAdmin:userInfo.isAdmin,
                            _id:userInfo._id
                        }, process.env.JWT_SECRET )
                    })
                }
                else{
                    res.status(404).json({
                        errMsg:"Email or Password is incorrect!"
                    })
                }
            }
            else{
                res.status(404).json({errMsg:"Email or Password is incorrect!"});
            }
        })
}

module.exports = signinAPI;