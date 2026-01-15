import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
    {path:"/",element: <HomePage />},
    {path:"/products",element: <Products />},
    {path:"/product",element: <Product />},
    {path:"/cart",element: <Cart />},
    {path:"/login",element: <Login />}
])