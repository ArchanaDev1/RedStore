const db = require('../models/index');

const productDetails = (req, res)=>{
    db.Products.findById(req.params.id)
    .then((selectedProduct)=>{
        res.status(200).render('product-details', {sp: selectedProduct});
    })
    .catch((err)=>{
        res.status(401).json({msg:"item does not found!"});
    });
}

module.exports = productDetails;