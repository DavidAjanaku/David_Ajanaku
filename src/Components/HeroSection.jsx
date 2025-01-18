import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Code2, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-20">
        {[...Array(64)].map((_, i) => (
          <div
            key={i}
            className="border-t border-l border-gray-700 animate-pulse"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen py-20">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text animate-pulse">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <span className="font-mono text-lg">David Ajanaku</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold space-y-2">
              <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text animate-gradient">
                Software Developer
              </span>
              {/* <span className="block text-gray-300">&</span> */}
              {/* <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-gradient">
                Technical Writer
              </span> */}
            </h1>

            <p className="text-gray-400 text-lg max-w-md">
            Frontend Developer from Lagos, Nigeria. Transforming ideas into immersive digital experiences. Specializing in React, Next.js, and mobile development            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <Link
                to="http://www.linkedin.com/in/ajanaku-david-45375424b"
                target="_blank"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all hover:scale-110"
              >
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </Link>
              <Link
                to="https://github.com/DavidAjanaku"
                target="_blank"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all hover:scale-110"
              >
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right content - Tech Stack */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-mono mb-6 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-blue-400" />
                  Tech Stack
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {['html', 'css', 'js', 'ts', 'react', 'next', 'appwrite', 'firebase', 'flutter', 'nodejs', 'xd'].map((tech) => (
                    <div
                      key={tech}
                      className="group relative bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all hover:-translate-y-1"
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tech}`}
                        alt={tech}
                        className="w-full h-auto filter group-hover:brightness-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;