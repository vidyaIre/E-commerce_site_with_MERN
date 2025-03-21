const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI_STRING, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log("Ecommerce database connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

