import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ isMenuOpen, setIsMenuOpen }) => {
  const Links = ({ path, name }) => {
    return (
      <li>
        <Link
          to={path}
          className="hover:bg-gray-300 cursor-pointer p-4 text-[#222] text-xl block w-full"
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          {name}
        </Link>
      </li>
    );
  };

  return (
    <div>
      {/* Sliding Navbar */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex justify-end z-50">
          {/* Backdrop with Blur Effect */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Sidebar */}
          <div
            className={`fixed inset-0 top-[63px] flex justify-end z-50 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="bg-white w-1/2 h-full rounded-tl-lg transform transition-transform duration-300 ease-in-out translate-x-0">
              <h2 className="text-xl rounded-tl-lg text-white font-bold py-4 bg-teal-700 text-center">
                Menu
              </h2>
              <ul>
                <Links path={'/'} name={'Home'} />
                <Links path={'/postpage'} name={'Post'} />
                <Links path={'/'} name={'About'} />
                <Links path={'/'} name={'Services'} />
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
