import { fetchProducts,addProducts,fetchProductByID } from "../Controller/product.control.js"

export const routes = (app) => {
    app.post('/addproduct',addProducts)
    app.get('/products',fetchProducts);
    app.get('/products/:id',fetchProductByID)
}