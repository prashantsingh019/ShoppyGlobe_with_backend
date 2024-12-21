import cartModel from "../Model/cart.model";

export const addProductToCart = async (req,res) => {
  try{
     const {productID,quantity} = req.body;
     const product = new cartModel({
        productID,
        quantity,
     });
     const save = await product.save();
     res.status(200).json(product);
  }catch(error){
   res.status(500).json(`Internal Server error`);
  }
  
}