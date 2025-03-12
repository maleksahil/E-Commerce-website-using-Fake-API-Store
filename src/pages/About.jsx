import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to{" "}
          <span className="text-red-500 font-semibold">YourStore</span>, your
          one-stop destination for high-quality products at unbeatable prices.
        </p>
      </div>

      {/* About US */}
      <div
        className="w-[90%] lg:w-[80%] h-[500px]  mx-auto flex flex-col lg:flex-row justify-around"
        data-aos="fade-up"
      >
        <div className=" w-[100%] lg:w-[47%] h-[100%] lg:h-[80%] my-auto flex flex-col justify-around">
          <h1 className="text-xl lg:text-3xl font-semibold">
            Minimalin E-Commerce
          </h1>
          <p className="text-sm md:text-md lg:text-lg text-gray-700">
            Minimalin E-Commerce is a dynamic and innovative online retail
            platform that offers a wide range of products to customers
            worldwide. Established in 1191, our company has rapidly grown to
            become a prominent player in the eCommerce industry. Our mission is
            to provide customers with a seamless and convenient shopping
            experience while offering a diverse selection of high-quality
            products.
          </p>
          <p className="text-sm md:text-md lg:text-lg text-gray-700">
            Minimalin E-Commerce is dedicated to setting new standards in the
            eCommerce landscape, providing convenience, choice, and quality to
            our valued customers.
          </p>
        </div>
        <div className="mt-5 w-[100%] lg:w-[47%] h-[100%] lg:h-[80%] my-auto rounded-2xl overflow-hidden">
          <img src="/img/aboutUs.webp" className="h-full w-full" />
        </div>
      </div>

      {/* you tube video */}
      <div className="flex justify-center items-center" data-aos="fade-down">
      <iframe
        className="rounded-xl"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/7m16dFI1AF8?si=vdc4vMqvYq0T-kyW"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      </div>

      {/* Our Mission */}
      <div
        className="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg mb-10 mt-5"
        data-aos="fade-down"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600">
          At <span className="text-red-500 font-semibold">YourStore</span>, our
          mission is to provide top-quality products with outstanding customer
          service. We believe in affordability, quality, and trust.
        </p>
      </div>

      {/* Why Choose Us */}
      <div
        className="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg mb-10"
        data-aos="fade-down"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <ul className="text-gray-600 space-y-2">
          <li>✔ Wide variety of high-quality products</li>
          <li>✔ Secure and fast checkout process</li>
          <li>✔ 24/7 customer support</li>
          <li>✔ Fast and reliable shipping</li>
        </ul>
      </div>

      {/* Contact Information */}
      <div
        className="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600">
          📍 Address: 123 E-Commerce Street, India
        </p>
        <p className="text-gray-600">📧 Email: support@yourstore.com</p>
        <p className="text-gray-600">📞 Phone: +91 9876543210</p>
      </div>
    </section>
  );
};

export default AboutUs;
