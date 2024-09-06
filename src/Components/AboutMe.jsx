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
              A Dedicated Software Developer and Technical Writer
              <br />
              <span className="text-green-600">Based in Lagos, Nigeria</span>
            </h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              As an Experienced Front-End Developer and Technical Writer, I bring a wealth of expertise to the table, akin to a seasoned Software Developer. My journey has spanned the creation, development, and maintenance of immersive web experiences, culminating in a diverse and promising skill set.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Proficient across various platforms, languages, and cutting-edge development tools, I specialize in crafting exceptional digital solutions. My ability to effectively self-manage during independent projects is complemented by my aptitude for collaborative teamwork.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Notable achievements include conquering the complexities of Appwrite technology for MamaPut Hub, highlighting my adaptability and problem-solving prowess. With a track record of delivering outstanding results, I am well-prepared to contribute effectively to your team.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                <span className="text-3xl mr-3">💻</span>
                <div>
                  <h5 className="font-semibold text-gray-800">Front-End Development</h5>
                  <p className="text-sm text-gray-600">Creating immersive web experiences</p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                <span className="text-3xl mr-3">✍️</span>
                <div>
                  <h5 className="font-semibold text-gray-800">Technical Writing</h5>
                  <p className="text-sm text-gray-600">Documenting complex processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}