import React from "react";
import { ExternalLink } from "lucide-react";
import { projectData } from "@/staticApi/Projects";

const Project = () => {
  return (
    <>
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 animate-slideDown">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projectData.map((project, idx) => (
              <div
                key={idx}
                className="group p-6 bg-slate-800/50 border border-purple-500/30 rounded-lg hover:border-yellow-500 transition-all hover:shadow-2xl hover:shadow-yellow-500 opacity-70  animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h4 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-400 hover:text-pink-600 transition"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
