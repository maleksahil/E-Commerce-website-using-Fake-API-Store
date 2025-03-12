import React, { useEffect, useState } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import products from "../Product.json";
import Hero from "../components/Hero"

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Triggers on every scroll
  }, []);

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" bg-gray-100 min-h-screen">

     <Hero/>
      <h1 className="text-3xl mt-5 font-bold text-center text-gray-800 mb-6" data-aos="fade-down">
        Product List
      </h1>


      {/* Search Input */}
      <div className="flex justify-center mb-6" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const { id, category, name, price, currency, description, stock, rating, image } = product;
            return (
              <div
                key={id}
                className="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 p-4 bg-white"
                data-aos="fade-up"
              >
                {/* Image Container */}
                <div className="relative group" data-aos="zoom-in">
                  <div className="w-full h-[300px] flex justify-center items-center rounded-lg overflow-hidden">
                    <img
                      className="max-h-[160px] transition-transform duration-300 group-hover:scale-110"
                      src={image}
                      alt={name}
                    />
                  </div>

                  {/* Buttons */}
                  <div
                    className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-aos="fade-left"
                  >
                    <button className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition">
                      <BsPlus className="text-2xl" />
                    </button>
                    <Link
                      to={`/product/${id}`}
                      className="flex items-center justify-center w-10 h-10 bg-white text-gray-700 rounded-full shadow-md hover:text-red-500 transition"
                    >
                      <BsEyeFill className="text-xl" />
                    </Link>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 text-center" data-aos="fade-up">
                  <div className="text-xs uppercase tracking-wider text-gray-500">{category}</div>
                  <Link to={`/product/${id}`}>
                    <h2 className="text-lg font-semibold mt-2 hover:text-red-500 transition">{name}</h2>
                  </Link>
                  <div className="text-xl font-bold text-red-500 mt-2">
                    {currency} {price}
                  </div>
                  <p className="text-gray-700 text-sm mt-1">{description}</p>
                  <p className={`mt-2 text-sm font-medium ${stock === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                    {stock}
                  </p>
                  <p className="text-yellow-500 mt-1">⭐ {rating}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-600 col-span-3" data-aos="fade-up">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
