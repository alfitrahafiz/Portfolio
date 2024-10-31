import React from 'react';
import { FiEye } from 'react-icons/fi';
import Button from './Button';

const Card = ({ imageSrc, title, description, onViewClick, techStack = [], githubUrl }) => {
  return (
    <div className='relative group w-full max-w-sm rounded-xl overflow-hidden bg-white border border-black transition-all duration-300 hover:-translate-y-1'>
      {/* Image Container */}
      <div className='relative h-48 w-full overflow-hidden'>
        <img
          src={imageSrc || '/api/placeholder/400/320'}
          alt={title}
          className='h-full w-full object-cover transition-all duration-500 group-hover:scale-110'
        />
        {/* Overlay on hover */}
        <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Content Container */}
      <div className='p-5'>
        {/* Title */}
        <h3 className='text-xl font-bold text-gray-800 mb-3'>{title}</h3>

        {/* Description */}
        <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{description}</p>

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {techStack.map((tech, index) => (
              <span
                key={index}
                className='px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full'
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className='flex items-center justify-end'>
          {/* View Button */}
          <Button onClick={onViewClick}>
            <FiEye className='w-4 h-4 mr-2' />
            <span>View Project</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
