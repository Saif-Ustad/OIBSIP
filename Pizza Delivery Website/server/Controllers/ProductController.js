import productModel from "../Models/productModel.js";

export const getAllProducts = async(req, res) => {
    try {
        let products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getSingleProduct = async(req, res) => {
    const  productId  = req.params.productId;
    try {
        const product = await productModel.findOne({productId:productId})
        if(product)
        {
            res.status(200).json(product);
        }else {
            res.status(404).json("No such product exist")
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
}