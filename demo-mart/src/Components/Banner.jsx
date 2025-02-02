import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import home from "../assets/home.jpg";

function Banner() {
  const [intensity, setIntensity] = useState(0.2); // Controls green glow intensity

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate the glow effect every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIntensity((prev) => (prev === 0.2 ? 0.5 : 0.2)); // Softly pulsing green
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <img
        src={home}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Animated Glowing Gradient */}
      <motion.div
        className="absolute inset-0 backdrop-blur-sm"
        animate={{
          background: `radial-gradient(circle, rgba(34, 197, 94, ${intensity}), black 100%)`,
        }}
        transition={{ duration: 2, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
          StaffSmart
        </h1>
        <p
          className="text-2xl font-semibold max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Connecting Talent with Opportunity – Seamlessly & Efficiently
        </p>
      </div>

      {/* Navbar */}
      <nav className="absolute top-5 right-10 flex gap-6 text-white font-semibold">
        <a href="#services" className="hover:underline" data-aos="fade-down">
          SERVICES
        </a>
        <a
          href="#contact"
          className="hover:underline"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          CONTACT
        </a>
      </nav>
    </div>
  );
}

export default Banner;
