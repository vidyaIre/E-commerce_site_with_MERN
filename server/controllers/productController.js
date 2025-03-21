const productModel = require("../models/productModel");
const jwt = require("jsonwebtoken");

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
    },
    getProduct: async (req, res) => {
        console.log(req);
        try {
            const products = await productModel.find({ isDeleted: false }).lean();
            console.log(products);

            return res.status(200).json({
                success: true,
                statusCode: 200,
                count: products.length,
                message: "products fetched successfully",
                data: products
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "internal server error"
            });
        }

    },
    updateProduct: async(req, res) => {
        //console.log(req.body);
        try {
            const productId = req.body.productId;
            const updatedData = req.body;
    
            console.log("productId:", productId);
            console.log("updatedData:", updatedData);
    
            const response = await productModel.findOneAndUpdate(
                { _id: productId },
                { $set: {updatedData} },
                {new: true}
            ).lean();
    
            console.log("response is:", response);
    
            if (response.matchedCount === 0) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "Product not found"
                });
            }
    
            if (response.modifiedCount === 0) {
                return res.status(200).json({
                    success: true,
                    statusCode: 200,
                    message: "No changes made to the product",
                    data: response
                });
            }
    
            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Product updated successfully",
                data: response
            });
        }
         catch (error) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "internal server error"
            });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const productId = req.body.productId;
            const response = await productModel.findOneAndUpdate(
                { _id: productId },
                { $set: { isDeleted: true } },
                { new: true }
            ).lean();
            console.log("response is:", response);
            if (response.matchedCount === 0) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "Product not found",
                });
            }
            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Product deleted successfully",
                data: response,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "internal server error"
            })
        }
    }

}





