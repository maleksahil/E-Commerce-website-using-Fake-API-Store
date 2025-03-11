import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import categories from "../Categories.json";

const CollectionsPage = () => {
  
    const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, });
  }, []);

   // Filter products based on search input
    const filteredProducts = categories.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <header
        className="bg-white text-center py-8 border-b border-gray-200"
        data-aos="fade-down"
      >
        <h1 className="text-3xl font-semibold mb-2 hover:text-red-500">
          Collections
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
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((category, index) => (
            <div
              key={index}
              className="overflow-hidden transition-shadow duration-300 transform hover:scale-105"
              data-aos="zoom-in"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[250px] object-cover bg-white rounded-lg shadow-md hover:shadow-lg"
              />
              <div className="p-4">
                <p className="font-medium text-gray-900 hover:text-red-500">
                  {category.name}
                </p>
                <p>Items {category.item}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3" data-aos="fade-up">
            No products found.
          </p>
        )}
      </div>

      </main>
    </div>
  );
};

export default CollectionsPage;
