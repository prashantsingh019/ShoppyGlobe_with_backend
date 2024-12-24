import mongoose from "mongoose";

const {Schema,model} = mongoose;

// CartSchema MOdel
const cartSchema = Schema({
    productId:mongoose.Schema.Types.ObjectId,
    quantity:Number,
});

const cartModel = model("cart",cartSchema);

export default cartModel;