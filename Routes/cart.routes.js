import { addProductToCart, deleteProduct, updateQuantity } from "../Controller/cart.control.js"
import express from "express";
import { verifyToken } from "../MiddleWares/verifyToken.js";

// Cart routes
export const cartRoutes = (app) => {
    const router = express.Router()
    
    app.post('/cart',verifyToken,addProductToCart);
    app.put('/cart/',verifyToken,updateQuantity);
    app.delete('/cart/',verifyToken,deleteProduct);
}