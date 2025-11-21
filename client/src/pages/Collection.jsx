// import React from 'react'

// const Collection = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Collection



import React, { useState } from "react";

/* ---------------- STATIC PRODUCTS ---------------- */
const products = [
  {
    id: 1,
    name: "Smart Watch",
    category: "Electronics",
    price: 1499,
    oldPrice: 2499,
    img: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop",
    ],
    rating: 4.6,
    stock: 12,
    shipping: "Free Delivery",
    description: "A stylish smart watch with fitness tracking & notifications.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    oldPrice: 3499,
    img: [
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800",
    ],
    rating: 4.3,
    stock: 5,
    shipping: "Express Delivery",
    description: "Premium sound quality with long battery life.",
  },
  {
    id: 3,
    name: "Leather Handbag",
    category: "Bags",
    price: 1299,
    oldPrice: 1899,
    img: [
      "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=800",
    ],
    rating: 4.7,
    stock: 8,
    shipping: "Free Delivery",
    description: "Premium leather handbag with spacious compartments.",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Shoes",
    price: 1599,
    oldPrice: 2499,
    img: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    ],
    rating: 4.2,
    stock: 14,
    shipping: "Express Delivery",
    description: "Comfortable and lightweight running shoes.",
  },
  {
    id: 5,
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 799,
    oldPrice: 1199,
    img: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    ],
    rating: 4.4,
    stock: 25,
    shipping: "Free Delivery",
    description: "Comfortable casual cotton T-shirt.",
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    category: "Fashion",
    price: 899,
    oldPrice: 1599,
    img: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
    ],
    rating: 4.5,
    stock: 18,
    shipping: "Free Delivery",
    description: "Stylish UV protection sunglasses.",
  },
];

/* ---------------- CATEGORIES ---------------- */
const categories = ["All", "Electronics", "Fashion", "Bags", "Shoes"];

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quickViewItem, setQuickViewItem] = useState(null);

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen w-full py-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-15 animate-float-large" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl opacity-15 animate-float-large" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-10 animate-float-large" style={{ animationDelay: '4s' }} />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 animate-grid-move" style={{
        backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-rose-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-orange-500/30 animate-glow-pulse">
              ✨ Premium Collection
            </span>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-rose-500 to-pink-400 bg-clip-text text-transparent mb-4 animate-gradient-text">
            Our Collections
          </h1>
          <p className="text-gray-300 text-lg animate-fade-in-up">
            Explore premium handpicked products.
          </p>
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap animate-slide-in">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-orange-500 to-rose-600 text-white border-orange-500 shadow-lg shadow-orange-500/50 animate-pulse-subtle"
                  : "bg-slate-800/50 text-gray-300 border-slate-700 hover:border-orange-500 hover:text-white"
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div
          key={selectedCategory}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((product, idx) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 overflow-hidden border-2 border-slate-700/50 hover:border-orange-500/80 animate-zoom-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative p-4">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={product.img[0]}
                    className="w-full aspect-square object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 cursor-pointer"
                    onClick={() => setQuickViewItem(product)}
                    alt={product.name}
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 animate-bounce-rotate">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-600 rounded-full blur-lg opacity-75 animate-pulse-strong" />
                      <div className="relative bg-gradient-to-br from-orange-500 to-rose-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-xl">
                        {Math.round(
                          ((product.oldPrice - product.price) / product.oldPrice) * 100
                        )}% OFF
                      </div>
                    </div>
                  </div>

                  {/* Shipping Badge */}
                  <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-sm text-orange-300 text-xs font-semibold px-3 py-2 rounded-full border border-orange-500/50 animate-pulse-text">
                    🚚 {product.shipping}
                  </div>

                  {/* Quick View Button */}
                  <button 
                    onClick={() => setQuickViewItem(product)}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <span className="bg-gradient-to-r from-orange-500 to-rose-600 text-white px-6 py-3 rounded-full font-bold text-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      Quick View
                    </span>
                  </button>
                </div>

                {/* Product Info */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-rose-400 group-hover:bg-clip-text transition-all duration-500">
                    {product.name}
                  </h3>

                  {/* Prices */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                      ₹{product.price}
                    </span>
                    <span className="line-through text-gray-500 text-sm">
                      ₹{product.oldPrice}
                    </span>
                  </div>

                  {/* Rating & Stock */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      {product.rating}
                    </span>
                    <span className="text-green-400">
                      {product.stock} in stock
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full relative bg-gradient-to-r from-orange-500 to-rose-600 text-white py-3 rounded-xl font-bold text-sm hover:shadow-2xl hover:shadow-orange-500/60 transform hover:scale-105 transition-all duration-300 overflow-hidden group/btn">
                    <span className="relative z-10">Add to Cart 🛒</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </button>
                </div>

                {/* Corner Sparkles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-twinkle-fast" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 animate-twinkle-fast" style={{ animationDelay: '0.2s' }} />
              </div>

              {/* Bottom Wave Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-rose-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Products Found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* QUICK VIEW MODAL */}
      {quickViewItem && (
        <QuickViewModal
          item={quickViewItem}
          onClose={() => setQuickViewItem(null)}
        />
      )}

      <style>{`
        @keyframes float-large {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8) translateY(50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce-rotate {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes pulse-strong {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
          50% { box-shadow: 0 0 60px rgba(249, 115, 22, 0.8); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes twinkle-fast {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
        }

        @keyframes pulse-text {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-float-large { animation: float-large 8s ease-in-out infinite; }
        .animate-zoom-in { animation: zoom-in 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s backwards; }
        .animate-slide-in { animation: slide-in 0.8s ease-out; }
        .animate-bounce-rotate { animation: bounce-rotate 3s ease-in-out infinite; }
        .animate-pulse-strong { animation: pulse-strong 2s ease-in-out infinite; }
        .animate-pulse-subtle { animation: pulse-subtle 2s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient-text { animation: gradient-text 5s ease infinite; background-size: 200% 200%; }
        .animate-grid-move { animation: grid-move 30s linear infinite; }
        .animate-twinkle-fast { animation: twinkle-fast 1s ease-in-out infinite; }
        .animate-pulse-text { animation: pulse-text 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </main>
  );
}

/* ---------------- QUICK VIEW MODAL ---------------- */
function QuickViewModal({ item, onClose }) {
  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex justify-center items-center p-4 animate-zoom-in">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 w-full max-w-lg shadow-2xl relative border-2 border-orange-500/50 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 animate-pulse-glow" />
          
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-full font-bold text-xl hover:scale-110 hover:rotate-90 transition-all duration-300 z-10 shadow-lg"
          >
            ×
          </button>

          <div className="relative z-10">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img
                src={item.img[0]}
                className="w-full h-72 object-cover"
                alt={item.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Product Info */}
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent mb-3">
              {item.name}
            </h2>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Rating & Stock */}
            <div className="flex items-center justify-between mb-6 text-sm">
              <span className="flex items-center gap-2 text-gray-300">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="font-semibold">{item.rating}</span>
              </span>
              <span className="text-green-400 font-semibold">
                {item.stock} in stock
              </span>
            </div>

            {/* Prices */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                ₹{item.price}
              </span>
              <span className="line-through text-gray-500 text-xl">
                ₹{item.oldPrice}
              </span>
              <span className="bg-gradient-to-r from-orange-500 to-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}% OFF
              </span>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full relative bg-gradient-to-r from-orange-500 to-rose-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/60 transform hover:scale-105 transition-all duration-300 overflow-hidden group">
              <span className="relative z-10">Add to Cart 🛒</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}