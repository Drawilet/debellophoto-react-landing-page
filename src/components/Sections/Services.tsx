const services = [
  {
    title: "Families",
    startingPrice: "150",
    description: ["30 min of coverage", "1 Location", "15 edited photos"],
    image: "family.jpg",
  },
  {
    title: "Newborns",
    startingPrice: "150",
    description: ["30-45 min of coverage", "15 edited photos"],
    image: "newborn.jpg",
  },
  {
    title: "Weddings",
    startingPrice: "1200",
    description: [
      "5 hours of coverage",
      "1 photographer",
      "Unlimited edited photos",
    ],
    image: "wedding.jpg",
  },
  {
    title: "Seniors",
    startingPrice: "250",
    description: [
      "1 hour of coverage",
      "1 Location",
      "Unlimited outfits",
      "35 edited photos",
    ],
    image: "senior.jpg",
  },
  {
    title: "Quinceañera",
    startingPrice: "300",
    description: [
      "1 hour of coverage",
      "In-studio and on Location",
      "35 edited photos",
    ],
    image: "quinceañera.jpg",
  },
  {
    title: "Headshots",
    startingPrice: "75",
    description: ["30 Min of coverage", "In-Studio", "1 Edited image"],
    image: "headshot.jpg",
  },
  {
    title: "Maternity",
    startingPrice: "150",
    description: ["30 Minutes", "1 Location", "15 edited photos"],
    image: "maternity.jpg",
  },
  {
    title: "Boudoir",
    startingPrice: "150",
    description: [
      "30 min",
      "In-studio",
      "1 outfit",
      "15 edited photos",
      "Password Protected Gallery",
    ],
    image: "boudoir.jpg",
  },
  {
    title: "Cake Smash",
    startingPrice: "250",
    description: [
      "30 Minutes",
      "1 Standard Set with Theme",
      "15 edited photos",
    ],
    image: "cake-smash.jpg",
  },
];

export default () => (
  <section className="my-4" id="services">
    <div className="container mx-auto py-10">
      <h3 className="text-3xl font-semibold text-center mb-6">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="py-12 p-6 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-lg relative"
            style={{
              backgroundImage: `url('/img/services/${service.image}')`,
            }}
          >
            <div className="bg-black bg-opacity-40 rounded-lg absolute inset-0"></div>

            <h4 className="text-2xl font-semibold text-white mb-2 relative z-10">
              {service.title}
            </h4>
            <p className="text-lg font-bold text-white mb-2 relative z-10">
              Starting at ${service.startingPrice}
            </p>
            <ul className="text-white relative z-10">
              {service.description.map((description, idx) => (
                <li key={idx}>{description}</li>
              ))}
            </ul>
            <button className="bg-gray-950 hover:bg-black text-white px-4 py-2 mt-4 rounded-lg relative z-10">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
