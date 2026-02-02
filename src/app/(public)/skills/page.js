"use client";
import { languageData } from "@/staticApi/LanguageApi";
import { skillData } from "@/staticApi/SkillApi";
import { useState } from "react";
import Footer from "../../../../components/Footer";
import Skills from "../../../../components/Skills";

export default function SkillsPage() {
  const [expandedSkill, setExpandedSkill] = useState(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden relative p-6 pt-20">
      {/* Header */}
      <div className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold animate-slideDown bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical expertise and proficiencies
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((skill) => (
            <div
              key={skill.id}
              className="group cursor-pointer"
              onClick={() =>
                setExpandedSkill(expandedSkill === skill.id ? null : skill.id)
              }
            >
              <div className="bg-green-400 rounded shadow-lg hover:shadow-2xl hover:shadow-indigo-500 transition-all duration-300 p-6 hover:scale-105 transform">
                {/* Icon */}
                <div className="text-6xl mb-4 animate-pulse group-hover:animate-bounce">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {skill.name}
                </h2>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-600">
                      Proficiency
                    </span>
                    <span className="text-sm font-bold text-purple-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                {expandedSkill === skill.id && (
                  <p className="text-gray-600 text-sm animate-fadeIn">
                    {skill.description}
                  </p>
                )}

                {/* Click Hint */}
                <p className="text-xs text-gray-400 mt-3 group-hover:text-purple-400 transition-colors">
                  {expandedSkill === skill.id
                    ? "Click to collapse"
                    : "Click to expand"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Skill Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languageData.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-sm shadow-md p-6 hover:shadow-2xl hover:shadow-yellow-500 transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-gray-600 flex items-center gap-2"
                    >
                      <span className="text-purple-500">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Skills />
      <Footer />

      {/* Custom animation */}
      <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
    </div>
  );
}
