import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center h-16 bg-white px-4 md:px-16 shadow-lg">
        <h1 className="text-3xl font-bold text-[#222]">
          Info <span className="text-teal-600">Hub</span>
        </h1>
        <nav>
          <ul className="sm:flex gap-6 hidden">
            <li>
              <Link
                to="/"
                className="text-md text-white hover:text-teal-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/postpage"
                className="text-md text-white hover:text-teal-300 transition duration-300"
              >
                Post
              </Link>
            </li>
          </ul>

          <button
            className="text-[#222] text-lg sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;