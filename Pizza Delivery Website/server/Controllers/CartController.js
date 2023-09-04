import productModel from "../Models/productModel.js";
import UserModel from "../Models/userModel.js"

// export const addToCart =  async(req, res) => {
//     const  userId  = req.params.userId;
//     const  productId  = req.params.productId;

//     try{
//         const product = await productModel.findOne({productId:productId});
//         if(product)
//         {
//             const user = await UserModel.updateOne({ _id: userId },{ $push: { cartItems: productId } });
//             res.status(200).json(user)
//         }else {
//             res.status(500).json("product is not valide that you tring to add");
//         }
       
//     }catch(error) {
//         res.status(500).json({message:error.message})
//     }
// }


// export const RemoveFromCart =  async(req, res) => {
//     const  userId  = req.params.userId;
//     const  productId  = req.params.productId;

//     try{
//         const product = await productModel.findOne({productId:productId});
//         if(product)
//         {
//             const user = await UserModel.updateOne({ _id: userId },{ $pull: { cartItems: productId } });
//             res.status(200).json(user)
//         }else {
//             res.status(500).json("product is not valide that you tring to add");
//         }
       
//     }catch(error) {
//         res.status(500).json({message:error.message})
//     }
// }



export const addToCart =  async(req, res) => {
    const  userId  = req.params.userId;
    const { productId, productName, productPrice, size, quantity, crust, toppings } = req.body;

    const newItem = {
        productId:productId, 
        productName:productName,
        productPrice: productPrice,
        size:size, 
        quantity:quantity,
        crust:crust, 
        toppings:toppings
    }

    try{
        const product = await productModel.findOne({productId:productId});
        if(product)
        {
            const user = await UserModel.findById(userId);
            const cartProduct = await user?.cartItems?.find(item => item.productId === productId);
            // console.log(cartProduct);
            if(cartProduct)
            {
                const result = await UserModel.findOneAndUpdate(
                    { _id: userId, "cartItems.productId": productId },
                    { $set: { "cartItems.$.quantity": quantity } },
                    { new: true }
                 );
                res.status(200).json(result.cartItems)
                 
            }else{
                const user = await UserModel.findOneAndUpdate({ _id: userId },{ $push: { cartItems: newItem } },  { new: true });
                res.status(200).json(user.cartItems)
                
            }
            
        }else {
            res.status(500).json("product is not valide that you tring to add");
        }
       
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}


export const RemoveFromCart =  async(req, res) => {
    const  userId  = req.params.userId;
    const  { productId }   = req.body;
    // console.log(productId);

    try{
        const product = await productModel.findOne({productId:productId});
       
        if(product)
        {
            const user = await UserModel.updateOne({ _id: userId },{ $pull: { cartItems: { productId: productId } } });
            res.status(200).json(user)
        }else {
            res.status(500).json("product is not valide that you tring to remove");
        }
       
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}


export const getAllCartItems =  async(req, res) => {

    const userId = req.params.userId; 
    try{
        const user = await UserModel.findById(userId);
        const cartItems = user.cartItems;
        res.status(200).json(cartItems)       
    }catch(error) {
        res.status(500).json({message:error.message})
    }
}
