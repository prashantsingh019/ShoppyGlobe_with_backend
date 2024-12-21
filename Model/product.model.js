import mongoose from "mongoose";

const {Schema,model} = mongoose;

const productSchema = Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    inStock:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true,
    }
})

const productModel = model("products",productSchema);

export default productModel;