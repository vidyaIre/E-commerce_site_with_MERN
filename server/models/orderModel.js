const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                 ref: 'Product', 
                 required: true
            },
            quantity: {
                type: Number, required: true
            }
        }
    ],
    totalPrice: {
        type: Number
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
const orderModel = mongoose.model('Orders', orderSchema);
module.exports = orderModel;
