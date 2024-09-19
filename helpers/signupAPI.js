const db = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupAPI = (req,res)=>{
    db.Users.create({
        username:req.body.username,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,13),
        isAdmin:false
    })
    .then((user)=>{
        res.status(200).json({
            username:user.username,
            email:user.email,
            isAdmin:user.isAdmin,
            _id:user._id,
            token: jwt.sign({
                username:user.username,
                email:user.email,
                isAdmin:user.isAdmin,
                _id:user._id
            }, process.env.JWT_SECRET )
        });
    })
    .catch((err)=>{
        res.status(404).json({
            errMsg:"Given email is already exist!"
        })
    })
}

module.exports = signupAPI;