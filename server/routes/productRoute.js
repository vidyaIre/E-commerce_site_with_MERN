const { addProduct } = require("../controllers/productController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post('/addProduct', authMiddleware, addProduct);

module.exports = router;