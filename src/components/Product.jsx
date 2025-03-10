import React, { useContext } from 'react';
//import icons
import { BsEyeFill, BsPlus } from 'react-icons/bs';
//import link
import { Link } from 'react-router-dom';
//import cart context
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 p-4 bg-white">
      {/* Image Container */}
      <div className="relative group">
        <div className="w-full h-[300px] flex justify-center items-center  rounded-lg overflow-hidden">
          <img
            className="max-h-[160px] transition-transform duration-300 group-hover:scale-110"
            src={image}
            alt={title}
          />
        </div>

        {/* Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => addToCart(product, id)}
            className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition"
          >
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
      <div className="mt-4 text-center">
        <div className="text-xs uppercase tracking-wider text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="text-lg font-semibold mt-2 hover:text-red-500 transition">{title}</h2>
        </Link>
        <div className="text-xl font-bold text-red-500 mt-2">${price}</div>
      </div>
    </div>
  );
};

export default Product;
