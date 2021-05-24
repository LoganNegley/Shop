const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((res) => {
      console.log(res.connection.host);
    })
    .catch((error) => {
      console.log(error, `Error ${error.message}`);
    });
};

module.exports = connectDB;
