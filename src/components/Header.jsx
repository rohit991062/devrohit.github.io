import { useState } from 'react';
import logo1 from '../assets/img/logo1.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow-md">
      <div className="max-w-xs">
        <img 
            src={logo1} 
            alt="Logo" 
            className="w-32 h-auto"
        />
      </div>
      <button
        className="z-50 p-2 bg-transparent border-0 cursor-pointer"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className={`block w-8 h-1 bg-red-500 rounded-full transition-transform ease-in-out duration-250 ${isMenuOpen ? 'transform rotate-45' : ''}`}></span>
        <span className={`block w-8 h-1 bg-red-500 rounded-full mt-1 transition-transform ease-in-out duration-250 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-1 bg-red-500 rounded-full mt-1 transition-transform ease-in-out duration-250 ${isMenuOpen ? 'transform -rotate-45' : ''}`}></span>
      </button>
      <nav
        className={`fixed inset-y-0 right-0 z-50 bg-gray-800 text-white transition-transform ease-in-out duration-250 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-64`}
      >
        <button
          className="absolute p-2 bg-transparent border-0 cursor-pointer top-4 right-4"
          aria-label="Close menu"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-around h-full p-0 m-0 list-none">
          <li>
            <a href="#home" className="text-2xl font-bold no-underline text-inherit hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-2xl font-bold no-underline text-inherit hover:text-red-500">
              My Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-2xl font-bold no-underline text-inherit hover:text-red-500">
              About me
            </a>
          </li>
          <li>
            <a href="#work" className="text-2xl font-bold no-underline text-inherit hover:text-red-500">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
