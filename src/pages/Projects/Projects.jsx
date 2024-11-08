import { useState } from 'react';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

// Import images
import modular from '../../assets/images/modular.jpg';
import jikan from '../../assets/images/jikan.png';
import eshop from '../../assets/images/eshop.png';
import taskflow from '../../assets/images/taskflow.png';
import web from '../../assets/images/animated.jpg';

const Projects = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(2);

  const handleViewClick = (project) => {
    setCurrentProject(project);
    setModalActive(true);
  };

  const projects = [
    {
      title: 'AnimeVault',
      description:
        'A dynamic anime discovery platform built with React and Jikan API. Features include real-time search, advanced filtering, seasonal anime tracking, and a responsive grid layout. Implemented with React Query for efficient data fetching and Framer Motion for smooth animations.',
      imageSrc: jikan, // Anime related image
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React Query', 'Jikan API'],
      githubUrl: 'https://github.com/alfitrahafiz/AnimeVault',
    },
    {
      title: 'DashboardPro',
      description:
        'A modern admin dashboard template featuring dark/light mode, real-time charts, customizable widgets, and comprehensive analytics views. Built with Next.js 13 and showcases advanced state management patterns.',
      imageSrc: modular, // Dashboard related image
      techStack: ['Next.js', 'Redux Toolkit', 'Chart.js', 'Tailwind CSS', 'TypeScript'],
      githubUrl: 'https://github.com/yourusername/dashboardpro',
    },
    {
      title: 'E-Shop',
      description:
        'A full-featured e-commerce platform with product filtering, cart management, user authentication, and payment integration. Implements modern UI patterns and optimized for performance with Next.js.',
      imageSrc: eshop, // E-commerce related image
      techStack: ['Next.js', 'React', 'Redux', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/eshop',
    },
    {
      title: 'TaskFlow',
      description:
        'A beautiful and intuitive task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Showcases advanced React patterns and smooth animations.',
      imageSrc: taskflow, // Task management related image
      techStack: ['React', 'TypeScript', 'React DnD', 'Firebase', 'Styled Components'],
      githubUrl: 'https://github.com/yourusername/taskflow',
    },
    {
      title: 'PortfolioX',
      description:
        'A modern portfolio template with smooth scrolling, interactive elements, and dynamic theming. Features a unique layout with CSS Grid and engaging animations. Optimized for performance and SEO.',
      imageSrc: web, // Portfolio related image
      techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'React Three Fiber'],
      githubUrl: 'https://github.com/yourusername/portfoliox',
    },
  ];

  const handleLoadMore = () => {
    setVisibleProjects(projects.length);
  };
  const Hide = () => {
    setVisibleProjects(2);
  };

  return (
    <>
      <div className='container mx-auto py-16' id='projects'>
        <h1 className='text-3xl font-semibold text-center mb-8'>My Projects</h1>

        {/* List Card project */}
        <div className='flex justify-center items-center gap-10 flex-wrap'>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              onViewClick={() => handleViewClick(project)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length ? (
          <div className='mt-10 flex justify-center'>
            <button
              onClick={handleLoadMore}
              className='px-6 py-3 bg-bg-dark text-white rounded-lg font-medium transition-all duration-300hover:bg-blue-700 hover:shadow-lg active:scale-95'
            >
              Load More Projects
            </button>
          </div>
        ) : (
          <div className='mt-10 flex justify-center'>
            <button
              onClick={Hide}
              className='px-6 py-3 bg-bg-dark text-white rounded-lg font-medium transition-all duration-300hover:bg-blue-700 hover:shadow-lg active:scale-95'
            >
              Hide Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal Component */}
      {currentProject && (
        <Modal active={modalActive} setActive={setModalActive}>
          <p className='m-3 text-lg text-center font-base'>
            Sorry, this feature is not available yet 😭😭
          </p>
        </Modal>
      )}

      <hr className='border-dashed border-border dark:border-darkBorder mx-10' />
    </>
  );
};

export default Projects;
