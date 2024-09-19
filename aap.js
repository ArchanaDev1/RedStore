const express = require('express');
const app = express();
const port = process.env.port || 80;
const db = require('./models/index');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const verifyToken = require('./utils');
const home = require('./helpers/home');
const products = require('./helpers/products');
const productDetails = require('./helpers/productDetails');
const addProduct = require('./helpers/addProduct');
const about = require('./helpers/about');
const contact = require('./helpers/contact');
const cart = require('./helpers/cart');
const signin = require('./helpers/signin');
const signupAPI = require('./helpers/signupAPI');
const signinAPI = require('./helpers/signinAPI');
const shipping = require('./helpers/shipping');

// To load the environment variables in server environment
dotenv.config();

// Import module from dummy product to Add in Database
// const products = require('./data/dummy-products');

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.use(express.json());

// ***************************API To Add Products In Database****************************
// app.get('/addproducts',(req,res)=>{
//     db.Products.insertMany(products)
//     .then((products)=>{
//         res.json(products);
//     })
//     .catch((err)=>{
//         res,json({
//             msg:err
//         })
//     })
// })

app.get('/',home);
app.get('/products', products);
app.get('/product/:id', productDetails);
app.get('/api/product/:pid', addProduct);
app.get('/about', about);
app.get('/contact',contact);
app.get('/cart', cart);
app.get('/signin', signin);
app.post('/signup', signupAPI);
app.post('/signin', signinAPI);
app.get('/shipping/:token',verifyToken, shipping);
app.listen(port, ()=>{console.log(`App is running successfully at port ${port}`)});