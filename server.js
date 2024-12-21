import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/product.routes.js";
import productModel from "./Model/product.model.js";

const app = new express();
const port = 7100;

app.listen(port,() => {
    console.log(`Server started successfully`);
});

app.use(express.json());

mongoose.connect('mongodb+srv://prakul:prakul@cluster0.qhlea.mongodb.net/')

const db = mongoose.connection;

db.on("open",() => {
    console.log(`Connected to MongoDB Cloud`);
})

db.on('error',() => {
    console.log(`disconnected from server`);
})


routes(app);


