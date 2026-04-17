import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const products = [
  // Indoor
  { id: 1, name: "Aloe Vera", price: 100, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 150, category: "Indoor" },

  // Outdoor
  { id: 3, name: "Rose", price: 120, category: "Outdoor" },
  { id: 4, name: "Hibiscus", price: 130, category: "Outdoor" },

  // Air Purifying
  { id: 5, name: "Peace Lily", price: 200, category: "Air" },
  { id: 6, name: "Areca Palm", price: 250, category: "Air" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState({});

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    setAdded({ ...added, [product.id]: true });
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart">Cart 🛒</Link>
      </nav>

      <h1>Products</h1>

      {/* Categories */}
      {["Indoor", "Outdoor", "Air"].map(cat => (
        <div key={cat}>
          <h2>{cat} Plants</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            {products
              .filter(p => p.category === cat)
              .map(product => (
                <div key={product.id} style={{ border: "1px solid gray", padding: "10px" }}>
                  <h3>{product.name}</h3>
                  <p>Price: ₹{product.price}</p>

                  <button
                    onClick={() => handleAdd(product)}
                    disabled={added[product.id]}
                  >
                    {added[product.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
