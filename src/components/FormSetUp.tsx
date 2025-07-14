
const FormSetUp = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br  flex items-center justify-center px-4">
      <form
        action="https://formspree.io/f/mqazqpyq"
        method="POST"
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl animate-fadeInUp border-4 border-green-300"
      >
        <h1 className="md:text-3xl text-lg font-bold text-center text-green-700 mb-2">Send Me a Message</h1>
        <p className="text-center text-gray-600 mb-8">
          Kindly reach out through the form below. I will get back to you shortly.
        </p>

        {/* Name */}
        <div className="mb-6">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300"
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300"
          />
        </div>

        {/* Message */}
        <div className="mb-8">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Drop a message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Type your message here..."
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-900 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all duration-300 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-900 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormSetUp;
