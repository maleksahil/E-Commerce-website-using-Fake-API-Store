import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CountdownTimer = ({ targetDate }) => {

     useEffect(() => {
          AOS.init({ duration: 1000, once: false });
        }, []);


  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 text-center" data-aos="zoom-in" >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="p-4 bg-white rounded-lg shadow-md w-20">
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600 uppercase">{unit}</p>
        </div>
      ))}
    </div>
  );
};

const OfferSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gray-100" data-aos="zoom-in" >
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900">
          Best Offer - Up to <span className="text-blue-500">50%</span>
        </h1>
        <p className="text-gray-700 mt-2">
          Explore our latest New Arrivals & unlock discounts of up to 50% off!
        </p>

        {/* Countdown Timer */}
        <div className="mt-6">
          <CountdownTimer targetDate="2025-12-31T23:59:59" />
        </div>

        {/* Shop Now Button */}
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600">
          Shop now
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/img/big_banner.webp"
          alt="Offer Product"
          className="max-w-full md:max-w-lg"
        />
      </div>
    </div>
  );
};

export default OfferSection;
