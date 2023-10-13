export default () => (
  <section className="my-4" id="contact-us">
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
      {/* Contact Form */}
      <div className="mb-4 lg:w-2/4 lg:mx-auto">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-950 hover:bg-black text-white px-8 py-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
      {/* Contact Information */}
      <div className="lg:w-2/4 lg:mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-700 mb-2">
            Address: 123 Main Street, Texas, US
          </p>
          <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-700 mb-2">Email: contact@debellophoto.com</p>
        </div>
      </div>
    </div>
  </section>
);
