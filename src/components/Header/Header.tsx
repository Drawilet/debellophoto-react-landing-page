import { useEffect, useState } from "react";
import { Component } from "../../../types/Component";

const links: Record<string, string> = {
  "why-choose-us": "Why choose us?",
  services: "Services",
  testimonials: "Testimonials",
  "contact-us": "Contact us",
  "about-us": "About us",
  portfolio: "Portfolio",
};

const Header: Component = () => {
  const [isScrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const vh = window.innerHeight * 0.01;
      setScrolled(window.scrollY > vh * 10);
    });
  }, []);

  return (
    <header
      className={`text-black py-3 fixed top-0 z-50 w-full transition-colors ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4">
        <a href="/" className="text-black text-2xl block w-full text-center">
          DeBelloPhoto
        </a>

        <div className="lg:hidden absolute right-5">
          <button
            className="text-black hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars text-2xl" />
          </button>
        </div>
      </div>

      <nav className={`${menuOpen ? "" : "sm:hidden"} width-full h-screen`}>
        <ul className="flex flex-col w-full h-full bg-white py-5 overflow-hidden">
          {Object.keys(links).map((key) => (
            <li className="w-full flex flex-col items-center">
              <a
                href={`#${key}`}
                className="text-black hover:text-gray-300 text-2xl block w-full text-center py-2 "
                onClick={() => setMenuOpen(false)}
              >
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
