const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const {routeNotFound, errorHandler} = require('./middleware/errorMiddleware');


connectDB(); //Connecting to MongoDb with mongoose from db config

const app = express();
app.use(cors());

app.use("/api/products", productRoutes);

// Middleware
app.use(routeNotFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

// Endpoints
// Server Listening
app.listen(port, () => {
  console.log(`Server listening on ${port} in ${process.env.NODE_ENV} mode`);
});
// Testing server running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Api up and running" });
});
