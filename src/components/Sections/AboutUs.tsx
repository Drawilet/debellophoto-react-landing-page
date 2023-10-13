const members = [
  {
    name: "John Smith",
    role: "Lead Photographer",
    avatar: "john-smith.webp",
  },
  {
    name: "Emily Johnson",
    role: "Photography Assistant",
    avatar: "emily-johnson.webp",
  },
];

export default () => (
  <section className="my-4" id="about-us">
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
      <div className="grid grid-cols-1 items-center gap-6">
        {/* About Text */}
        <div className="lg:w-2/4 lg:mx-auto">
          <p className="text-gray-700 mb-4">
            Welcome to DeBelloPhoto, your premier photography studio. We are
            dedicated to capturing beautiful moments and turning them into
            lasting memories. With a team of talented photographers, we provide
            a wide range of photography services for all your special moments.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to deliver high-quality photos that showcase the
            essence of every event, whether it's a wedding, a family gathering,
            a portrait session, or any other occasion. We take pride in our
            ability to capture the emotions, stories, and beauty of each moment
            through our lens.
          </p>
        </div>
        {/* Team Members */}
        <div className="lg:w-2/4 lg:mx-auto">
          <h3 className="text-xl font-semibold mb-4">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {members.map((member) => (
              <div key={member.name} className="bg-gray-50 p-4 rounded-lg">
                <img
                  src={`/img/team/${member.avatar}`}
                  alt={`${member.name} picture`}
                  title={`${member.name}`}
                  className="w-full h-48 object-cover rounded"
                  draggable={false}
                />
                <h4 className="text-lg font-semibold mt-2">{member.name}</h4>
                <p className="text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
