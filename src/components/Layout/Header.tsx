import { Component } from "../../../types/Component";

export const Header: Component = () => {
  return (
    <header className="">
      <div className="w-full bg-">
        <a href="/">DeBelloPhoto</a>
      </div>

      <nav className="">
        <ul>
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
