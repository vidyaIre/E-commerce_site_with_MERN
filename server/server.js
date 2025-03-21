const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/index");

dotenv.config();
const dbConfig = require("./config/index");
const userRoute = require("./routes/userRoute");

const app = express();
app.use(express.json());
connectDB();
app.use('/api',userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});