const { body } = require('express-validator');

const productValidation = [
   body('title')
    .trim()
    .notEmpty()
    .withMessage('product title is required'),

  body('subtitle')
    .trim()
    .notEmpty()
    .withMessage('product subtitle is required'),

  body('price')
    .trim()
    .notEmpty()
    .withMessage('product price is required')
    .isNumeric()
    .withMessage('product price must be a number'),

  body('category')
    .trim()
    .notEmpty()
    .withMessage('product category is required'),

  body('brand')
    .trim()
    .notEmpty()
    .withMessage('product brand is required'),

];


module.exports = {
  productValidation
};