const services = [
  {
    title: "Families",
    startingPrice: "150",
    description: "30 min of coverage\n1 Location\n15 edited photos",
    image: "family.jpg",
  },
  {
    title: "Newborns",
    startingPrice: "150",
    description: "30-45 min of coverage\n15 edited photos",
    image: "newborn.jpg",
  },
  {
    title: "Weddings",
    startingPrice: "1200",
    description: "5 hours of coverage\n1 photographer\nUnlimited edited photos",
    image: "wedding.jpg",
  },
  {
    title: "Seniors",
    startingPrice: "250",
    description:
      "1 hour of coverage\n1 Location\nUnlimited outfits\n35 edited photos",
    image: "senior.jpg",
  },
  {
    title: "Quinceañera",
    startingPrice: "300",
    description:
      "1 hour of coverage\nIn-studio and on Location\n35 edited photos",
    image: "quinceañera.jpg",
  },
  {
    title: "Headshots",
    startingPrice: "75",
    description: "30 Min of coverage\nIn-Studio\n1 Edited image",
    image: "headshot.jpg",
  },
  {
    title: "Maternity",
    startingPrice: "150",
    description: "30 Minutes\n1 Location\n15 edited photos",
    image: "maternity.jpg",
  },
  {
    title: "Boudoir",
    startingPrice: "150",
    description:
      "30 min\nIn-studio\n1 outfit\n15 edited photos\nPassword Protected Gallery",
    image: "boudoir.jpg",
  },
  {
    title: "Cake Smash",
    startingPrice: "250",
    description: "30 Minutes\n1 Standard Set with Theme\n15 edited photos",
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
            <h4 className="text-2xl font-semibold text-white mb-2">
              {service.title}
            </h4>
            <p className="text-lg font-bold text-white mb-2">
              Starting at ${service.startingPrice}
            </p>
            <p className="text-white">{service.description}</p>
            <button className="bg-gray-950 hover:bg-black text-white px-4 py-2 mt-4 rounded-lg">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
