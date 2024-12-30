import React from "react";
import { Link } from "react-router-dom";
import MamaPutHub from "../assets/mamaputhub.png";
import Foxwrld from "../assets/photo2.png";
import Shortlet from "../assets/photo3.png";
import CosubImage from "../assets/CosubImage.png";
import SupernarImage from "../assets/supernar.png"

export default function Portfolio() {
  const projects = [
    {
      title: "Shortlet",
      date: "April 2024",
      emoji: "🏠",
      image: Shortlet,
      description: "Engineered a feature-rich vacation rental platform using React, Redux, and Tailwind CSS. Integrated Google Maps API for location services, and implemented a robust booking system with interactive calendars.",
      stack: ["React", "Redux", "Tailwind CSS", "Google Maps API", "Vite"],
      link: "https://shbro.onrender.com/"
    },
    {
      title: "Cosub",
      date: "Sept 2024",
      emoji: "🎬",
      image: CosubImage,
      description: "Created a Flutter-based mobile app for subscription sharing, offering personalized dashboards and transparent wallet management.",
      stack: ["Flutter", "Dart"],
      link: "https://cosub.app/"
    },
    {
      title: "MamaPutHub",
      date: "August 2023",
      emoji: "🍱",
      image: MamaPutHub,
      description: "The app allows users to create, share, and save recipes",
      stack: ["React", "Tailwind CSS", "Appwrite"],
      link: "https://mama-put-hub-phi.vercel.app"
    },
    {
      title: "Shop Supernar",
      date: "2024", // You may want to update this with the actual date
      emoji: "💪",
      image: SupernarImage,
      description: "Developed a WordPress-based e-commerce platform for Supernar, showcasing top-tier fitness wear and accessories. The site features a curated selection of products designed to enhance performance and style.",
      stack: ["WordPress", "WooCommerce", "PHP"],
      link: "https://shop.supernar.com/"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20" id="portfolio-section">
      <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
          <h3 className="text-green-600 font-bold text-lg md:text-xl uppercase mb-3">
            Portfolio
          </h3>
          <h4 className="font-bold text-3xl md:text-4xl text-gray-800 leading-tight">
            Software Development Showcase 🧩
          </h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-800">
                    {project.title} <span className="text-2xl ml-1">{project.emoji}</span>
                  </h2>
                  <span className="text-sm text-green-600 font-semibold">{project.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  to={project.link} 
                  target="_blank" 
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  View Site
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}