import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiFigma,
  SiAdobexd
} from "react-icons/si";


const techList = [
  { name: "HTML5", icon: <SiHtml5 size={40} className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 size={40} className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
  { name: "React.js", icon: <SiReact size={40} className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma size={40} className="text-pink-500" /> },
  { name: "Adobe XD", icon: <SiAdobexd size={40} className="text-purple-500" /> },
  // { name: "LottieFiles", icon: <img src="/path/to/lottie-logo.png" className="w-10 h-10" /> }

 
];

const TechStack = () => {
  return (
    <section id="tech" className="bg-white bg-opacity-10 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Professional <span className="text-cyan-400">Skillset</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {techList.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center h-40 border border-white/20 rounded-md bg-white/5 hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              {tech.icon}
              <p className="mt-2 text-sm font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
