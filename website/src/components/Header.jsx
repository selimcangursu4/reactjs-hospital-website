import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full flex flex-row shadow-md p-3 justify-between items-center bg-gray-50">
      <img src="" alt="logo" />
      <nav className="hidden md:block">
        <ul className="flex flex-row justify-center items-center gap-3">
          <li>
            <a href="">XYZ Estetik</a>
          </li>
          <li>
            <a href="">Hizmetlerimiz</a>
          </li>
          <li>
            <a href="">Hakkımızda</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">İletişim</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li className="hidden md:block">
          <a className="bg-blue-950 text-white p-2 rounded-md text-sm" href="">
            Hemen Ön Bilgi Al
          </a>
        </li>
        <li className="block md:hidden">
          <a href="">
            <RxHamburgerMenu />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
