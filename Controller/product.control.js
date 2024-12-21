import productModel from "../Model/product.model.js"

export const fetchProducts = async (req,res) => {
  try{
    const products = await productModel.find();
    if(!products) res.status(404).json(`no data found`);
    res.status(200).json(products)
  }catch(error){
    res.status(500).json(`Internal Server error`);
  }
}

export const addProducts = async (req,res) => {
    try{
      const {name,price,description,inStock,thumbnail} = req.body;
    //   if(!name || !price || !description || inStock || thumbnail){
    //     res.status(400).json(`all details are required`)
    //   }
      const product = new productModel({
         name,
         price,
         description,
         inStock,
         thumbnail
      });
      const save = await product.save();
      res.status(200).json(product)
    }catch(error){
      res.status(500).json(`Internal Server error`);
    }
  }


  export const fetchProductByID = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await productModel.find({_id:id});
        if(!product) res.status(404).json(`No such product available`);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json(`Internal Server error`);
    }
  }