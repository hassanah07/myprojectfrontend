/**
 * About page component displaying developer profile, skills, and experience
 *
 * @component
 * @returns {JSX.Element} A full-screen about page with animated sections including:
 * - Profile photo (circular, glowing cyan border with scale animation)
 * - Header with gradient title and subtitle
 * - Technical skills section (Frontend, Backend, Design categories)
 * - Experience section with job history timeline
 * - About me biographical section
 *
 * @note The profile photo is duplicated in the code at the top (appears twice before the export statement).
 *       Photo file location: `/public/profile.jpg` (referenced as src="/profile.jpg")
 *       The photo elements are NOT currently rendered within the return statement,
 *       they exist outside the component's JSX structure.
 *
 * @uses framer-motion for animations and transitions
 * @uses Tailwind CSS for styling
 */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../../../../components/Footer";
import Skills from "../../../../components/Skills";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Profile Photo */}
      <div className="flex justify-center mb-12 pt-12">
        <motion.div
          className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/PHOTO.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            width={300}
            height={300}
          />
        </motion.div>
      </div>

      {/* Header */}
      <motion.div
        className="relative overflow-hidden pt-20 pb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4"
            variants={itemVariants}
          >
            Hi, This is Hassan,
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Web Designer & Developer crafting digital experiences
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Skills */}
        <motion.section
          className="mb-16 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-400/20"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Frontend", "Backend", "Design"].map((category, i) => (
              <motion.div
                key={i}
                className="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-semibold text-pink-400 mb-3">
                  {category}
                </h3>
                <ul className="text-gray-300 space-y-2">
                  {category === "Frontend" && (
                    <>
                      <li>• React, Next.js</li>
                      <li>• Tailwind CSS</li>
                      <li>• JavaScript/TypeScript</li>
                    </>
                  )}
                  {category === "Backend" && (
                    <>
                      <li>• Node.js, Express</li>
                      <li>• MongoDB, PostgreSQL</li>
                      <li>• RESTful APIs</li>
                    </>
                  )}
                  {category === "Design" && (
                    <>
                      <li>• UI/UX Design</li>
                      <li>• Responsive Design</li>
                      <li>• Figma, Adobe XD</li>
                    </>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          className="mb-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/20"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Senior Full-Stack Developer",
                company: "Tech Company",
                period: "2022 - Present",
              },
              {
                title: "Full-Stack Developer",
                company: "Digital Agency",
                period: "2020 - 2022",
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all"
                whileHover={{ x: 10 }}
              >
                <h3 className="text-xl font-semibold text-cyan-400">
                  {job.title}
                </h3>
                <p className="text-pink-400 mt-1">{job.company}</p>
                <p className="text-gray-400 text-sm mt-2">{job.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-2xl p-8 border border-pink-400/20"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-pink-400 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate about creating beautiful and functional web experiences.
            Specialized in modern web technologies with a keen eye for design.
            Always learning and staying updated with the latest trends in web
            development.
          </p>
        </motion.section>
      </motion.div>
      <Skills />
      <Footer />
    </div>
  );
}
