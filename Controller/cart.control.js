import cartModel from "../Model/cart.model.js";
import productModel from "../Model/product.model.js";


export const addProductToCart = async (req,res) => {
   try{
      const {productId,quantity} = req.body;
      const isExist = await productModel.findById(productId);
      if(!isExist) return res.status(404).json("product not found");
      const inCartAlready = await cartModel.findOne({productId:productId})
      if(inCartAlready){
         inCartAlready.quantity += quantity;
         await inCartAlready.save()
         res.status(200).json("product exist so quantity updated")
      }else{
         const cartProduct = new cartModel({
             productId,
             quantity,
         })
         await cartProduct.save();
         res.status(200).json("product added to cart")
      }
   }catch(err){
     res.status(500).json(`Internal Server error`);
   }
}
export const updateQuantity = async (req,res) => {
  try{
    const{productID,quantity} = req.body;
    const product = await cartModel.findOne({productID});
    if(!product) return res.status(404).json(`No such product available`)
    product.quantity = quantity;
    await product.save()
    res.status(200).json(`update quantity: ${product.quantity}`);
  }catch(error){
   res.status(500).json(`Internal Server error`);
  }
}

export const deleteProduct = async (req,res) => {
  try{
    const {productID} = req.body;
    const findInCart = await cartModel.findOne({productID});
    const deleteProduct = await cartModel.findByIdAndDelete(findInCart["_id"])
    res.status(200).json(deleteProduct)
  }catch(error){
   res.status(500).json(`Internal Server error`);
  }
}
 