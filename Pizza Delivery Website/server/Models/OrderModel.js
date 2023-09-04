import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
    {
        orders:{
            type:Array,
            required: true
        },
        customer: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        placedTime : {
            type: String,
            required: true
        },
        userId : {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const OrderModel = mongoose.model("orders", OrderSchema);
export default OrderModel;