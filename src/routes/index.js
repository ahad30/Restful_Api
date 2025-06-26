const express = require('express');
const router = express.Router();
const { productValidation } = require('../middleware/validation');
const { addProduct , getProduct , getSingleProduct } = require('../controllers/productController');


// Product routes
 router.post('/products', productValidation, addProduct); //addProduct
 router.get('/products', getProduct); //getAllProduct
 router.get('/products/:id', getSingleProduct); //getSingleProduct




module.exports = router;
