// import { createContext, useState, useEffect } from "react";
// import api from "../api/axios";

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const currency = "₹";

//   // Load cart from backend
//   // const fetchCart = async () => {
//   //   try {
//   //     const res = await api.get("/cart");
//   //     setCart(res.data.items || []);
//   //   } catch (err) {
//   //     console.log("Cart load error:", err);
//   //   }
//   // };

//   // Add to cart
//   const addToCart = async (productId) => {
//     try {
//       await api.post("/cart/add", { productId, quantity: 1 });
//       await fetchCart();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Remove item from cart
//   const removeFromCart = async (itemId) => {
//     try {
//       await api.delete(`/cart/item/${itemId}`);
//       await fetchCart();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Load cart at startup
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <ShopContext.Provider
//       value={{
//         cart,
//         currency,
//         addToCart,
//         removeFromCart,
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
import { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const currency = "₹";

  // Load products
  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.products || []);
    } catch (err) {
      console.log("Product load error:", err);
    }
  };

  // TEMPORARY: disable cart until login system is added
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
      value={{
        cart,
        products,
        currency,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
