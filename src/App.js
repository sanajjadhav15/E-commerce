import React from "react";
import { ProductProvider } from "./context/ProductContext";
import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Card from "./components/Card";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
