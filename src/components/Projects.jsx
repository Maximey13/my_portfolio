import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-darkNavyBlue text-softGray">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
        <h2 className="text-3xl font-bold underline-animate">
          Projects
        </h2>
        </div>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-300 text-darkNavyBlue rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col md:flex-row items-center gap-6">
              {/* Texte à gauche */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-700">{project.description}</p>
                {project.details && (
                  <p className="mt-1 text-xs text-gray-500 italic">
                    {project.details}
                  </p>
                )}
                <p className="mt-2 text-sm text-gray-500">
                  {project.tech.join(" · ")}
                </p>
                <div className="mt-4 flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:underline">
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-vibrantOrange hover:underline">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              {project.picture && (
                <div className="bg-slate-300 rounded-lg shadow-md p-2 flex items-center justify-center">
                  <img
                    src={project.picture}
                    alt={project.title}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
