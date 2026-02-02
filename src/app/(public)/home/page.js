"use client";
import { useState } from "react";
import Hero from "../../../../components/Hero";
import Project from "../../../../components/Project";
import Skills from "../../../../components/Skills";
import Footer from "../../../../components/Footer";
import AnimatedBg from "../../../../components/AnimatedBg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden relative">
      <AnimatedBg />

      {/* Navigation */}

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Project />

      {/* Skills Section */}
      <Skills />

      {/* Footer */}
      <Footer />
    </div>
  );
}
