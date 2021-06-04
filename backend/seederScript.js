require("dotenv").config();

const productData = require("./data/ProductData");
const product = require("./models/Product");

const connectDB = require("./config/db");

connectDB();

const importData = async () => {
  try {
    await product.deleteMany({});

    await product.insertMany(productData);

    console.log("Data import SUCCESS");

    process.exit();
  } catch {
    console.error("Data import FAIL");

    process.exit(1);
  }
};

importData();
