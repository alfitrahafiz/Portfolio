import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaVuejs, FaRust } from "react-icons/fa";
import { SiRedux, SiStyledcomponents, SiTailwindcss, SiTypescript, SiWebassembly } from "react-icons/si";
import GSAP from "../assets/images/GSAP.jpeg";
import Button from "./Button";

const icon = [
  { name: "HTML", icon: <FaHtml5 className="text-red-600 w-6 h-6" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-6 h-6" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 w-6 h-6" /> },
  { name: "React", icon: <FaReact className="text-blue-400 w-6 h-6" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500 w-6 h-6" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" /> },
  { name: "Styled", icon: <SiStyledcomponents className="text-pink-500 w-6 h-6" /> },
  { name: "Vue", icon: <FaVuejs className="text-green-600 w-6 h-6" /> },
  { name: "GSAP", icon: <img src={GSAP} alt="GSAP" className="w-6 h-6" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 w-6 h-6" /> },
  { name: "WebAssembly", icon: <SiWebassembly className="text-[#624de8] w-6 h-6" /> },
  { name: "Rust", icon: <FaRust className="text-black w-6 h-6" /> },
];

const Card = ({ imageSrc, title, description, techStack, onViewClick }) => {
  return (
    <div className="relative group w-80 p-6 bg-main border-2 border-black dark:bg-main dark:border-darkBorder shadow-light dark:shadow-dark transform hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300 hover:bg-mainAccent">
      {/* Title & Description Section */}
      <div className="bg-white dark:bg-bg border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark px-4 py-2 mb-4 relative z-10">
        <h2 className="text-lg font-bold text-center mb-2">{title}</h2>
        <p className="text-sm text-center text-text dark:text-text">{description}</p>
      </div>

      {/* Image Section */}
      <div className="relative overflow-hidden border-2 border-black dark:border-darkBorder shadow-light dark:shadow-dark mb-4">
        <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button onClick={onViewClick}>Read More</Button>
          {/* <button className="bg-main text-white dark:bg-darkText px-4 py-2 font-bold transform hover:scale-105 transition-transform">View Project</button> */}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="grid grid-flow-col gap-2 bg-white dark:bg-bg border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark px-4 py-2 mb-4 relative z-10">
        {techStack.map((tech, index) => {
          // console.log(tech);
          const techItem = icon.find((item) => item.name === tech);
          return (
            <div key={index} className="flex flex-col items-center text-xs">
              {techItem && techItem.icon}
              <span>{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
