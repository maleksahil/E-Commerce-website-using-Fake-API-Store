import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProductSlider = ({ productData }) => {
    

     useEffect(() => {
              AOS.init({ duration: 1000, once: false });
            }, []);

  return (
    <div className="w-full py-5 px-20" data-aos="zoom-in">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1} // Default for small screens
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
      >
        {productData.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-4">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />

              {/* Product Info */}
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-gray-600 mt-1 text-sm">{product.description}</p>

                {/* Price & Stock Info */}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold text-blue-600">
                    {product.currency} {product.price.toLocaleString()}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      product.stock === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {product.stock}
                  </span>
                </div>

                {/* Rating */}
                <div className="mt-3 flex items-center">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="ml-1 text-gray-700">{product.rating}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
