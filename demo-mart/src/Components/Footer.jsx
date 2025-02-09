import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaLocationArrow, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import logoImg from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#88d8f3] to-[#2a7181] text-black py-12 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-[#01a08b] opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-32 h-32 bg-[#01a08b] opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Us Section */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <img src={logoImg} alt="Company Logo" className="mb-4 w-32 md:w-40" />
            <p className="text-black text-sm mb-4">
              StaffSmart is your trusted partner in recruitment, connecting businesses with top talent across industries.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-black">
              {["Home", "About Us", "Services", "Careers", "Contact"].map((item, index) => (
                <li key={index} className="hover:text-[#01a08b] transition-all flex items-center gap-2">
                  <FaArrowRight className="text-xs text-black" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center gap-3 mb-3">
              <FaLocationArrow className="text-lg text-black" />
              <p className="text-black text-sm">
                ASHIANA, 1/106, Madathil Lane, Thottakkattukara, Aluva-683108
              </p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <FaPhone className="text-lg text-black" />
              <p className="text-black text-sm">
                <a href="tel:+918921131414" className="hover:text-[#01a08b]">+91 8921131414</a> / 
                <a href="tel:+919037957668" className="hover:text-[#01a08b]"> +91 9037957668</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-black" />
              <p className="text-black text-sm">
                <a href="mailto:info@staffsmart.com" className="hover:text-[#01a08b]">info@staffsmart.com</a>
              </p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-5">
              {[FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-2xl text-black hover:text-[#01a08b] transition-transform transform hover:scale-110"
                  whileHover={{ rotate: 10 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="text-center mt-8 border-t border-gray-500 pt-6">
          <p className="text-sm text-black">&copy; 2025 StaffSmart. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
