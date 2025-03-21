const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    addUser: async (req, res) => {
        try {
            console.log(req.body);

            const { name, userName, email, password, phone } = req.body;
            console.log(name, userName, email, password, phone);

            if (name && userName && email && password && phone) {
                const encryptedPassword = await bcrypt.hash(password, 10);
                const newUser = new userModel({
                    name,
                    userName,
                    email,
                    password: encryptedPassword,
                    phone,
                    role: "user",
                });
                newUser.save()
                    .then((response) => {
                        console.log("response is:", response);

                        return res.status(201).json({
                                success: true,
                                statusCode: 201,
                                Message: "User added successfully",
                                data: response
                        })

                    }).catch((error) => {
                        console.log("error is:", error);

                        if (error.code === 11000) {
                            res.status(400).json({
                                success: false,
                                statusCode: 400,
                                Message: "User already exists",
                            });
                        } else {
                            res.status(500).json({
                                success: false,
                                statusCode: 500,
                                Message: "Failed to add user",
                                data: error.Message
                            });
                        }
                    });

            } else {
                res.status(400).json({
                    success: false,
                    statusCode: 400,
                    Message: "Missing required fields",
                });
            }

        } catch (error) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                Message: "Internal Server Error",
            });
        }
    },
    userLogin: async (req, res) => {
        try {
           const { email, password } = req.body;
           if (email && password) {
              const userFound = await userModel.findOne({ email: email }).lean();
  
              if (userFound) {
                 const ispasswordMatch =  await bcrypt.compare(password, userFound.password);
                 console.log(ispasswordMatch);
  
                 if (ispasswordMatch) {
                    delete userFound.password;
  
                    const jwtSecretKey = process.env.JWT_SECRET_KEY;
                    const token = jwt.sign(
                       { userId: userFound?._id },
                       jwtSecretKey,
                       { expiresIn: "5d" }
                    )
  
                    return res.status(200).json({
                       success: true,
                       statusCode: 200,
                       message: "User login successfully",
                       token: token,
                       data: userFound
                    })
                 } else {
                    res.status(200).json({
                       success: false,
                       statusCode: 200,
                       message: "Incorrect password"
                    })
                 }
              } else {
                 res.status(200).json({
                    success: false,
                    statusCode: 200,
                    message: " User doesnot exists"
                 })
              }
           } else {
              res.status(200).json({
                 success: false,
                 statusCode: 200,
                 message: "Missing required fields"
              })
           }
        } catch (error) {
           console.log("error is:", error);
           res.status(500).json({
              success: false,
              statusCode: 500,
              message: error.message
           });
        }
     }  
}