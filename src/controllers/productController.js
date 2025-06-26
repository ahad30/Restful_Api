const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");

const prisma = new PrismaClient();

const addProduct = async (req, res) => {
  try {
        const errors = validationResult(req);
         console.log(errors.array().map(v=> v.msg))
         if (!errors.isEmpty()) {
           return res.status(400).json({
             success: false,
             message: errors.array().map(v=> v.msg)            
           });
         }

    const {
      title,
      subtitle,
      description,
      price,
      imageUrl,
      category,
      brand,
      status,
      topSale,
      newArrival,
    } = req.body;

    const product = await prisma.product.create({
      data: {
        title,
        subtitle,
        description,
        price: parseFloat(price),
        imageUrl,
        category,
        brand,
        status,
        topSale,
        newArrival
      },
    });
    res
      .status(201)
      .json({success: true, data: product, message: "Product created successfully" });
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
};

module.exports = {
  addProduct,
};
