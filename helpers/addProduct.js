const db = require('../models/index');

const addProduct = function(req,res){
    db.Products.findById(req.params.pid)
    .then((selectedProduct)=>{
        res.json(selectedProduct);
    })
    .catch((err)=>{
        res.status(401).json({msg:"item does not found!"})
    });
}

module.exports = addProduct;