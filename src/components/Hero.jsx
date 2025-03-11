import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Image slider array
const images = [
  "/img/slider-1.webp",
  "/img/slider-2.webp",
  "/img/slider-3.webp",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section
      className="h-[800px] px-15 bg-cover bg-center py-24 flex relative transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
   

      {/* Text Content */}
      <div className="relative flex flex-col justify-center z-10 px-10">
        {/* pretitle */}
        <div className="flex items-center uppercase font-semibold mb-4">
          <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
          <span>New Trend</span>
        </div>

        <h1 className="text-[70px] leading-[1.1] font-light mb-4 mt-10">
          AUTUMN SALE STYLISH <br />
          <span className="font-semibold">WOMEN'S</span>
        </h1>

        <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-primary">
          Discover More
        </Link>
      </div>

      
    </section>
  );
};

export default Hero;
