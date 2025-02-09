import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GraduationCap, Stethoscope, Briefcase, HeartHandshake } from "lucide-react";

const SocialImpactCards = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  const initiatives = [
    {
      title: "Educational & Career Counseling",
      description: "We provide expert advice to help students and professionals navigate their academic and career paths.",
      icon: <GraduationCap size={50} className="text-blue-400" />,
    },
    {
      title: "Medical Admissions Support",
      description: "Assisting students with medical admissions, from document preparation to application submission.",
      icon: <Stethoscope size={50} className="text-red-400" />,
    },
    {
      title: "Career Guidance for Graduates",
      description: "Helping fresh graduates with resume building, job search strategies, and interview preparation.",
      icon: <Briefcase size={50} className="text-green-400" />,
    },
    {
      title: "Psychological & Family Counseling",
      description: "Confidential counseling for individuals and families facing challenges related to addiction and mental health.",
      icon: <HeartHandshake size={50} className="text-yellow-400" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Social Impact Initiatives</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[23%] p-8 bg-gray-700 bg-opacity-80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-gray-600"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="mb-5">{initiative.icon}</div>
              <h4 className="text-xl font-semibold">{initiative.title}</h4>
              <p className="text-gray-300 mt-3">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialImpactCards;
