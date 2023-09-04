import OrderModel from "../Models/OrderModel.js";
import UserModel from "../Models/userModel.js";

export const makeOrder =  async(req, res) => {

    const userId = req.params.userId; 
    const { customer, address, status, placedTime } = req.body;

    const user = await UserModel.findById(userId);
    const orderItems = user.cartItems;
    // console.log(orderItems);
    const newOrder = new OrderModel({orders:orderItems, customer, address, status, placedTime, userId})

    try{
        const order = await newOrder.save();
        const user = await UserModel.findOneAndUpdate({ _id: userId },{ $push: { orders: order } }, { new: true});
        res.status(200).json(user.orders)       
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}


export const getAllOrders =  async(req, res) => {

    const userId = req.params.userId; 
    try{
        const user = await UserModel.findById(userId);
        const AllOrders = user.orders;
        res.status(200).json(AllOrders)       
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}


