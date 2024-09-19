const db = require('../models/index');

const products =  (req, res)=>{
    db.Products.find()
    .then((products)=>{
        res.status(200).render('products', {productsArray : products});
    }).catch((err)=>{
        res.status(401).json({msg:"Something went wrong!"});
    }) 
}

module.exports = products;