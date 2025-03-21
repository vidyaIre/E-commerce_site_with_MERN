const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        //console.log("token is:", token);

        //console.log("Key is " + process.env.JWT_SECRET_KEY)
        const decryptedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        //console.log("decryptedToken is:", decryptedToken);
       // console.log(decryptedToken.userId);
        req.userId = decryptedToken.userId;
        if (decryptedToken && decryptedToken.userId){
            req.userId = decryptedToken.userId;
            next();
        } else {
            res.status(401).json({
                success: false,
                statusCode: 401,
                Message: "Invalid Token",
            });
        }
    } catch (error) {
        console.log("error is:", error);

        res.status(401).json({
            success: false,
            statusCode: 401,
            Message: "Unauthorized",
        });
    }
}
module.exports = { authMiddleware };