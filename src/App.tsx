import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {router} from "./router/router";
import {Outlet, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Common/Header";
import Footer from "./component/Common/Footer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store/Store";
import {fetchProducts} from "./store/productSlice";
import {fetchCategories} from "./store/categorySlice";

function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // Nạp dữ liệu vào Redux ngay khi ứng dụng khởi chạy
        dispatch(fetchProducts());
        dispatch(fetchCategories()); // Rất quan trọng để hiện được Breadcrumb
    }, [dispatch]);
  return (

      <div className="App">
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
