import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full">
          Contact
        </span>

        <h1 className="text-5xl font-bold mt-6">Let's Work Together</h1>

        <p className="text-gray-600 mt-5 max-w-2xl">
          Have a project idea or want to connect? Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-14">
          {/* Left Side */}

          <div className="space-y-6">
            <div className="border rounded-xl p-5">
              <h3 className="font-bold text-lg">📧 Email</h3>
              <p className="text-gray-600">youremail@gmail.com</p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-bold text-lg">💻 GitHub</h3>
              <p className="text-gray-600">github.com/yourusername</p>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-bold text-lg">💼 LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/yourname</p>
            </div>
          </div>

          {/* Right Side */}

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3"
            ></textarea>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
