import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Details = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Faster animations
      easing: "ease-out", // Smooth transition
      once: true, // Animates only once
      offset: 100, // Triggers a bit earlier
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0D3556] to-[#1E4A67] text-white py-16 px-8 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2
          className="text-4xl font-semibold text-cyan-400"
          data-aos="fade-up"
        >
          Get in Touch <span className="text-blue-400">→</span>
        </h2>
        <p
          className="text-gray-300 mt-2 max-w-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Feel free to reach out! Whether you have a question or just want to
          say hello, we'd love to hear from you.
        </p>
      </div>

      {/* Contact Details Box */}
      <div
        className="bg-white text-black p-8 md:p-10 rounded-xl shadow-lg max-w-3xl mx-auto border border-transparent hover:border-cyan-400 transition-all duration-300 hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address Section */}
          <div
            className="flex items-start gap-3 text-left"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaMapMarkerAlt className="text-blue-500 text-3xl" />
            <div>
              <h3 className="font-semibold text-lg text-gray-700">
                Office Location
              </h3>
              <p className="text-sm text-gray-600">
                ASHIANA, 1/106, Madathil Lane, <br /> Thottakkattukara, <br />
                Aluva-683108
              </p>
            </div>
          </div>

          {/* Phone & Email Section */}
          <div className="flex flex-col gap-4">
            <div
              className="flex items-start gap-3 text-left"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <FaPhone className="text-blue-500 text-3xl" />
              <div>
                <h3 className="font-semibold text-lg text-gray-700">
                  Phone Numbers
                </h3>
                <p className="text-sm text-gray-600">+91 8921131414</p>
                <p className="text-sm text-gray-600">+91 9037957668</p>
              </div>
            </div>

            <div
              className="flex items-start gap-3 text-left"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <FaEnvelope className="text-blue-500 text-3xl" />
              <div>
                <h3 className="font-semibold text-lg text-gray-700">Email</h3>
                <p className="text-sm text-gray-600">contact@yourcompany.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="mt-6 text-center">
          <button
            className="bg-[#0D3556] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#092A45] transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
