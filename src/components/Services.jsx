import React from 'react';
import { FaSearch, FaChartLine, FaBullhorn, FaListAlt, FaSearchDollar } from 'react-icons/fa';

const services = [
  {
    icon: <FaSearch className="text-white text-2xl" />,
    title: "Keyword Optimization",
    description: "Improve product visibility through high-performing keywords.",
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Product Ranking",
    description: "Boost rankings with proven e-commerce algorithms.",
  },
  {
    icon: <FaBullhorn className="text-white text-2xl" />,
    title: "Paid Ads (Amazon/Flipkart)",
    description: "Maximize ROI through targeted ad campaigns.",
  },
  {
    icon: <FaListAlt className="text-white text-2xl" />,
    title: "Listing Enhancement",
    description: "Make your listings stand out with better content and images.",
  },
  {
    icon: <FaSearchDollar className="text-white text-2xl" />,
    title: "SEO & Branding",
    description: "Build long-term visibility and trust through SEO.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 text-center rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-purple-600 p-4 rounded-[1.75rem]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
