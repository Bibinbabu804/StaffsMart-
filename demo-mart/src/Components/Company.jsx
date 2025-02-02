import React from 'react';

export const Company = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
      
      {/* Left Content */}
      <div data-aos="fade-right" className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          More Than Half Of Marketers (53.8%) Have Not Studied Marketing Related 
          Academics Or Professional Qualifications Of Any Kind.
        </h2>
        <p className="text-gray-600 text-lg">
          DigitalMarketer is a skills and talent development platform for modern marketers. 
          By combining courses, certifications, community, and coaching, we give marketers 
          everything they need to succeed (and look really smart doing it).
        </p>

        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            View Certifications
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Meet Our Faculty
          </button>
        </div>
      </div>

      {/* Right Images */}
      <div data-aos="fade-left" className="grid grid-cols-2 gap-4">
        <img 
          src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Team" 
          className="rounded-lg shadow-md object-cover w-full h-40 md:h-48"
        />
        <img 
          src="https://cdn.mos.cms.futurecdn.net/Ghmn8nJzPpp5FoxTjhxoDT.jpg" 
          alt="Laptop" 
          className="rounded-lg shadow-md object-cover w-full h-40 md:h-48"
        />
        <img 
          src="https://t4.ftcdn.net/jpg/05/14/20/47/360_F_514204772_mT0EpTdZkScyiRPn2PInaKaqd88QGrzE.jpg" 
          alt="Meeting" 
          className="rounded-lg shadow-md object-cover w-full h-40 md:h-48"
        />
        <img 
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
          alt="Discussion" 
          className="rounded-lg shadow-md object-cover w-full h-40 md:h-48"
        />
      </div>
    </div>
  );
};
