import Footer from "../../../../components/Footer";
import Skills from "../../../../components/Skills";
import { projectData } from "@/staticApi/Projects";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden relative p-6 pt-20">
      {/* Header */}
      <div className="bg-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-7xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-300 text-lg">
            Explore my latest work and technical expertise
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-slate-700 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-amber-500 transition-shadow duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-40 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                {/* <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                  View Project
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Skills />

      {/* Footer */}
      <Footer />
    </div>
  );
}
