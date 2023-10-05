import { Component } from "../../../types/Component";

//import { Header } from "./Header";

export const Layout: Component = () => {
  return (
    <>
      <section className="relative w-full h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10">
          <span className="text-5xl text-center block">DeBelloPhoto</span>
          <h1 className="text-xl text-center">Creative Photography Studio in Mexico</h1>
        </div>

        <img
          className="w-full h-full object-cover opacity-75"
          src="/img/jumbotron-2.jpg"
          alt="Jumbotron"
        />
      </section>
    </>
  );
};
