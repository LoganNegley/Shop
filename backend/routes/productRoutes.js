const express = require("express");
const asyncHandler = require("express-async-handler"); //middleware handling exceptions inside async express routes passing them to your express error handlers
const Product = require("../models/productModel");

const router = express.Router();


// Get all products
// @route--GET /api/products
router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.status(200).json(products);
  })
);

// Get product by ID
// @route--GET /api/products/:id
router.get("/:id", asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "No product found by that ID" });
    }

  })
);

module.exports = router;
