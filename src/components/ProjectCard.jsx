import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-2xl font-bold">{project.title}</h2>

        <p className="text-gray-600 mt-3">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            GitHub
          </a>

          <Link
            to={`/projects/${project.id}`}
            className="border px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
