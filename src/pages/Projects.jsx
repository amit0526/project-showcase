import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">My Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
