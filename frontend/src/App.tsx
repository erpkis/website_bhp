import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Start from "./pages/Start";
import Contact from "./pages/contact";
import Navigation from "./components/Navigation";
import Products from "./pages/products";
import Notfound from "./pages/notfound";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Authorization/Login";
import Register from "./pages/Register";
import AddProduct from "./components/AdminComponents/AddProduct";

function App() {
  return (
    <div className="App">
        <div style={{marginBottom: '4rem'}}><Navigation /></div>
        <Routes>
            <Route path="*" element={<Notfound/>}></Route>
            <Route path="/" element={<Start/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/products/add-product" element={<AddProduct/>}></Route>
            <Route path="/products/:productId" element={<ProductDetail/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
