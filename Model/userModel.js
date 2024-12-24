import mongoose from "mongoose";

const {Schema,model} = mongoose;
// user schema
const userSchema = Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const userModel = model('user',userSchema);

export default userModel;