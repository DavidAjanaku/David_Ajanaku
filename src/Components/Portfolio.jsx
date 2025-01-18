import React, { useState } from 'react';
import { Sparkles, ExternalLink, Rocket, Star, Code, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import MamaPutHub from "../assets/mamaputhub.png";
import Foxwrld from "../assets/photo2.png";
import Shortlet from "../assets/photo3.png";
import CosubImage from "../assets/CosubImage.png";
import SupernarImage from "../assets/supernar.png";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Shortlet",
      date: "April 2024",
      emoji: "🏠",
      image: Shortlet,
      description: "Engineered a feature-rich vacation rental platform using React, Redux, and Tailwind CSS. Integrated Google Maps API for location services, and implemented a robust booking system with interactive calendars.",
      stack: ["React", "Redux", "Tailwind CSS", "Google Maps API", "Vite"],
      link: "https://shbro.onrender.com/",
      story: "Chapter 1: The Home Seeker's Paradise"
    },
    {
      title: "Cosub",
      date: "Sept 2024",
      emoji: "🎬",
      image: CosubImage,
      description: "Created a Flutter-based mobile app for subscription sharing, offering personalized dashboards and transparent wallet management.",
      stack: ["Flutter", "Dart"],
      link: "https://cosub.app/",
      story: "Chapter 2: Streaming Dreams"
    },
    {
      title: "MamaPutHub",
      date: "August 2023",
      emoji: "🍱",
      image: MamaPutHub,
      description: "The app allows users to create, share, and save recipes",
      stack: ["React", "Tailwind CSS", "Appwrite"],
      link: "https://mama-put-hub-phi.vercel.app",
      story: "Chapter 3: The Culinary Chronicle"
    },
    {
      title: "Shop Supernar",
      date: "2024",
      emoji: "💪",
      image: SupernarImage,
      description: "Developed a WordPress-based e-commerce platform for Supernar, showcasing top-tier fitness wear and accessories. The site features a curated selection of products designed to enhance performance and style.",
      stack: ["WordPress", "WooCommerce", "PHP"],
      link: "https://shop.supernar.com/",
      story: "Chapter 4: The Fitness Frontier"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden min-h-screen">
      {/* Animated cosmic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(98,0,255,0.1),transparent_50%)]" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: `rgba(${Math.random() * 155 + 100}, ${Math.random() * 100}, 255, ${Math.random() * 0.5 + 0.1})`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Comic-style header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl animate-pulse" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-8 py-4 rounded-2xl">
              <div className="flex items-center justify-center space-x-3">
                <Sparkles className="text-purple-500 animate-spin-slow" size={24} />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  My Digital Adventures
                </h1>
              </div>
              <p className="text-gray-400 mt-2 font-mono">A Journey Through Code and Creation</p>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Timeline connector */}
              {index < projects.length - 1 && (
                <div className="absolute left-1/2 top-full h-16 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
              )}

              <div className={`relative bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] ${
                hoveredProject === index ? 'shadow-xl shadow-purple-500/20' : ''
              }`}>
                {/* Comic panel header */}
                <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-bold text-white">{project.story}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Image section */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] object-cover rounded-xl transform transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Tech stack floating badges */}
                    <div className="absolute -bottom-4 left-4 flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gray-900/90 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30
                            transform transition-all duration-300 hover:scale-105 hover:bg-purple-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-3xl font-bold text-white flex items-center">
                        {project.title}
                        <span className="text-4xl ml-2 animate-bounce">{project.emoji}</span>
                      </h2>
                      <span className="text-purple-400 font-mono">{project.date}</span>
                    </div>

                    <p className="text-gray-400 leading-relaxed">{project.description}</p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500
                        text-white font-medium rounded-xl transition-all duration-300
                        hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      Explore Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;