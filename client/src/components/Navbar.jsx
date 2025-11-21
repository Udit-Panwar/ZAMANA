import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Collection", path: "/collection" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const {openSignIn} = useClerk()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
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
        {/* <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} /> */}
      </NavLink>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
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
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className={`h-7 transition-all duration-500 ${
            !isScrolled && "invert brightness-0"
          }`}
        />

        <img
          src={assets.cart_icon}
          alt="cart"
          className={`h-7 transition-all duration-500 ${
            !isScrolled && "invert brightness-0"
          }`}
        />
        {/* Desktop Right */}
        {/* <div className="hidden md:flex items-center gap-6">
                  <img src={assets.search_icon} alt="search" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`} />
                  {/* <img src={assets.profile_icon} alt="search" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`} /> */}
        {/* <img src={assets.cart_icon} alt="search" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`}/>  */}

        <button onClick={openSignIn}
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
          alt=""
          className={`${isScrolled && "invert"} h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.cross_icon} alt="cross-icon" className="h-6.5" />
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
          Login
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";
// import {Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-5 px-6 sm:px-32 font-medium">

//       <Link to='/'><img src={assets.logo} className="w-36" alt="logo" /></Link>

//       <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
//         <NavLink to="/" className="flex flex-col items-center gap-1">
//           <p>HOME</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>

//         <NavLink to="/collection" className="flex flex-col items-center gap-1">
//           <p>COLLECTION</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>

//         <NavLink to="/about" className="flex flex-col items-center gap-1">
//           <p>ABOUT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>

//         <NavLink to="/contact" className="flex flex-col items-center gap-1">
//           <p>CONTACT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//       </ul>

//       <div className="flex items-center gap-6">
//         <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

//         <div className="group relative">
//           <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />

//           <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
//             <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//               <p className="cursor-pointer hover:text-black">My Profile</p>
//               <p className="cursor-pointer hover:text-black">Orders</p>
//               <p className="cursor-pointer hover:text-black">Logout</p>
//             </div>
//           </div>
//         </div>

//         <NavLink to="/cart" className="relative">
//           <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
//             1
//           </p>
//         </NavLink>

//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className="w-5 cursor-pointer sm:hidden"
//           alt=""
//         />
//       </div>

//       {/* Sidebar menu for mobile */}
//       <div
//         className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
//           visible ? "w-full" : "w-0"
//         }`}
//       >
//         <div className="flex flex-col text-gray-600">
//           <div
//             onClick={() => setVisible(false)}
//             className="flex items-center gap-4 p-3 cursor-pointer"
//           >
//             <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
//             <p>Back</p>
//           </div>

//           <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
//             HOME
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/collection"
//           >
//             COLLECTION
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/about"
//           >
//             ABOUT
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/contact"
//           >
//             CONTACT
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;