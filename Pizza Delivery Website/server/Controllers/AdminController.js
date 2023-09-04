import OrderModel from "../Models/OrderModel.js";
import productModel from "../Models/productModel.js";
import UserModel from "../Models/userModel.js";

import mongoose from "mongoose";
 
export const addProduct = async(req, res) => {
    const {name, image, price, desc, rating, productId } = req.body;

    const newProduct = new productModel({name, image, price, desc, rating, productId});

    try{
        const oldProduct = await productModel.findOne({productId:productId});

        if(oldProduct){
            res.status(400).json({message: "product is already exist"});
        }else {
            const product = await newProduct.save();
            res.status(200).json(product);
        }

    }catch(error){
        res.status(500).json({message:error.message})
    }

}



export const removeProduct = async(req, res) => {
    const { productId } = req.body;

    try{
        const oldProduct = await productModel.deleteOne({productId:productId});

        res.status(200).json(oldProduct);

    }catch(error){
        res.status(500).json({message:error.message})
    }

}


export const updateOrder =  async(req, res) => {

    const {orderId, userId, status } = req.body;
    console.log(req.body)

    try{
        const order = await OrderModel.updateOne({ _id: orderId },{ $set: { status: status  } });
        
        
        const result = await UserModel.findOneAndUpdate(
            { _id: userId, "orders._id":  new mongoose.Types.ObjectId(orderId)},
            { $set: { "orders.$.status": status } },
            { new: true }
         );
        res.status(200).json(result);       
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}



export const getAllAdminOrders =  async(req, res) => {

    try{
        const allOrders = await OrderModel.find();
        res.status(200).json(allOrders)       
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}