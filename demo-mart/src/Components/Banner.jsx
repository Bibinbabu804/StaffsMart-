import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeImg from "../assets/Home.png";
import logoImg from "../assets/Logo.png";
import { Menu, X } from "lucide-react";
import { FaHome, FaPhone, FaServicestack } from "react-icons/fa";

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white bg-[#04293A]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={homeImg} alt="Background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gradient-to-r from-[#94d8ec] via-[#d1f8f4] to-[#034d66] shadow-lg py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="Logo" className="w-20 md:w-28 transition-all duration-500" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-lg font-semibold">
            <Link
              to="/"
              className={`flex items-center space-x-2 ${location.pathname === "/" ? "text-[#D4ECDD]" : "text-white"}`}
            >
              <FaHome /> <span>Home</span>
            </Link>
            <Link to="/service" className="hover:text-[#D4ECDD] flex items-center space-x-2">
              <FaServicestack /> <span>Services</span>
            </Link>
            <Link to="/contact" className="hover:text-[#D4ECDD] flex items-center space-x-2">
              <FaPhone /> <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#064663] flex flex-col items-center justify-center transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
            <X size={32} />
          </button>
          <Link to="/" className="text-white text-2xl font-semibold py-4 hover:text-[#D4ECDD]" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/service" className="text-white text-2xl font-semibold py-4 hover:text-[#D4ECDD]" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="text-white text-2xl font-semibold py-4 hover:text-[#D4ECDD]" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Banner Content */}
      <div className="relative text-center px-4 sm:px-6 md:px-12 max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logoImg} alt="Logo" className="w-28 sm:w-40 md:w-48" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#D4ECDD] mb-4 sm:mb-6 leading-tight">
          Connecting Talent with <br />
          Opportunity – <span className="text-[#A4B494]">Seamlessly & Efficiently</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
          We connect top talent with leading companies, ensuring success at every step.
        </p>

        {/* CTA Button */}
        <Link
          to="/service"
          className="px-6 py-3 bg-[#D4ECDD] text-[#04293A] font-bold rounded-lg hover:bg-[#A4B494] transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Banner;
