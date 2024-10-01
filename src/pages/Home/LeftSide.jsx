import { useTypewriter } from "react-simple-typewriter";
import Button from "../../components/Button";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
const LeftSide = () => {
  const [typeEffects] = useTypewriter({
    words: ["Frontend Dev", "Freelancer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      <div className="w-full flex flex-col gap-4 justify-center sm:items-start items-center sm:order-0 order-1 sm:ps-16">
        <p className="text-base font-base">Hi,I'm Hafiz</p>
        <p className=" sm:text-4xl text-lg font-heading text-center sm:text-left">
          I'm a <span>{typeEffects}</span>
        </p>
        <p className="text-sm opacity-50 text-center sm:text-left">
          {" "}
          Passionate about crafting beautiful and functional web applications. With expertise in JavaScript, React, and modern CSS, I enjoy building user-friendly interfaces that enhance user experience. Let's collaborate and create
          something amazing together!
        </p>
        <Button
          onClick={() => {
            window.open("https://www.linkedin.com/in/alfitra-raimahafiz-6332a7231/", "_blank");
          }}
        >
          <FaLinkedin className="text-xl mr-2" />
          Connect With Me <FaArrowRight className="ml-2" />
        </Button>
      </div>
    </>
  );
};

export default LeftSide;
