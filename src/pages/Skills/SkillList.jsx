import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ImageCard from "../../components/ImageCard";
import image from "../../assets/images/whana.jpg";

const SkillList = () => {
  // Array of skills and their corresponding icons
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-red-600 w-6 h-6" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-6 h-6" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 w-6 h-6" /> },
    { name: "React", icon: <FaReact className="text-blue-400 w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 w-6 h-6" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-6 h-6" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 w-6 h-6" /> },
  ];

  return (
    <>
      <div className="container mx-auto py-10" id="skills">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="place-self-center">
            <ImageCard imageUrl={image}>Hafiz</ImageCard>
          </div>
          <div>
            <h2 className="text-3xl font-heading text-center mb-6 text-text">My Skills</h2>
            <div className="w-full max-w-lg mx-auto p-8 bg-main rounded-base border-2 border-border shadow-light">
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li key={index} className="flex justify-between items-center bg-bg p-2 rounded-base border-2 border-border shadow-light text-base font-base">
                    <span className="flex items-center gap-2">
                      {skill.icon}
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-dashed border-border dark:border-darkBorder mx-10" />
    </>
  );
};

export default SkillList;
