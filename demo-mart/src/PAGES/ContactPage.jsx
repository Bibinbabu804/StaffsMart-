import React from "react";
import SocialImpactCards from "../components/SocialImpactCards";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GetInTouch from "../Components/GetInTouch";

const ContactPage = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="relative bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/premium-vector/contact-us-customer-support-hotline-connect-concept_387612-893.jpg?semt=ais_hybrid')]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3b46] via-[#bbeee8] to-[#87d6f0] opacity-80"></div>
        <Navbar />
        <div className="relative z-10 py-20 flex flex-col items-center px-6">
          <h2 className="text-4xl font-bold text-[#082731] text-center mb-4">Get in Touch With Us</h2>
          <p className="text-lg text-[#1a3b46] text-center max-w-2xl">
            We'd love to hear from you! Fill out the form or reach out directly.
          </p>
          <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-6xl w-full">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send us a message</h3>
              <form action="https://formsubmit.co/support@sreyas.com" method="POST" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Your Name" className="w-full text-black p-3 border border-gray-300 rounded-md" required />
                  <input type="email" name="email" placeholder="Your Email" className="w-full text-black p-3 border border-gray-300 rounded-md" required />
                </div>
                <input type="text" name="subject" placeholder="Subject" className="w-full text-black p-3 border border-gray-300 rounded-md" required />
                <textarea name="message" placeholder="Your Message" rows="5" className="w-full text-black p-3 border border-gray-300 rounded-md" required></textarea>
                <button type="submit" className="w-full bg-[#01a08b] text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
              </form>
            </div>
            <div className="text-[#061a20] space-y-6">
              <h3 className="text-2xl font-semibold text-[#07232c] text-center">Contact Information</h3>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <p>ASHIANA, 1/106, Madathil Lane, Thottakkattukara, Aluva-683108</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <p>+91 8921131414 / +91 9037957668</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <p>info@staffsmart.com</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe width="100%" height="300" src="https://www.google.com/maps/embed?..." frameBorder="0" allowFullScreen className="rounded-lg"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <section className="animate__animated animate__fadeInUp">
        <SocialImpactCards />
      </section>
      <GetInTouch/>
   
    </div>
  );
};

export default ContactPage;
