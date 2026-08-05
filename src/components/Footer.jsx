import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo */}

          <div>
            <h2 className="text-2xl font-bold text-indigo-600">
              Project Showcase
            </h2>

            <p className="mt-4 text-gray-600">
              A collection of my best web development projects built with HTML,
              CSS, JavaScript, React and Backend technologies.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="font-bold mb-4">Connect</h3>

            <div className="flex flex-col gap-3">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Email</a>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <p className="text-center text-gray-500">
          © 2026 Project Showcase. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
