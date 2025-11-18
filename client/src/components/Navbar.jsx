import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "Contact", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useContext(ShopContext);

  // Track scroll for background color change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center text-lg justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <NavLink to="/">
        {/* <img src={assets.logo} className={`h-9 ${isScrolled && "invert opacity-80"}`} /> */}
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </NavLink>
        ))}
      </div>

      {/* Right Side Icons */}
      <div className="hidden md:flex items-center gap-6">
        {/* Search */}
        <img
          src={assets.search_icon}
          alt="search"
          className={`h-7 transition-all duration-500 ${
            !isScrolled && "invert brightness-0"
          }`}
        />

        {/* Cart */}
        <NavLink to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart"
            className={`h-7 transition-all duration-500 ${
              !isScrolled && "invert brightness-0"
            }`}
          />

          {cart.length > 0 && (
            <span className="absolute top-[-6px] right-[-6px] bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </NavLink>

        {/* Login */}
        <button
          className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
            isScrolled ? "text-white bg-black" : "bg-white text-black"
          }`}
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menu_icon}
          alt="menu"
          className={`${isScrolled && "invert"} h-4`}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.cross_icon} alt="close" className="h-6" />
        </button>

        {/* Menu Links */}
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

        {/* Login Button Mobile */}
        <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
          Login
        </button>

        {/* Mobile Cart */}
        <NavLink to="/cart" className="relative mt-4">
          <img src={assets.cart_icon} className="h-8" />

          {cart.length > 0 && (
            <span className="absolute top-[-5px] right-[-5px] bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
