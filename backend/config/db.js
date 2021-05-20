const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected:${connect.connection.host}`);
  } catch (error) {
    console.log(error, `Error: ${error.message}`);
  }
};

module.exports = connectDB;
