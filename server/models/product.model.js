// import mongoose
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [4, "Title must be at least 4 characters long!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must represent a positive number."]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [8, "Description must be at least 8 characters long!"]
    }
},
    { timestamps: true }
);

// Export Option 1
// const Product = mongoose.model("Product", ProductSchema);
// module.exports = Product;

// Export Option 2
module.exports.Product = mongoose.model("Product", ProductSchema);