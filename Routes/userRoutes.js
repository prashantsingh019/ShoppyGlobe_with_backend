import { registerUser,login } from "../Controller/user.control.js";

export const userRoutes = (app) => {
    app.post('/register',registerUser);
    app.post('/login',login);
}