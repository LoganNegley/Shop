const express = require("express");
const products = require("./data/products");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

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

// Testing server running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Api up and running" });
});
