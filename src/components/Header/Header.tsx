import { useState } from "react";
import { Component } from "../../../types/Component";

const links: Record<string, string> = {
  aboutme: "About me",
  testiomonials: "Testimonials",
  projects: "Projects",
  gallery: "Gallery",
};

const Header: Component = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="text-black py-4 absolute top-0 z-50 w-full">
      <div className="flex items-center justify-between px-4">
        <a href="/" className="text-black text-2xl block w-full text-center">
          DeBelloPhoto
        </a>

        <div className="lg:hidden absolute right-5">
          <button
            className="text-black hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars text-2xl"/>
          </button>
        </div>
      </div>

      <nav className={`${menuOpen ? "" : "hidden"} width-full h-screen`}>
        <ul className="flex flex-col w-full h-full bg-white py-5 overflow-hidden">
          {Object.keys(links).map((key) => (
            <li className="w-full flex flex-col items-center">
              <a href={`#${key}`} className="text-black hover:text-gray-300 text-2xl block w-full text-center py-2 " onClick={()=> setMenuOpen(false)}>
                {links[key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
