import React, { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const currency = "₹";

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.products || []);
    } catch (err) {
      console.log("Product load error:", err);
    }
  };

  const fetchCart = async () => {
    setCart([]);
  };

  const addToCart = async (productId) => {
    console.log("TEMP addToCart called:", productId);
  };

  const removeFromCart = async (itemId) => {
    console.log("TEMP removeFromCart called:", itemId);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ShopContext.Provider
      value={{ cart, products, currency, addToCart, removeFromCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
