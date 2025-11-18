import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cart, currency, removeFromCart } = useContext(ShopContext);

  if (!cart.length) return <p>No items in cart...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item._id}
          style={{
            display: "flex",
            gap: "20px",
            padding: "10px 0",
            borderBottom: "1px solid #ddd",
          }}
        >
          <img
            src={item.product.images[0]}
            alt=""
            style={{ width: 80, height: 80, objectFit: "cover" }}
          />

          <div>
            <h4>{item.product.name}</h4>
            <p>Price: {currency}{item.price}</p>
            <p>Qty: {item.quantity}</p>

            <button
              onClick={() => removeFromCart(item._id)}
              style={{
                padding: "5px 8px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
