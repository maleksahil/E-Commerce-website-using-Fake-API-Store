import React from "react";
//import images
import womanImg from '/public/img/womanImg.png'
//import link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="h-[800px] px-15 bg-cover bg-center py-24 flex"
      style={{ backgroundImage: `url('/public/img/hero.jpg')` }} // Ensure the image is inside `public` folder
    >
      <div className="absolute inset-0 bg-black/50 "></div>
      {/* text */}
      <div className="flex flex-col justify-center">
        {/* pretitle */}
        <div className="font-semibold flex items-center uppercase">
          <div className="w-10 h-[2px] bg-red-500 mr-3">New Trend</div>
        </div>
        <h1 className="text-[70px] leading-[1.1] font-light mb-4 mt-10 ">
          AUTUMN SALE STYLISH <br />
          <span className="font-semibold">WOMEN'S</span>
        </h1>
        <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-primary">Discover More</Link>
      </div>
      {/* image */}
      <div className="absolute right-50">
        <img src={womanImg} alt="womanImg" className="hidden lg:block w-[400px]" />
      </div>
    </section>
  );
};

export default Hero;
