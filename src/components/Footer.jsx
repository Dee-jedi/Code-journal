import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="sm:hidde pr-12 absolute bottom-0 left-0 w-full flex justify-end">
      <div className="bg-[#f2f2f2] w-[68px] h-[68px] rounded-full flex justify-center items-center -translate-y-[50%]">
        <Link to="/postpage">
          <div className="bg-teal-800 text-white flex justify-center items-center p-4 rounded-full h-16 w-16 text-3xl cursor-pointer shadow-lg transition-transform transform hover:scale-105">
            <FaPlus />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
