// CartPage.js
import React, { useContext } from "react";
import { AppContext } from "../contest/AppContext";

const CartPage = () => {
  const { cart } = useContext(AppContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.description || item.alt_description} -{item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
