import React, { useState } from "react";
import Card from "../../components/Card";
import modular from "../../assets/images/modular.jpg";
import animated from "../../assets/images/animated.jpg";
import grid from "../../assets/images/grid.webp";
import diagram from "../../assets/images/diagram.png";
import web from "../../assets/images/web.png";
import Modal from "../../components/Modal"; // Import komponen Modal

const Projects = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentProject, setCurrentProject] = useState(null); // State untuk proyek yang sedang aktif

  const handleViewClick = (project) => {
    setCurrentProject(project); // Set proyek yang dipilih
    setModalActive(true); // Aktifkan modal
  };

  const projects = [
    {
      title: "ReactiveUI",
      description: "A modern React component library with a focus on accessibility and performance optimization for large-scale applications.",
      techStack: ["React", "TypeScript", "Styled"],
      imageSrc: modular,
    },
    {
      title: "VueMotion",
      description: "An animation library for Vue.js that simplifies the process of creating fluid, physics-based animations and transitions.",
      techStack: ["Vue", "JavaScript", "GSAP"],
      imageSrc: animated,
    },
    {
      title: "PixelPerfect",
      description: "A responsive CSS framework that emphasizes pixel-perfect designs across devices, with a built-in design system.",
      techStack: ["Tailwind", "HTML", "JavaScript"],
      imageSrc: grid,
    },
    {
      title: "StateForge",
      description: "A lightweight state management solution for JavaScript applications, with built-in support for time-travel debugging.",
      techStack: ["JavaScript", "TypeScript", "Redux"],
      imageSrc: diagram,
    },
    {
      title: "WebAssemblyStudio",
      description: "An online IDE for developing and testing WebAssembly modules, integrated with popular frontend frameworks.",
      techStack: ["WebAssembly", "JavaScript", "Rust"],
      imageSrc: web,
    },
  ];

  return (
    <>
      <div className="container mx-auto py-10" id="projects">
        <h1 className="text-3xl font-semibold text-center mb-8">My Projects</h1>

        {/* List Card project */}
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {projects.map((project, index) => (
            <Card
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              onViewClick={() => handleViewClick(project)} // Kirim proyek ke fungsi
            />
          ))}
        </div>
      </div>

      {/* Modal Component */}
      {currentProject && (
        <Modal active={modalActive} setActive={setModalActive}>
          {/* <h2 className="text-lg font-bold">{currentProject.title}</h2>
          <p className="text-sm">{currentProject.description}</p>
          <img src={currentProject.imageSrc} alt={currentProject.title} className="w-full" />
          <p>Tech Stack: {currentProject.techStack.join(", ")}</p> */}
          <p className="m-3 text-lg text-center font-base ">Sorry, this feature is not available yet 😭😭</p>
        </Modal>
      )}

      <hr className="border-dashed border-border dark:border-darkBorder mx-10" />
    </>
  );
};

export default Projects;
