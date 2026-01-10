import React from 'react';
import logo from './logo.svg';
import './App.css';
import {router} from "./router/router";
import {Outlet, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Outlet/>
      </RouterProvider>
    </div>
  );
}

export default App;
