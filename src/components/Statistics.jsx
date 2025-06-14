import React from 'react';
import CountUp from 'react-countup';

const stats = [
  {
    label: "Sellers Helped",
    value: 500,
    suffix: "+",
    color: "text-indigo-600",
  },
  {
    label: "Average Sales Growth",
    value: 270,
    suffix: "%",
    color: "text-green-600",
  },
  {
    label: "Total Revenue Generated",
    value: 10,
    suffix: " Cr+",
    color: "text-blue-600",
  },
];

const Statistics = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Our Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 transition hover:shadow-lg"
            >
              <h3 className={`text-4xl font-extrabold ${stat.color} mb-2`}>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
