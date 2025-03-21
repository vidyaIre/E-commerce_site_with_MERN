const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/index");

dotenv.config();
const dbConfig = require("./config/index");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});