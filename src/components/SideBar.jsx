import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFileAlt } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';

const SideBar = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleOverlayClick = () => {
    setIsMenuOpen(false); // Close the sidebar when overlay is clicked
  };

  return (
    <>
      {/* Overlay for blurring effect */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-[2px] transition-opacity duration-300"
          onClick={handleOverlayClick} // Close sidebar on overlay click
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? 'translate-x-0 opacity-100' // Sidebar slides in
            : '-translate-x-full opacity-0' // Sidebar slides out
        }`}
      >
        <div className="py-4 px-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-900">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <FaArrowLeft />
          </button>
        </div>

        <ul className="mt-2">
          <li>
            <Link
              to="/"
              className="flex items-center p-4 hover:bg-teal-50 transition ease-in-out rounded-md"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              <FaHome className="text-slate-700 mr-2" />
              <span className="text-lg text-slate-900">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/postpage"
              className="flex items-center p-4 hover:bg-teal-50 transition ease-in-out rounded-md"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              <FaFileAlt className="text-slate-700 mr-2" />
              <span className="text-lg text-slate-900">Posts</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
