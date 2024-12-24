import { registerUser,login } from "../Controller/user.control.js";

// Login / Register routes
export const userRoutes = (app) => {
    app.post('/register',registerUser);
    app.post('/login',login);
}