import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Slider() {
  const leaders = [
    {
      name: 'Dr. Mohan',
      title: 'CEO',
      description: `A seasoned leader with a Ph.D. in Clinical Psychology and 25+ years of experience managing top firms in the Middle East. Dr. Mohan has successfully recruited thousands of professionals, from senior management to skilled technicians.`,
      image: 'https://imgs.search.brave.com/ibsp4i0oEn5e1aN9jF8mQKmYaRTUiLZ46rj_CKntFB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg2LzQ3LzA5/LzM2MF9GXzI4NjQ3/MDk2NV92aWFITTZa/TmpyY3ZMRU5lMTR5/V1FGaTFqRW0yaktl/Vi5qcGc',
    },
    {
      name: 'Dr. Ashok',
      title: 'Managing Director',
      description: `A seasoned leader with a Ph.D. in Clinical Psychology and 25+ years of experience managing top firms in the Middle East. Dr. Mohan has successfully recruited thousands of professionals, from senior management to skilled technicians.`,
      image: 'https://imgs.search.brave.com/IuKTOm3k-zyDpL7BVu1-N-vIgl0vldL9DbsZ9boe-7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzkxLzY3LzUy/LzM2MF9GXzE5MTY3/NTI3NF9JZWJRSzVw/VmFHbWdadnBycEll/dktJUFRvdnNSWlpK/aS5qcGc',
    },
    {
      name: 'Dr. Praveen',
      title: 'Manager',
      description: `A seasoned leader with a Ph.D. in Clinical Psychology and 25+ years of experience managing top firms in the Middle East. Dr. Mohan has successfully recruited thousands of professionals, from senior management to skilled technicians.`,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-white py-8 relative">
      <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
        Our Leadership Team
      </h2>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col lg:flex-row w-full max-w-screen-xl items-center bg-white rounded-lg p-6 gap-x-6 border-0">
          
          {/* Image with Pop-Up and Fade-In Effect */}
          <img
            src={leaders[current].image}
            alt={leaders[current].name}
            className="w-full h-[500px] object-cover rounded-lg mb-6 lg:mb-0 lg:w-1/2 lg:h-[550px] lg:mr-6"
            data-aos="zoom-in" // Added pop-up effect
          />

          <div className="p-6 w-full lg:w-1/2">
            {/* Text with Slide-in Effect */}
            <h3
              className="text-2xl font-semibold mb-2"
              data-aos="fade-right"
            >
              {leaders[current].name} – {leaders[current].title}
            </h3>

            <p
              className="text-gray-600 mb-4"
              data-aos="fade-left"
            >
              {leaders[current].description}
            </p>

            <a href="#" className="inline-flex items-center text-blue-600">
              <Linkedin size={24} className="mr-2" /> LinkedIn
            </a>

            <div className="flex justify-center items-center gap-x-6 mt-6">
              <button
                onClick={prevSlide}
                className="p-3 bg-gray-300 text-white rounded-full"
                data-aos="zoom-in"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-gray-300 text-white rounded-full"
                data-aos="zoom-in"
              >
                <ChevronRight size={26} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
