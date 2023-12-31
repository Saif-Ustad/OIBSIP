import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        productId : {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

const productModel = mongoose.model("products", productSchema);
export default productModel;