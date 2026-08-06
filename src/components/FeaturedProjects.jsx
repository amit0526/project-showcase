import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-32">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-4xl font-bold">Featured Projects</h2>

        <Link
          to="/projects"
          className="text-indigo-600 font-semibold hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
