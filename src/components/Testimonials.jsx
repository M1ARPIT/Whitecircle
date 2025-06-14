import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rohit Ahuja",
    role: "Amazon Seller",
    quote:
      "Whitecircle helped us double our sales in just 3 months! The keyword strategy and listing optimization were game-changing.",
  },
  {
    name: "Sneha Kapoor",
    role: "Founder, Sneha Fashions",
    quote:
      "Highly professional and transparent. Their team really understands the e-commerce space and delivers real results.",
  },
  {
    name: "Kunal Verma",
    role: "Flipkart Seller",
    quote:
      "From 5 orders a day to 50+. Their ads and ranking strategies actually work. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12 tracking-tight">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:bg-blue-50 border border-indigo-100 transition-all duration-300 h-[300px] flex flex-col justify-between text-center"
            >
              <Quote className="text-indigo-400 w-8 h-8 mx-auto mb-2" />
              <p className="text-gray-700 text-sm italic font-serif mb-6">
                “{t.quote}”
              </p>
              <div>
                <h4 className="text-md font-bold text-indigo-800">{t.name}</h4>
                <span className="text-xs text-gray-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
