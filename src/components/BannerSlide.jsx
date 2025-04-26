import React, { useState } from "react";
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
const banners = [
  banner1,
  banner2,
];

const BannerSlide = () => {
  const [current, setCurrent] = useState(0);

  const nextBanner = () => {
    setCurrent((current + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrent((current - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <img src={banners[current]} alt="Banner" className="w-full h-full object-cover" />
      <button onClick={prevBanner} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        {"<"}
      </button>
      <button onClick={nextBanner} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        {">"}
      </button>
    </div>
  );
};

export default BannerSlide;
