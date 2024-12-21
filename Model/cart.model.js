import mongoose from "mongoose";

const {Schema,model} = mongoose;

const cartSchema = Schema({
    productID:String,
    quantity:Number,
});

const cartModel = model("cart",cartSchema);

export default cartModel;