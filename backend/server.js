const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const products = require("./data/products");
const connectDB = require("./config/db");

connectDB(); //Connecting to mongoose from db config

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

// Endpoints
// Get all products
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// Get product by ID
app.get("/api/product/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item._id === id);
  res.status(200).json(product);
});

// Server Listening
app.listen(port, () => {
  console.log(`Server listening on ${port} in ${process.env.NODE_ENV} mode`);
});
// Testing server running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Api up and running" });
});
