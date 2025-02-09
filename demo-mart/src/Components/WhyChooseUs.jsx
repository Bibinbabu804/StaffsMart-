import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaBriefcase } from "react-icons/fa";

const stats = [
  { label: "Success Rate", value: 95, icon: <FaChartLine />, color: "text-green-400" },
  { label: "Extensive Network", value: 5000, icon: <FaUsers />, color: "text-yellow-400" },
  { label: "Industry Expertise", value: 25, icon: <FaBriefcase />, color: "text-blue-400" },
];

const WhyChooseUs = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].value ? count + Math.ceil(stats[index].value / 100) : count
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 bg-gradient-to-r from-[#1A1A40] to-[#040F16] rounded-lg shadow-lg text-center mb-5">
      <h2 className="text-4xl font-extrabold text-white mb-10">Why Choose Us?</h2>
      <p className="text-lg text-gray-300 mb-12">Every business thrives on the right talent. At StaffSmart, we simplify the hiring process, offering cost-effective recruitment solutions that maximize your return on investment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-8 bg-gray-900 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-6xl"
              >
                {stat.icon}
              </motion.div>
            </div>
            <motion.h3
              key={counts[index]}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-5xl font-bold ${stat.color} drop-shadow-lg`}
            >
              {counts[index]}+
            </motion.h3>
            <p className="text-lg text-gray-300 mt-3">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
