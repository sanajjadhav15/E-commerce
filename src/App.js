import React from "react";
import { ProductProvider } from "./context/ProductContext";
import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ProductProvider>
      <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </ProductProvider>
  );
}

export default App;
