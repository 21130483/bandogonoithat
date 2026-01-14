import React from 'react';
import logo from './logo.svg';
import './App.css';
import {router} from "./router/router";
import {Outlet, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Common/Header";
import Footer from "./component/Common/Footer";

function App() {
  return (

    <div className="App">
        <Header />
      <RouterProvider router={router}>
        <Outlet/>
      </RouterProvider>
        <Footer />
    </div>
  );
}

export default App;
