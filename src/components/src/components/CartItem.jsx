import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Cart Items */}
      {cart.map(item => (
        <div key={item.id} style={{ border: "1px solid black", margin: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}

      {/* Total */}
      <h2>Total Amount: ₹{totalAmount}</h2>

      {/* Buttons */}
      <button onClick={() => alert("Coming Soon")}>Checkout</button>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;
