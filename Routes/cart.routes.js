import { addProductToCart } from "../Controller/cart.control"

const cartRoutes = (app) => {
    app.post('/cart',addProductToCart);
    app.put('')
    app.delete()
}