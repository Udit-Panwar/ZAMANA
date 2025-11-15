import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  const shopLinks = ["Home", "Collection", "About", "Contact","New Arrivals"];
  const supportLinks = ["Help Center", "Shipping", "Returns", "Size Guide", "Track Order"];

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    if (!email) {
      // You can replace with a toast in your app
      alert("Please enter a valid email address.");
      return;
    }
    // TODO: integrate with your newsletter API
    alert(`Thanks! ${email} has been subscribed.`);
    e.target.reset();
  };

  return (
    <footer className="w-full bg-black/85 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <NavLink to="/" className="inline-flex items-center gap-3">
              <span className="text-2xl font-bold">BrandName</span>
            </NavLink>

            <p className="text-sm text-white/90 max-w-sm">
              Your go-to destination for stylish, comfortable, and high-quality clothing. We bring the latest trends, fast delivery, and a seamless shopping experience—right to your doorstep.
            </p>

            <div className="flex items-center gap-3 mt-2">
              {/* Social icons (white) */}
              <a href="#" aria-label="Instagram" className="p-2 rounded hover:bg-white/10 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7z" />
                  <path d="M12 7.5A4.5 4.5 0 1 1 7.5 12 4.505 4.505 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.503 2.503 0 0 0 12 9.5zM18.5 6.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                </svg>
              </a>

              <a href="#" aria-label="Facebook" className="p-2 rounded hover:bg-white/10 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.2c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.2h-1.12c-1.1 0-1.44.68-1.44 1.38v1.64h2.45l-.39 2.9h-2.06V22A10 10 0 0 0 22 12z"></path>
                </svg>
              </a>

              <a href="#" aria-label="Twitter" className="p-2 rounded hover:bg-white/10 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 5.92c-.6.27-1.25.45-1.93.53a3.4 3.4 0 0 0 1.48-1.88 6.63 6.63 0 0 1-2.15.82 3.33 3.33 0 0 0-5.68 3.04 9.44 9.44 0 0 1-6.85-3.48 3.33 3.33 0 0 0 1.03 4.45 3.26 3.26 0 0 1-1.51-.42v.04a3.33 3.33 0 0 0 2.67 3.27c-.45.12-.92.14-1.4.05a3.36 3.36 0 0 0 3.12 2.32A6.67 6.67 0 0 1 3 18.57a9.4 9.4 0 0 0 5.1 1.5c6.12 0 9.47-5.07 9.47-9.47v-.43A6.64 6.64 0 0 0 22 5.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-white/90">
              {shopLinks.map((s, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-white/90">
              {supportLinks.map((s, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get 10% off — Join our newsletter</h4>
            <p className="text-sm text-white/90">Subscribe for exclusive offers, early access to new drops, and styling tips.</p>

            <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full text-white focus:outline-none"
                required
              />
              <button type="submit" className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition">
                Subscribe
              </button>
            </form>

            <div className="text-sm text-white/70">
              <p>Customer care: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
              <p>Email: <a href="mailto:hello@brand.com" className="hover:underline">hello@brand.com</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <div className="mb-3 md:mb-0">
            © {new Date().getFullYear()} BrandName. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-gray-50 pt-14 pb-8 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//           {/* Brand */}
//           <div>
//             <h2 className="text-2xl font-semibold">QuickStay</h2>
//             <p className="text-gray-600 mt-3 max-w-xs">
//               Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
//             </p>

//             <div className="flex gap-4 mt-4 text-xl text-gray-600">
//               <FaInstagram className="cursor-pointer hover:text-black" />
//               <FaFacebookF className="cursor-pointer hover:text-black" />
//               <FaTwitter className="cursor-pointer hover:text-black" />
//               <FaLinkedinIn className="cursor-pointer hover:text-black" />
//             </div>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="font-semibold text-lg mb-3">COMPANY</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li className="cursor-pointer hover:text-black">About</li>
//               <li className="cursor-pointer hover:text-black">Careers</li>
//               <li className="cursor-pointer hover:text-black">Press</li>
//               <li className="cursor-pointer hover:text-black">Blog</li>
//               <li className="cursor-pointer hover:text-black">Partners</li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h3 className="font-semibold text-lg mb-3">SUPPORT</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li className="cursor-pointer hover:text-black">Help Center</li>
//               <li className="cursor-pointer hover:text-black">Safety Information</li>
//               <li className="cursor-pointer hover:text-black">Cancellation Options</li>
//               <li className="cursor-pointer hover:text-black">Contact Us</li>
//               <li className="cursor-pointer hover:text-black">Accessibility</li>
//             </ul>
//           </div>

//           {/* Stay Updated */}
//           <div>
//             <h3 className="font-semibold text-lg mb-3">STAY UPDATED</h3>
//             <p className="text-gray-600 mb-4">
//               Subscribe to our newsletter for travel inspiration and special offers.
//             </p>

//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
//               />
//               <button className="bg-black text-white px-4 rounded-r-lg">
//                 →
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="border-gray-300 my-10" />

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm">
//           <p>© 2025 QuickStay. All rights reserved.</p>

//           <div className="flex gap-6 mt-4 md:mt-0">
//             <p className="cursor-pointer hover:text-black">Privacy</p>
//             <p className="cursor-pointer hover:text-black">Terms</p>
//             <p className="cursor-pointer hover:text-black">Sitemap</p>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
