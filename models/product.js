const mongoose = require('mongoose');

    const product = new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        img:{
            type:String,
            require:true
        },
        imgGal:{
            type:Object
        },
        price:{
            type:Number,
            require:true
        },
        des:{
            type:String,
            require:true
        },
        qtyInStock:{
            type:Number,
            require:true
        },
        rating:{
            type:Number,
            require:true
        }
    },{ collection:'products'})

    const Products = mongoose.model("Products",product);

    module.exports = Products;