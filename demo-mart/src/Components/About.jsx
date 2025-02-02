import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import home from "../assets/IMG_2471.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-white flex justify-center py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Text Content with Better Animation */}
        <motion.div
          className="lg:w-1/2 text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          viewport={{ once: false, amount: 0.2 }}
          data-aos="fade-right"
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            About
          </motion.h2>
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 mt-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            Your Trusted Partner in Recruitment Excellence
          </motion.h3>
          <motion.p 
            className="text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            StaffSmart addresses the universal challenge of finding the right talent to meet organizational goals, 
            a need that spans industries and regions. We streamline the recruitment process, ensuring that 
            businesses connect with top-tier professionals who align perfectly with their objectives.
          </motion.p>
          <motion.p 
            className="text-gray-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            Headquartered in Coimbatore, we are strategically positioned near leading universities and industries, 
            giving us access to a vast pool of skilled professionals across various experience levels. Our strong 
            Pan-India network further enhances our ability to source the best talent for your organization.
          </motion.p>
        </motion.div>

        {/* Right Image Section with Zoom-in Effect */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          viewport={{ once: false, amount: 0.2 }}
          data-aos="fade-left"
        >
          <div className="rounded-[40px] overflow-hidden relative">
            <motion.img 
              className="w-full h-auto"
              src={home} 
              alt="About Us"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
