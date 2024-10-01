import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-scroll"; // Import Link
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "My Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar umum (desktop & mobile) */}
      <div className="w-full p-3 shadow-lg border-b-[1px] border-bg fixed bg-bg/70 backdrop-blur-lg z-50">
        <div className="container mx-auto flex justify-center items-center text-xl">
          <p className="uppercase font-heading sm:hidden flex-1 text-center">Alfitra Raimahafiz</p>

          {/* Tampilkan menu di media sm ke atas */}
          <ul className="hidden sm:flex gap-x-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.id} // Ganti dengan ID yang sesuai
                  smooth={true} // Aktifkan smooth scroll
                  duration={500} // Durasi animasi scroll
                  onClick={() => setIsMenuOpen(false)} // Tutup menu saat link diklik
                >
                  <Button>{link.name}</Button>
                </Link>
              </li>
            ))}
          </ul>

          {/* Tombol Hamburger untuk media kecil */}
          <div className="sm:hidden">{isMenuOpen ? <TfiClose className="text-3xl cursor-pointer" onClick={toggleMenu} /> : <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />}</div>
        </div>
      </div>

      {/* Menu dropdown di mobile (di bawah sm) dengan efek transisi */}
      <div className={`sm:hidden fixed top-0 left-0 w-full bg-bg transition-transform duration-500 ease-in-out z-40 ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <ul className="flex flex-col items-center gap-y-5 p-5 mt-[70px]">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.id} // Ganti dengan ID yang sesuai
                smooth={true} // Aktifkan smooth scroll
                duration={500} // Durasi animasi scroll
                onClick={() => setIsMenuOpen(false)} // Tutup menu saat link diklik
              >
                <Button className="w-40 text-center">{link.name}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
