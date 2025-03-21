const { addProduct,getProduct , updateProduct, deleteProduct} = require("../controllers/productController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post('/addProduct', authMiddleware, addProduct);
router.get('/getProduct', authMiddleware, getProduct);
router.put('/updateProduct', authMiddleware, updateProduct);
router.delete('/deleteProduct', authMiddleware, deleteProduct);

module.exports = router;