const mongoose = require("mongoose")

const product = mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        rating: { type: String, required: true },
        description: { type: String }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Products", product)
