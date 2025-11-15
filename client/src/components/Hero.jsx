// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white
//     bg-[url("/src/assets/homeImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      
//     </div>
//   )
// }

// export default Hero

// import React from "react";
// import { assets } from "../assets/assets";



//  const Hero =() =>{

//      return(
//       <div className="relative w-full mt-21">
//       <img
//       src={assets.homeImage}
//       alt="hero"
//       className="w-full h-[90vh] object-cover block"/>

//     <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
//     <h1 className="text-5xl font-bold text-white drop-shadow-lg">
//       OUR BESTSELLERS
//     </h1>
//     <p className="text-lg mt-4 text-white drop-shadow-lg">
//       Shop the latest trends now.
//     </p>
//     <div className="flex items-center gap-2">
//       <p className="font-semibold text-sm md:text-white">SHOP NOW</p>
//     </div>
//   </div>
// </div>

//     )
//  }
//  export default Hero
import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-24 xl:px-32 h-screen text-white 
      bg-no-repeat bg-cover bg-center'
      style={{
        backgroundImage: `url(${assets.homeImage})`, // using imported image
      }}
    >
      <h1 className="font-playfair text-amber-400 text-2xl md:text-3xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Discover Fashion That Defines You
      </h1>

      <p className="max-w-130 mt-2 text-sm md:text-base">
        Step into a world where style meets comfort. Explore exclusive trends 
        crafted to elevate your everyday look with timeless designs.
      </p>

      <button className="mt-4 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;

