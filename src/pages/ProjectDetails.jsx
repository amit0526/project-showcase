import { useParams } from "react-router-dom";
import projects from "../data/projects";
import Navbar from "../components/Navbar";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <>
        <Navbar />
        <h1 className="text-center text-3xl mt-20">Project Not Found</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl"
        />

        <h1 className="text-5xl font-bold mt-8">{project.title}</h1>

        <p className="text-gray-600 mt-6 text-lg">{project.description}</p>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-10">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border px-6 py-3 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}
