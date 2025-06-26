const express = require('express');
const router = express.Router();
const { productValidation } = require('../middleware/validation');
const { addProduct } = require('../controllers/productController');


// Products
 router.post('/products', productValidation, addProduct);

module.exports = router;
