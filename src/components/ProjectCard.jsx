import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
        />

        {project.status && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            {project.status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-2xl font-bold group-hover:text-indigo-600 transition">
          {project.title}
        </h2>

        <p className="text-gray-600 mt-3">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
          >
            GitHub
          </a>

          <Link
            to={`/projects/${project.id}`}
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-lg transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
