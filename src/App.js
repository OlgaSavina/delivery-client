import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Home, Cart } from "./pages";
import { Header } from "./components";
import axios from "axios";
//import store from "./redux/store";


function App() {
 
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
        <Route path="/" element = {<Home/>} exact />
        <Route path="/cart" element={<Cart/>} exact />
        </Routes>
      </div>
    </div>
  );
}
export default App;
