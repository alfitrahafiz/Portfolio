import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import Button from "./Button";

const iconMap = {
  React: FaReact,
  JavaScript: FaJs,
  HTML: FaHtml5,
  CSS: FaCss3,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
};

const Card = ({ imageSrc, title, description, techStack, onViewClick }) => {
  return (
    <div className="relative group w-80 p-6 bg-main border-2 border-black dark:bg-darkBg dark:border-darkBorder shadow-light dark:shadow-dark transform hover:translate-x-[5px] hover:translate-y-[5px] transition-transform duration-300 hover:bg-mainAccent">
      {/* Title & Description Section */}
      <div className="bg-white dark:bg-darkBg border-2 border-border dark:border-darkBorder shadow-light dark:shadow-dark px-4 py-2 mb-4 relative z-10">
        <h2 className="text-lg font-bold text-center mb-2">{title}</h2>
        <p className="text-sm text-center text-text dark:text-darkText">{description}</p>
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
      <div className="grid grid-cols-3 gap-2 text-center mb-4">
        {techStack.map((tech, index) => {
          const IconComponent = iconMap[tech];
          return (
            <div key={index} className="flex flex-col items-center text-xs">
              {IconComponent && <IconComponent className="w-6 h-6 mb-1 text-black dark:text-darkText" />}
              <span>{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
