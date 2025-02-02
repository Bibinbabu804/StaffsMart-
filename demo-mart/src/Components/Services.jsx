import React, { useEffect } from 'react'; 
import { FaUsers, FaGlobe, FaHandshake, FaUserMd } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation triggers only once
      offset: 100, // Trigger animation a bit earlier than entering the viewport
    });
  }, []);

  return (
    <section className="bg-[#0D1B2A] text-white py-16 px-8 md:px-20">
      <h2 className="text-3xl font-semibold mb-8 text-left">
        Services <span className="text-blue-300">→</span>
      </h2>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
        {/* Box 1 */}
        <div className="bg-[#081423] p-6 rounded-lg text-center transition-all duration-300 hover:bg-blue-700">
          <FaUsers className="text-blue-300 text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-blue-300">
            Recruitment for <br /> India & Overseas
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-[#081423] p-6 rounded-lg text-center transition-all duration-300 hover:bg-red-700">
          <FaGlobe className="text-blue-300 text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-blue-300">
            Specialization in <br /> Middle East hiring
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-[#081423] p-6 rounded-lg text-center transition-all duration-300 hover:bg-blue-700 ">
          <FaHandshake className="text-blue-300 text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-blue-300">
            End-to-end hiring <br /> solutions
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Box 4 */}
        <div className="bg-[#081423] p-6 rounded-lg text-center transition-all duration-300 hover:bg-red-700">
          <FaUserMd className="text-blue-300 text-4xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-blue-300">
            Medical screening for <br /> overseas clients
          </h3>
          <p className="text-sm text-gray-300 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
