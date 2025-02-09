import React, { useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function GetInTouch() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section className="flex flex-col items-center justify-center min-h-[300px] bg-white transition-colors duration-300 ">
        <div data-aos="fade-down" className="flex space-x-6">
          <button
            className="w-20 h-20 flex items-center justify-center bg-[#00374a] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-blue-500"
            onClick={() => window.location.href = "tel:+1234567890"}
          >
            <FaPhoneAlt className="text-2xl" />
          </button>
          <button
            className="w-20 h-20 flex items-center justify-center bg-[#00374a] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-green-500"
            onClick={() => window.location.href = "https://wa.me/1234567890"}
          >
            <FaWhatsapp className="text-2xl" />
          </button>
        </div>
        <div className="text-center mt-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-black">Get In Touch</h3>
          <p className="text-lg text-black mt-2">
            You can quickly reach us through the following options:
          </p>
        </div>
      </section>
    </div>
  );
}

export default GetInTouch;