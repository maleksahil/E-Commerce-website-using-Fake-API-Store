import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {


  useEffect(()=>{
    AOS.init({duration:1000, once:false,})
  },[])
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to <span className="text-red-500 font-semibold">YourStore</span>, your one-stop destination for high-quality products at unbeatable prices.
        </p>
      </div>

      {/* Our Mission */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg mb-10" data-aos="fade-down">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At <span className="text-red-500 font-semibold">YourStore</span>, our mission is to provide top-quality products with outstanding customer service. We believe in affordability, quality, and trust.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg mb-10" data-aos="fade-down">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="text-gray-600 space-y-2">
          <li>✔ Wide variety of high-quality products</li>
          <li>✔ Secure and fast checkout process</li>
          <li>✔ 24/7 customer support</li>
          <li>✔ Fast and reliable shipping</li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">📍 Address: 123 E-Commerce Street, India</p>
        <p className="text-gray-600">📧 Email: support@yourstore.com</p>
        <p className="text-gray-600">📞 Phone: +91 9876543210</p>
      </div>
    </section>
  );
};

export default AboutUs;
