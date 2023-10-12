import Contact from "./components/Contact";
import Header from "./components/Header/Header";
import AboutUs from "./components/Sections/AboutUs";
import Services from "./components/Sections/Services";
import Testimonials from "./components/Sections/Testimonials";
import WhyChooseUs from "./components/Sections/WhyChooseUs";

function App() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10">
          <span className="text-5xl text-center block">DeBelloPhoto</span>
          <h1 className="text-xl text-center">
            Creative Photography Studio in Texas
          </h1>
        </div>

        <img
          className="w-full h-full object-cover opacity-40 lg:opacity-75"
          src="/img/jumbotron-2.jpg"
          alt="Jumbotron"
        />
      </div>

      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Contact />
      <AboutUs />
    </>
  );
}

export default App;
