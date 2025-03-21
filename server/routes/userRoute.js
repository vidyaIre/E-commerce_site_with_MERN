const { addUser, userLogin } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/addUser", addUser);
router.post('/userLogin', userLogin);

module.exports = router;