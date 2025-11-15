import React from "react";
import OfferCard from "../components/OfferCard";
import { assets } from "../assets/assets";


const OffersPage = () => {
  const offers = [
      {
    discount: "40%",
    title: "Summer Fashion Sale",
    description: "Get trendy summer outfits with exclusive discounts on shirts, dresses & accessories.",
    expires: "Aug 15",
    image: assets.charlesdeluvio,
  },
  {
    discount: "25%",
    title: "New Arrivals Exclusive",
    description: "Shop the latest collection with early access for premium members.",
    expires: "Aug 30",
    image: assets.charles,

  },
  {
    discount: "Buy 2 Get 1",
    title: "Festive Combo Deals",
    description: "Buy 2 and get 1 free on selected ethnic & western wear combos.",
    expires: "Sep 10",
    image: assets.ravi,
    
  },
 
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex justify-between items-center">
        <h1 className="font-playfair text-4xl font-semibold">Exclusive Offers</h1>
        <p className="font-outfit text-gray-600 cursor-pointer hover:text-black">
          View All Offers →
        </p>
      </div>

      <p className="font-outfit text-gray-600 mt-3 max-w-xl">
        Take advantage of our limited-time offers and special packages to
        enhance your stay and create unforgettable memories.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {offers.map((offer, idx) => (
          <OfferCard key={idx} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersPage;
