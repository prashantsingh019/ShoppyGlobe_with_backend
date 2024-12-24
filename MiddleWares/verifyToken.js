import jwt from "jsonwebtoken";
import userModel from "../Model/userModel.js";
export const verifyToken = (req,res,next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] == "JWT"){
        // using JWT verifying method
        jwt.verify(
        // splitting into two parts
        req.headers.authorization.split(" ")[1],
        "secureKey",
        function (err,verifiedToken){
            if(err){
              return res.status(403).json({message:'Invalid token'})
            }
            // find user in user model 
            userModel.findById(verifiedToken._id).then(user => {
                req.user = user;
                next();
            }).catch((err) => {
                res.status(500).json({message:err.message})
            })
        }
      )
    }else{
        res.status(403).json(`no token present`)
    }
}