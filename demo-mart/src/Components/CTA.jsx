import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[50vh] bg-[#00374a] px-6">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01a08b] to-[#00374a] opacity-80"></div>

      {/* Glassmorphism Card */}
      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-10 text-center shadow-lg max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Let’s Build Your Dream Team
        </h2>
        <p className="mb-6 text-lg text-gray-200">
          Experience seamless recruitment and find the perfect fit for your business.
        </p>

        {/* Animated Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#01a08b] rounded-full shadow-lg transition-all duration-300 relative overflow-hidden hover:bg-[#019278]"
          >
            Get Started
            <span className="absolute inset-0 bg-white opacity-10 transition-all duration-300 rounded-full"></span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA;
