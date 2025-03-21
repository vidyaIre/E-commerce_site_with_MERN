const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    image: {
        type: String
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
const productModel = mongoose.model('Products', productSchema);
module.exports = productModel;
