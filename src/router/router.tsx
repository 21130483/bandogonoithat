import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Products from "../pages/Products";

export const router = createBrowserRouter([
    {path:"/",element: <HomePage />},
    {path:"/products",element: <Products />},
    {path:"/login",element: <Login />}
])