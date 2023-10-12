const reasons = [
  {
    title: " Passion for Photography",
    description:
      "At DeBelloPhoto, photography is our passion. Every click of the shutter is a moment of creativity and dedication.",
    icon: "fa-solid fa-heart",
  },
  {
    title: "Years of Experience",
    description:
      "With years of experience in the industry, we've honed our skills to capture the essence of every moment.",
    icon: "fa-solid fa-star",
  },
  {
    title: "Tailored Photography",
    description:
      "We offer personalized photography solutions to match your unique style and vision for every photoshoot.",
    icon: "fa-solid fa-palette",
  },
];

export default () => (
  <section id="why-choose-us">
    <div className="container mx-auto py-10">
      <h3 className="text-3xl font-semibold text-center mb-6">
        Why Choose Us?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, i) => (
          <div
            className={`p-6 bg-white shadow-lg rounded-lg flex ${
              i % 2 == 0 ? "" : "flex-row-reverse"
            } lg:flex-row`}
          >
            <div className="grid items-center mr-4">
              <i className={`${reason.icon} text-4xl`}></i>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">{reason.title}</h4>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
