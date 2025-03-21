const productModel = require("../models/productModel");

module.exports = {
    addProduct: async (req, res) => {
        try {
            const { name, description, price, image, category, brand, stock } = req.body;
            console.log(name, description, price, image, category, brand, stock);

            if (name && description && price && image && category && brand && stock) {
                const newProduct = await productModel({
                    name,
                    description,
                    price,
                    image,
                    category,
                    brand,
                    stock,
                });
                newProduct.save()
                    .then((response) => {
                        console.log("response is:", response);

                        return res.status(201).json({
                            success: true,
                            statusCode: 201,
                            Message: "Product added successfully",
                            data: response
                        });

                    }).catch((error) => {
                        console.log("error is:", error);

                        if (error.code === 11000) {
                            res.status(409).json({
                                success: false,
                                statusCode: 409,
                                Message: "Product already exists",
                            });
                        } else {
                            res.status(200).json({
                                success: false,
                                statusCode: 200,
                                Message: "product not added",
                            });

                        }
                    })

            } else {
                res.status(400).json({
                     success: false,
                    statusCode: 400,
                    Message: "All fields are required", 
                })
            }
        }
        catch (error) {
            console.log("error is:", error);

            res.status(500).json({
                success: false,
                statusCode: 500,
                Message: "Internal Server Error",
            });
        }
    }
}


