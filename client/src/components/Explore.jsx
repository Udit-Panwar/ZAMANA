import React from "react";
import { assets } from "../assets/assets"; // make sure your about bg image is here

const Explore = () => {
  return (
    <div
      className="w-full my-18 h-[80vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-6 md:px-16 lg:px-24"
      style={{
        backgroundImage: `url(${assets.explore})`, // replace with your image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center text-white">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h2>

        <p className="font-outfit text-sm md:text-sm leading-relaxed text-white/90">
          We believe fashion should feel effortless. Our mission is to create
          clothing that blends comfort, quality, and modern style—crafted for
          every moment. Each piece is thoughtfully designed with premium
          fabrics to elevate your confidence and everyday life.
        </p>
      </div>
    </div>
  );
};

export default Explore;

