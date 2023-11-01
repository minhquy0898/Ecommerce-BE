const mongoose = require("mongoose")

const order = mongoose.Schema(
    {
        orderItem: [
            {
                name: { type: Sting, required: true },
                amount: { type: String, required: true },
                image: { type: String, required: true },
                price: { type: String, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Products",
                    required: true
                }
            }
        ],
        shippingAddress: {
            fullname: { type: String, required: true },
            address: { type: String, required: true },
            city: { type: String, required: true },
            country: { type: String, required: true },
            phone: { type: Number, required: true }
        },
        paymentMethod: { type: String, required: true },
        itemsPrice: { type: Number, required: true },
        shippingPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
        isPaid: { type: Boolean, default: false }, // Da thanh toan hay chua
        paidAt: { type: Date }, // Thanh toan vao luc nao
        isDelivered: { type: Boolean, default: false },// Da giao hang hay chua
        deliveredAt: { type: Date } // da giao
    }
)

module.exports = mongoose.model("Orders", order)