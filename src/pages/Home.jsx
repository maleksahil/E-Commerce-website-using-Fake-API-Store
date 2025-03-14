import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
// Import components
import Product from "../components/Product";
import Hero from "../components/Hero";
import CountdownOffer from "../components/CountdownOffer";
import ProductSlider from "../components/ProductSlider";
import TestimonialSlider from "../components/Testimonial"

// Import JSON data
import productData from "../Product.json";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  // Get products from ProductContext
  const { products } = useContext(ProductContext);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // Get only men's and women's clothing category
  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  const viewAll = () =>{
    navigate("/product")
  }

  return (
    <div>
      <Hero data-aos="zoom-in" />

      {/* Banner Section */}
      <div
        className="w-full h-[500px] bg-blue-400 flex flex-col md:flex-row p-10 justify-around items-center"
        data-aos="zoom-in"
      >
        {/* Left Banner */}
        <div className="relative bg-[#cccccc] w-[100%] md:w-[40%] mt-5 h-[80%] rounded-lg shadow-lg overflow-hidden">
          <img
            src="/img/banner_1.webp"
            className="w-full hover:scale-125 transition-all duration-500"
            alt="Men's Collection"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-xl md:text-3xl font-bold">Suits and Formal wear</h1>
            <button className="border-2 cursor-pointer border-black rounded p-2 px-5 mt-5">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Banner */}
        <div className="relative bg-[#f8f9fa] w-[100%] md:w-[40%] mt-5 h-[80%] rounded-lg shadow-lg overflow-hidden">
          <img
            src="/img/banner_2.webp"
            className="w-full hover:scale-125 transition-all duration-500"
            alt="Women's Collection"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-xl md:text-3xl font-bold">Suits and Formal wear</h1>
            <button className="border-2 cursor-pointer border-black rounded p-2 px-5 mt-5">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-16" data-aos="zoom-in">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Offer Section */}
      <CountdownOffer />

      <div
        className="flex justify-center text-4xl p-7 font-semibold"
        data-aos="fade-up"
      >
        <h1>Featured Collections</h1>
      </div>
      
      <ProductSlider productData={productData} />

      <div className="flex justify-center p-5">
      <button onClick={viewAll} className="bg-blue-500 text-white px-5 py-2 rounded-xl cursor-pointer text-semibold">View All</button>
      </div>

      <div
        className="flex justify-center text-4xl p-7 font-semibold"
        data-aos="fade-up"
      >
        <h1>New Arrivals</h1>
      </div>
      <ProductSlider productData={productData} />

      <div className="flex justify-center p-5">
      <button onClick={viewAll} className="bg-blue-500 text-white px-5 py-2 rounded-xl cursor-pointer text-semibold">View All</button>
      </div>

<div className="bg-slate-400 text-white p-5 text-2xl ">

      <marquee>
      <div className="flex space-x-10 ">

        <p>Returns accepted for 30 days</p>
        <p>Free return shipping</p>
        <p>No restocking fee</p>
        <p>No final sale items</p>
        <p>100% Payment Secure</p>
        <p>Online Support</p>
        <p>Returns accepted for 30 days</p>
        <p>Free return shipping</p>
        <p>No restocking fee</p>
        <p>No final sale items</p>
        <p>100% Payment Secure</p>
        <p>Online Support</p>
      </div>
      </marquee>
</div>

<TestimonialSlider/>
    </div>
  );
};

export default Home;
