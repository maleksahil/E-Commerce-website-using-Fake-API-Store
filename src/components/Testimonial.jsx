import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, TechCorp",
    message:
      "This platform has completely transformed the way we work. Exceptional quality and customer service!",
    image: "/img/testimonial_2.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    designation: "Marketing Head, BrandX",
    message:
      "Highly recommended! The attention to detail and support from the team is outstanding.",
    image: "/img/testimonial_1.jpg",
  },
  {
    id: 3,
    name: "David Wilson",
    designation: "Freelancer",
    message:
      "A seamless experience from start to finish. This is exactly what I was looking for!",
    image: "/img/testimonial_3.jpeg",
  },
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, TechCorp",
    message:
      "This platform has completely transformed the way we work. Exceptional quality and customer service!",
    image: "/img/testimonial_2.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    designation: "Marketing Head, BrandX",
    message:
      "Highly recommended! The attention to detail and support from the team is outstanding.",
    image: "/img/testimonial_1.jpg",
  },
  {
    id: 3,
    name: "David Wilson",
    designation: "Freelancer",
    message:
      "A seamless experience from start to finish. This is exactly what I was looking for!",
    image: "/img/testimonial_3.jpeg",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="w-full py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        className="px-5"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 overflow-hidden"
              />
              <p className="text-gray-700 italic">"{testimonial.message}"</p>
              <h4 className="text-lg font-semibold text-gray-900 mt-3">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
