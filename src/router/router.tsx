import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Transaction from "../pages/Transaction";
import MainLayout from "../component/Common/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // Layout chứa Header/Footer
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/products/:filterType/:value", element: <Products /> },
            { path: "/product/:id", element: <Product /> },
            { path: "/cart", element: <Cart /> },
            { path: "/transaction", element: <Transaction /> }
        ]
    }
]);