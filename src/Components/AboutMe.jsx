import React from "react";

export default function AboutMe() {
  return (
    <section id="about-me-section" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white text-4xl font-bold p-4 rounded-lg shadow-lg">
                📍
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-green-600 font-bold text-lg md:text-xl uppercase mb-3">
              About Me
            </h3>
            <h4 className="font-bold text-3xl md:text-4xl text-gray-800 leading-tight mb-6">
              A Passionate Software Developer and Technical Writer
              <br />
              <span className="text-green-600">Based in Lagos, Nigeria</span>
            </h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              I am a versatile Software Developer with a keen eye for creating immersive digital experiences and a knack for translating complex technical concepts into engaging and informative content. My work spans the development of dynamic web applications, mobile apps, and e-commerce platforms.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              My portfolio highlights include building a feature-rich vacation rental platform, Shortlet, integrating advanced features like Google Maps API for location services. I also crafted the Cosub mobile app, enabling seamless subscription sharing, and developed the Foxwrld e-commerce site, enhancing user interactivity.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I specialize in utilizing modern frameworks such as React, Redux, and Flutter, combined with a strong foundation in backend technologies. My work on the Supernar e-commerce platform showcases my ability to deliver polished and performance-optimized solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                <span className="text-3xl mr-3">💻</span>
                <div>
                  <h5 className="font-semibold text-gray-800">Full-Stack Development</h5>
                  <p className="text-sm text-gray-600">Building robust and scalable applications</p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                <span className="text-3xl mr-3">✍️</span>
                <div>
                  <h5 className="font-semibold text-gray-800">Technical Writing</h5>
                  <p className="text-sm text-gray-600">Conveying complex ideas with clarity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
