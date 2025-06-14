import React from 'react';
import { Lightbulb, Users, BarChart, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: <Lightbulb className="w-10 h-10 text-indigo-600 mb-3" />,
    title: "AI-Driven Strategy",
    desc: "We leverage AI to analyze data and drive performance improvements.",
  },
  {
    icon: <Users className="w-10 h-10 text-indigo-600 mb-3" />,
    title: "Experienced Team",
    desc: "Our team consists of certified experts with proven track records.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-indigo-600 mb-3" />,
    title: "Proven Results",
    desc: "Our clients consistently see significant sales growth and ROI.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-indigo-600 mb-3" />,
    title: "Transparent Reporting",
    desc: "Real-time dashboards, clear metrics, and no hidden data.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
