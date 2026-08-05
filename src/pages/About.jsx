import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full">
          About Me
        </span>

        <h1 className="text-5xl font-bold mt-6">
          Passionate Frontend Developer
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl">
          I'm a web developer passionate about building clean, responsive and
          user-friendly websites using modern web technologies. I enjoy learning
          new skills and creating real-world projects that improve my
          development journey.
        </p>

        {/* Skills */}

        <h2 className="text-3xl font-bold mt-16 mb-8">Tech Stack</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git",
            "GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-indigo-100 text-indigo-700 px-5 py-3 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
