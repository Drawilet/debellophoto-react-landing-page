export default () => (
  <footer className="bg-black text-white py-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl  mb-4">Contact Us</h3>
          <p>
            <i className="fa-solid fa-envelope mr-2"></i>{" "}
            contact@debellophoto.com
          </p>
          <p>
            <i className="fa-solid fa-phone mr-2"></i> (123) 456-7890
          </p>
          <p>
            <i className="fa-solid fa-location-dot mr-2"></i> 123 Main Street,
            Texas, US
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl  mb-4">Quick Links</h3>
          <ul>
            <li className="text-center">
              <a href="#why-choose-us">Why Choose Us</a>
            </li>
            <li className="text-center">
              <a href="#services">Services</a>
            </li>
            <li className="text-center">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="text-center">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="text-center">
              <a href="#contact-us">Contact us</a>
            </li>
            <li className="text-center">
              <a href="#about-us">About Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl  mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-8">
      <p>
        &copy; {new Date().getFullYear()} DeBelloPhoto. All rights reserved.
      </p>
    </div>
  </footer>
);
