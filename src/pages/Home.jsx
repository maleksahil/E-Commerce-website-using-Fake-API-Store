import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
// Import components
import Product from "../components/Product";
import Hero from "../components/Hero";
import CountdownOffer from "../components/CountdownOffer";
import ProductSlider from "../components/ProductSlider";

// Import JSON data
import productData from "../Product.json";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    
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

  return (
    <div>
      <Hero data-aos="zoom-in" />

      {/* Banner Section */}
      <div className="w-full h-[500px] bg-blue-400 flex flex-col md:flex-row p-10 justify-around items-center" data-aos="zoom-in">
        {/* Left Banner */}
        <div className="relative bg-[#cccccc] w-[40%] h-[80%] rounded-lg shadow-lg overflow-hidden">
          <img
            src="/img/banner_1.webp"
            className="w-full hover:scale-125 transition-all duration-500"
            alt="Men's Collection"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-3xl font-bold">Suits and Formal wear</h1>
            <button className="border-2 cursor-pointer border-black rounded p-2 px-5 mt-5">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Banner */}
        <div className="relative bg-[#f8f9fa] w-[40%] h-[80%] rounded-lg shadow-lg overflow-hidden">
          <img
            src="/img/banner_2.webp"
            className="w-full hover:scale-125 transition-all duration-500"
            alt="Women's Collection"
          />
          <div className="absolute bottom-10 left-10">
            <h1 className="text-3xl font-bold">Suits and Formal wear</h1>
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

<ProductSlider productData={productData} />
    
    </div>
  );
};

export default Home;
