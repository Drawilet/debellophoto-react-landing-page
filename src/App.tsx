import Header from "./components/Header/Header";
import Contact from "./components/Sections/Contact";
import AboutUs from "./components/Sections/AboutUs";
import Services from "./components/Sections/Services";
import Testimonials from "./components/Sections/Testimonials";
import WhyChooseUs from "./components/Sections/WhyChooseUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen">
        <div className="absolute h-full w-full z-10 flex flex-col items-center justify-center">
          <span className="text-5xl">DeBelloPhoto</span>
          <h1 className="text-xl">Creative Photography Studio in Texas</h1>

          <a
            href="#contact-us"
            className="bg-gray-950 hover:bg-black text-white px-4 py-2 rounded mt-3"
          >
            Contact us
          </a>
        </div>

        <img
          className="w-full h-full object-cover opacity-40 lg:opacity-60"
          src="/img/jumbotron-2.webp"
          alt="Jumbotron"
          title="Jumbotron"
          draggable={false}
        />
      </div>

      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Contact />
      <AboutUs />

      <Footer />
    </>
  );
}

export default App;
