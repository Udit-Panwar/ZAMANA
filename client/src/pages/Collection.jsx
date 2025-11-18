import React, { useEffect, useState } from "react";
import api from "../api/axios";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  const getProducts = async () => {
    try {
      const url =
        category === "all"
          ? "/products"
          : `/products/category/${category}`;

      const res = await api.get(url);
      setProducts(res.data.products || res.data);
    } catch (err) {
      console.log("Error loading products:", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Collections</h2>

      {/* Category Select */}
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        style={{
          padding: "8px",
          marginBottom: "20px",
          borderRadius: "5px",
        }}
      >
        <option value="all">All</option>
        <option value="clothing">Clothing</option>
        <option value="footwear">Footwear</option>
        <option value="electronics">Electronics</option>
      </select>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {products.length > 0 ? (
          products.map((p) => (
            <ProductItem
              key={p._id}
              id={p._id}
              image={p.images}
              name={p.name}
              price={p.price}
            />
          ))
        ) : (
          <p>No products found...</p>
        )}
      </div>
    </div>
  );
};

export default Collection;
