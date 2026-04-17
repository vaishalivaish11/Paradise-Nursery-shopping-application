import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="landing-page">
              <h1>Paradise Nursery</h1>
              <Link to="/products">
                <button>Get Started</button>
              </Link>
            </div>
          }
        />

        {/* Products */}
        <Route path="/products" element={<ProductList />} />

        {/* Cart */}
        <Route path="/cart" element={<CartItem />} />

        {/* About */}
        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
