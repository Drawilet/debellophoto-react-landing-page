const testimonials = [
  {
    name: "John Doe",
    role: "Client",
    content:
      "I had a fantastic experience with DeBelloPhoto. They captured every moment beautifully, and the photos exceeded my expectations.",
    photo: "john-doe.jpg", 
    rating: 5, 
  },
  {
    name: "Jane Smith",
    role: "Client",
    content:
      "DeBelloPhoto made our wedding day even more special with their amazing photography skills. We cherish the memories they've captured.",
    photo: "jane-smith.jpg", 
    rating: 4, 
  },
  {
    name: "Michael Johnson",
    role: "Client",
    content:
      "The team at DeBelloPhoto is incredibly talented. They made me feel comfortable during the photoshoot, and the results were stunning.",
    photo: "michael-johnson.jpg", 
    rating: 5, 
  },
];
export default () => {
  return (
    <section className="" id="testimonials">
      <div className="container mx-auto py-10">
        <h3 className="text-3xl font-semibold text-center mb-6">
          Testimonials
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              {/* Photo */}
              <div className="mb-4">
                <img
                  src={`/img/testimonials/profile/${testimonial.photo}`}
                  alt={testimonial.name}
                  className="w-16 h-16  rounded-full mx-auto"
                />
              </div>
              {/* Content */}
              <p className="text-gray-700">{testimonial.content}</p>
              {/* Rating Stars */}
              <div className="flex mt-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L10 13.347l-3.767 1.98a.75.75 0 0 1-1.088-.79l.72-4.192-3.046-2.97a.75.75 0 0 1 .416-1.28l4.21-.612L9.327 2.42A.75.75 0 0 1 10 2z"
                    />
                  </svg>
                ))}
              </div>
              <div className="mt-2">
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
