import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";

const services = [
  {
    title: "Domestic & International Recruitment",
    description: "Helping companies hire the right talent worldwide.",
    details:
      "We specialize in helping businesses across various industries find the right talent for their teams, whether domestically or internationally. Our recruitment services extend globally, from India to other key markets, ensuring that your organization has access to the best candidates, no matter where they are located. By leveraging our extensive network and expertise, we simplify the recruitment process, from sourcing candidates to offering guidance on interviews and negotiations.",
    image: img1,
  },
  {
    title: "Middle East Focus",
    description: "Expert recruitment for Construction & Oil & Gas.",
    details:
      "With a deep understanding of the Middle Eastern market, we provide specialized recruitment services for the Construction, Oil, and Gas industries. The demand for skilled workers in these sectors has grown significantly in recent years, and we’re here to support your hiring needs with targeted expertise.",
    image: img2,
  },
  {
    title: "End-to-End Hiring",
    description: "Complete hiring process from screening to onboarding.",
    details:
      "Our end-to-end recruitment services take the burden off your shoulders. From initial screening to final onboarding, we handle the entire hiring process with precision. Our goal is to help you find candidates who are not only qualified but also align with your company’s values.",
    image: img3,
  },
  {
    title: "Overseas Hiring Process",
    description: "Medical screening and visa coordination for global jobs.",
    details:
      "The overseas hiring process requires careful handling of legalities, medical screening, and visa documentation. We provide complete support to ensure compliance and a smooth transition for international hires.",
    image: img4,
  },
];

const ServiceCards = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-center text-4xl font-bold mb-12 text-[#01383f]">
        Our Features & Services
      </h2>

      {/* Animated Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-lg bg-gradient-to-b from-[#e0f2f1] to-[#b2dfdb] hover:shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={() => setSelectedService(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-[#013242]">
              {service.title}
            </h3>
            <p className="mb-4 text-justify text-gray-700">
              {service.description}
            </p>
            <button className="bg-[#01a08b] text-white px-4 py-2 rounded-md hover:bg-[#028e7b] transition">
              MORE
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white w-[90%] sm:w-[600px] p-6 rounded-lg shadow-xl relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-[#01383f] text-center">
              {selectedService.title}
            </h3>
            <p className="text-justify text-gray-700">
              {selectedService.details}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ServiceCards;
