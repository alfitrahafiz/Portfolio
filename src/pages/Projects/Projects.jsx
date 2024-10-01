import Card from "../../components/Card";
const Projects = () => {
  const handleViewClick = () => {
    alert("View button clicked!");
  };

  const description = [
    { title: "Air Plane", description: "Semuanya dikemas dalam tulisan yang menarik, lengkap dengan informasi wisata, gaya hidup dan tren mode terkini", techStack: ["HTML", "CSS", "JavaScript"], imageSrc: "./src/assets/images/plane.avif" },
    { title: "Brutalism", description: "Semuanya dikemas dalam tulisan yang menarik, lengkap dengan informasi wisata, gaya hidup dan tren mode terkini", techStack: ["React", "Tailwind"], imageSrc: "./src/assets/images/brutalism.webp" },
    { title: "City", description: "Semuanya dikemas dalam tulisan yang menarik, lengkap dengan informasi wisata, gaya hidup dan tren mode terkini", techStack: ["React", "Tailwind", "TypeScript"], imageSrc: "./src/assets/images/city.webp" },
  ];
  return (
    <>
      <div className="container mx-auto py-10" id="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {description.map((project, index) => (
            <Card key={index} imageSrc={project.imageSrc} title={project.title} description={project.description} techStack={project.techStack} onViewClick={handleViewClick} />
          ))}
        </div>
      </div>
      <hr className="border-dashed border-border dark:border-darkBorder mx-10" />
    </>
  );
};

export default Projects;
