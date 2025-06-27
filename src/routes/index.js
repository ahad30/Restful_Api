const express = require('express');
const router = express.Router();
const { productValidation } = require('../middleware/validation');
const { addProduct , getProduct , getSingleProduct , updateProduct , deleteProduct} = require('../controllers/productController');


// Product routes
 router.post('/products', productValidation, addProduct); //addProduct
 router.get('/products', getProduct); //getAllProduct
 router.get('/products/:id', getSingleProduct); //getSingleProduct
 router.put('/products/:id', updateProduct); //updateProduct
 router.delete('/products/:id', deleteProduct); //deleteProduct

 

module.exports = router;
