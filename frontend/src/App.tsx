import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Start from "./pages/start";
import Contact from "./pages/contact";
import Navigation from "./components/Navigation";
import Products from "./pages/products";
import ProductsList from "./components/ProductsList";
import Notfound from "./pages/notfound";
import ProductDetail from "./components/ProductDetail";
import Admin from "./pages/admin";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
            <Route path="*" element={<Notfound/>}></Route>
            <Route path="/" element={<Start/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/products/:productId" element={<ProductDetail/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
