const mongoose = require('mongoose');

const user = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    }
} , {collection:'users'})

const Users = mongoose.model('Users',user);

module.exports = Users;