import { fetchProducts,addProducts,fetchProductByID } from "../Controller/product.control.js"

// Product routes
export const routes = (app) => {
    app.post('/addproduct',addProducts)
    app.get('/products',fetchProducts);
    app.get('/products/:id',fetchProductByID)
}