import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaHome, FaServicestack, FaPhone } from "react-icons/fa";
import logoImg from "../assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r from-[#94d8ec] via-[#d1f8f4] to-[#034d66] shadow-lg py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logoImg} alt="Logo" className="w-28 transition-all duration-500" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-base font-semibold">
          <Link
            to="/"
            className={`flex items-center space-x-2 ${
              location.pathname === "/" ? "text-[#D4ECDD]" : "text-white"
            } hover:text-[#D4ECDD] transition-all`}
          >
            <FaHome className="text-lg" />
            <span>Home</span>
          </Link>
          <Link
            to="/service"
            className={`flex items-center space-x-2 ${
              location.pathname === "/service" ? "text-[#D4ECDD]" : "text-white"
            } hover:text-[#D4ECDD] transition-all`}
          >
            <FaServicestack className="text-lg" />
            <span>Services</span>
          </Link>
          <Link
            to="/contact"
            className={`flex items-center space-x-2 ${
              location.pathname === "/contact" ? "text-[#D4ECDD]" : "text-white"
            } hover:text-[#D4ECDD] transition-all`}
          >
            <FaPhone className="text-lg" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#064663] flex flex-col items-center justify-center transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <Link
          to="/"
          className="text-white text-2xl font-semibold py-4 hover:text-[#D4ECDD]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/service"
          className="text-white text-2xl font-semibold py-4 hover:text-[#D4ECDD]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-white text-2xl font-semibold py-4 hover:text-[#D4ECDD]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
