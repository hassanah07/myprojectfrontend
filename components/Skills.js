import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skills" className="relative py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            Skills & Tools
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Node.js",
              "UI/UX Design",
              "Figma",
              "Next.js",
              "MongoDB",
            ].map((skill, idx) => (
              <div
                key={idx}
                className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg text-center hover:bg-yellow-600/40 hover:shadow-2xl hover:shadow-amber-400 hover:border-yellow-500 transition animate-slideUp"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
