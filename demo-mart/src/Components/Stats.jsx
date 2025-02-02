import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Stats = () => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          setStartCount(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="stats-section" className="max-w-7xl mx-auto py-14 px-6 sm:px-10 lg:px-12">
      <div className="border-gray-300 pt-12 flex flex-col md:flex-row justify-around text-center gap-8 md:gap-0">
        
        <div data-aos="fade-up">
          <h2 className="text-6xl font-extrabold text-blue-500">
            {startCount && <CountUp start={0} end={20} duration={2} />}<span className="text-3xl align-super">+</span>
          </h2>
          <p className="text-lg text-gray-500 mt-2">YEARS OF INDUSTRY</p>
          <p className="font-bold text-gray-800 text-xl">EXPERIENCE</p>
        </div>

        <div data-aos="fade-down">
          <h2 className="text-6xl font-extrabold text-blue-500">
            {startCount && <CountUp start={0} end={1000} duration={2.5} />}<span className="text-3xl align-super">+</span>
          </h2>
          <p className="text-lg text-gray-500 mt-2">SUCCESSFUL</p>
          <p className="font-bold text-gray-800 text-xl">PROJECTS</p>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-6xl font-extrabold text-blue-500">
            {startCount && <CountUp start={0} end={17} duration={2} />}<span className="text-3xl align-super">+</span>
          </h2>
          <p className="text-lg text-gray-500 mt-2">YEARS IN</p>
          <p className="font-bold text-gray-800 text-xl">OPERATION</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
