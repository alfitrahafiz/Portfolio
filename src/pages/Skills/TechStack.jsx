// TechStack.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const TechStack = () => {
  const techStackItems = [
    { icon: <FaHtml5 />, label: 'HTML5', color: 'text-orange-500' },
    { icon: <FaCss3Alt />, label: 'CSS3', color: 'text-blue-500' },
    { icon: <FaJs />, label: 'JavaScript', color: 'text-yellow-400' },
    { icon: <SiTypescript />, label: 'TypeScript', color: 'text-blue-600' },
    { icon: <FaReact />, label: 'React', color: 'text-sky-500' },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: 'text-teal-400' },
    { icon: <FaNodeJs />, label: 'Node.js', color: 'text-green-600' },
    { icon: <FaGitAlt />, label: 'Git', color: 'text-orange-600' },
  ];

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center p-6 rounded-lg'>
        <h2 className='text-3xl font-semibold mb-8 text-text-primary'>Tech Stack</h2>
        <div className='flex gap-4 overflow-x-auto w-full p-2 xl:justify-center'>
          <div className='flex gap-4'>
            {techStackItems.map((tech, index) => (
              <div
                key={index}
                className='flex flex-col items-center w-32 p-2 rounded-lg bg-white shadow-md transform transition-all duration-300 hover:scale-110 hover:bg-slate-200'
              >
                <div className={`text-3xl ${tech.color}`}>{tech.icon}</div>
                <p className='text-sm text-black mt-2'>{tech.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
