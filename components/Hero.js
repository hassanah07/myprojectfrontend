import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative pt-32 px-4 text-center animate-fadeIn">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold animate-slideDown">
            Creative{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Developer
            </span>{" "}
            & Designer
          </h2>
          <p className="text-xl text-gray-300 animate-slideUp">
            Building beautiful, responsive, and performant web experiences
          </p>
          <div className="flex gap-4 justify-center animate-slideUp animation-delay-200">
            <Link href="/project" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition transform hover:scale-105">
              View My Work
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-purple-600 hover:bg-purple-600/10 rounded-lg font-semibold transition">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
