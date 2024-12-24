import userModel from "../Model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register Functionality
export const registerUser = async (req,res) => {
  try{
    const {fullName,email,password} = req.body;
    if(!fullName || !email || !password) return res.status(400).json('all fields are mandatory')
    const isExist = await userModel.findOne({email});
    if(isExist) return res.status(400).json(`user with this email already registered`)
    const newUser = new userModel({
    fullName,
    email,
    password:bcrypt.hashSync(password,10),
    })
    await newUser.save();
    res.status(200).json(`User registered successfully`)
  }catch(error){
    res.status(500).json(`Internal Server error`);
  }
}

// Login Functionality
export const login = async (req,res) => {
    try{
       const {email,password} = req.body;
       const isExist = await userModel.findOne({email}) // Checking User Collection
       if(isExist){
       let isValidPassword = bcrypt.compareSync(password,isExist.password);      // comparision
       if(!isValidPassword) return res.status(403).json('Password is Incorrect') // If password incorrect
        let token = jwt.sign({id:isExist["_id"]},"secureKey",{expiresIn: "10m"}) // Sign using JWT
        res.status(200).json({
            user:{
                email:isExist.email,
                fullName:isExist.fullName
            },
            accessToken: token, // sending access token to client
        })
       }else{
         res.status(404).json(`user with this email address not found`)
       }
    }catch(err){
     res.status(500).json(`Internal Server error`);
    }
}