const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();


// Get all products
// @route--GET /api/products
router.get("/", (req, res) => {

    Product.find({})
    .then(products =>{
      res.status(200).json(products);
    })
    .catch(error =>{
      res.status(500).json({errorMessage:'Error getting all products'})
    })

  }
);

// Get product by ID
// @route--GET /api/products/:id

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Product.findById(id)
    .then(product =>{
      res.status(200).json(product)
    })
    .catch(error =>{
      res.status(404).json({ message: "No product found by that ID" });
    })
  });


module.exports = router;
