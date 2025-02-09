import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import ServiceCards from "../components/ServiceCards";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";


export default function ServicesPage() {
  return (
    <div className="bg-white text-white relative">

      {/* Hero Section with Diagonal Cut and Gradient Overlay */}
      <div className="relative py-40 px-6 text-center border-none bg-cover bg-center" 
          style={{ backgroundImage: "url('https://b3275620.smushcdn.com/3275620/wp-content/uploads/2023/07/Comprehensive-Recruitment-Process-Guide-and-RPO-Benefits--1024x684.jpg?lossy=2&strip=1&webp=1')" }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#326d81] via-[#bbeee8] to-[#326d81]  opacity-80"></div>

        <Navbar/>

        <h1 className="relative text-4xl sm:text-4xl md:text-5xl font-bold text-[#09313f] mt-5">Comprehensive Recruitment Solutions for Every Business</h1>
        <p className="relative mt-5 text-lg text-[#062e33]">
          Our expertise in recruitment ensures that you get the best talent, whether you’re hiring locally, internationally, or for specific sectors like Construction and Oil & Gas.
        </p>      
      </div>

      <ServiceCards />
      <WhyChooseUs />
      <CTA />
      <Testimonials />
    
    </div>
  );
}