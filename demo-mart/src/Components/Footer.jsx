import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-300">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section - Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Column 1 - Digital Marketing */}
          <div>
            <h3 className="text-lg font-semibold text-[#3d60d4]">Digital Marketing <span className="text-gray-900">Services</span></h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>Digital Marketing</li>
              <li>Search Engine Optimization</li>
              <li>Social Media Marketing</li>
              <li>Online Advertising</li>
              <li>Content Marketing</li>
              <li>Influencer Marketing</li>
              <li>Email Marketing</li>
              <li>Video Marketing</li>
              <li>IT Solutions</li>
            </ul>
          </div>

          {/* Column 2 - Design & Development */}
          <div>
            <h3 className="text-lg font-semibold text-[#3d60d4]">Design & <span className="text-gray-900">Development</span></h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Custom Website Development</li>
              <li>Web Hosting</li>
              <li>ECommerce Solutions</li>
            </ul>
          </div>

          {/* Column 3 - Online Branding */}
          <div>
            <h3 className="text-lg font-semibold text-[#3d60d4]">Online <span className="text-gray-900">Branding</span></h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>Branding</li>
              <li>Influencer Marketing</li>
              <li>Corporate Video Production</li>
              <li>Video Production</li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Logo & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-10 border-t pt-8 border-gray-300">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="StaffSmart Logo" className="h-52 w-full mb-4" />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 text-xl hover:text-[#0AA06E]"><FaFacebookF /></a>
              <a href="#" className="text-gray-700 text-xl hover:text-[#0AA06E]"><FaInstagram /></a>
              <a href="#" className="text-gray-700 text-xl hover:text-[#0AA06E]"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-700 text-xl hover:text-[#0AA06E]"><FaTwitter /></a>
              <a href="#" className="text-gray-700 text-xl hover:text-[#0AA06E]"><FaYoutube /></a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start text-gray-700">
              <FaMapMarkerAlt className="mr-2" />
              219, Mavelipuram Onam Park Zone, Kakkanad, Kochi, Kerala 682030
            </p>
          </div>

          {/* Contact Us Button */}
          <div className="mt-6 md:mt-0">
            <a href="#" className="bg-[#2a4aa3] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#010302]">
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} StaffSmart. All Rights Reserved.
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-700">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
