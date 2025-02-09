import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules"; // Added Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaGlobe, FaUserTie, FaHandshake, FaUserCheck, FaUniversity } from "react-icons/fa";

const servicesData = [
  { title: "Admission guidance for UG and PG medical seats in India", description:
    "We provide expert guidance for students seeking admission into undergraduate and postgraduate medical programs in India, ensuring a smooth and transparent admission process.", icon: <FaUniversity size={28} className="text-[#0f223c]"/>, color: "bg-[#00bcd4]" },
  { title: "Specialization in Middle East hiring", description:
    "We assist organizations in finding highly skilled professionals who meet the unique requirements of businesses operating in the Middle East.", icon: <FaUserTie size={28} className="text-[#0f223c]"/>, color: "bg-[#12263f]" },
  { title: "Recruitment for India & Overseas", description:
    "We offer recruitment services not only within India but also for international clients. Our global reach allows us to source top talent from across the world.", icon: <FaGlobe size={28} className="text-[#0f223c]"/>, color: "bg-[#12263f]" },
  { title: "Medical screening for overseas clients", description:
    "For overseas placements, we offer medical screening services to ensure that candidates meet the health and fitness requirements for working in international roles.", icon: <FaUserCheck size={28} className="text-[#0f223c]"/>, color: "bg-[#12263f]" },
  { title: "End-to-end hiring solutions", description:
    "From initial contact to final hire, we manage the entire recruitment process, ensuring smooth communication and a hassle-free experience for both you and the candidates.", icon: <FaHandshake size={28} className="text-[#0f223c]"/>, color: "bg-[#12263f]" },
];

function Design2() {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-blue-950 relative">
      {/* Title Positioned at the Top Left */}
      <h2 className="text-4xl font-bold text-white self-start pl-10 mb-6">
        Services <span className="text-[#00bcd4]">→</span>
      </h2>

      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]} // Added Autoplay module
        effect="coverflow"
        spaceBetween={-50}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        navigation
        autoplay={{ delay: 2000, disableOnInteraction: false, reverseDirection: true }} // Auto-scroll to the left
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 200, modifier: 1, slideShadows: false }}
        className="w-[90%] h-[400px]"
      >
        {servicesData.map((service, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className={`w-72 h-96 ${service.color} rounded-2xl shadow-lg p-6 text-center transform transition-all duration-500 hover:scale-110 flex flex-col items-center`}>
              <div className="w-16 h-16 flex items-center justify-center bg-[#11e0cf] rounded-full mb-4">
                {service.icon}
              </div>
              <h2 className="text-lg font-bold text-white">{service.title}</h2>
              <p className="text-sm text-[#00bcd4] mt-2">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Design2;
