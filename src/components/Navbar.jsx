import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar umum (desktop & mobile) */}
      <div className='w-full p-3 md:p-2 shadow fixed  backdrop-blur-lg z-50'>
        <div className='container mx-auto flex justify-between items-center text-xl'>
          <p className=' font-semibold hidden sm:flex flex-1 text-center text-3xl'>My Portfolio</p>
          <p className=' font-semibold sm:hidden flex-1 text-center'>Alfitra Raimahafiz</p>

          {/* Tampilkan menu di media sm ke atas */}
          <ul className='hidden sm:flex gap-x-10'>
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.id}
                  smooth={true} // Aktifkan smooth scroll
                  duration={50} // Durasi animasi scroll
                  className='cursor-pointer peer text-accent-primaryx'
                >
                  {link.name}
                </Link>
                <hr className='mx-2.5 border-b-[1px] border-white peer-hover:border-black transition-all duration-300' />
              </li>
            ))}
          </ul>

          {/* Tombol Hamburger untuk media kecil */}
          <div className='sm:hidden'>
            {isMenuOpen ? (
              <TfiClose className='text-3xl cursor-pointer' onClick={toggleMenu} />
            ) : (
              <FiMenu className='text-3xl cursor-pointer' onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {/* Menu dropdown di mobile (di bawah sm) dengan efek transisi */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full bg-bg transition-transform duration-500 ease-in-out z-40 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className='flex flex-col items-center gap-y-5 p-5 mt-[50px] bg-white'>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.id}
                smooth={true}
                duration={50}
                onClick={() => setIsMenuOpen(false)} // Tutup menu saat link diklik
                className='cursor-pointer hover:opacity-70 peer'
              >
                {link.name}
              </Link>
              <hr className='mx-2.5 border-b-[1px] border-white peer-hover:border-black transition-all duration-300' />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
