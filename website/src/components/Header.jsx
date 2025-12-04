import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="w-full bg-gray-50 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        <div className="flex items-center gap-2">
          <img src="" alt="logo" className="w-12 h-12 object-contain" />
        </div>
        <nav className="hidden md:flex">
          <ul className="flex flex-row items-center gap-8 text-gray-700 font-medium">
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                XYZ Estetik
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Medikal Estetik
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Cerrahi Estetik
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 transition-colors">
                İletişim
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:block bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-gray-800 transition-all"
          >
            Hemen Ön Bilgi Al
          </a>
          <button className="md:hidden text-2xl text-gray-700 hover:text-gray-800 transition-colors">
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
