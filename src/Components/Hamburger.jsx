import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Rocket, Stars, Zap, Code, Send, Terminal } from 'lucide-react';

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  
  const menuItems = [
    { name: 'Home', icon: Stars, description: "Launch into David's Digital Universe" },
    { name: 'About', icon: Terminal, description: "Decode the Developer's Story" },
    { name: 'Article', icon: Code, description: "Explore Tech Chronicles" },
    { name: 'Projects', icon: Zap, description: "Witness Digital Innovations" },
    { name: 'Contact', icon: Send, description: "Establish Neural Link" }
  ];

  return (
    <div className="md:hidden">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isOpen ? 'bg-black' : 'bg-gray-900/80 backdrop-blur-lg'
      }`}>
        <div className="flex items-center justify-between p-4">
          <div 
            onClick={() => {
              scroll.scrollToTop();
              setOpen(false);
            }}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <Rocket 
              className={`h-6 w-6 text-purple-500 transform transition-transform duration-300 ${
                isOpen ? 'rotate-45' : 'group-hover:translate-y-[-2px]'
              }`}
            />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
              David.dev
            </h3>
          </div>
          
          <button
            onClick={() => setOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col items-center justify-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-purple-500 transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-blue-500 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-cyan-500 transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </button>
        </div>

        <div className={`absolute top-full left-0 right-0 bg-black/95 border-t border-purple-500/20 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <ul className="py-4 px-6 space-y-6">
            {menuItems.map((item, index) => (
              <li key={item.name}>
                <ScrollLink
                  to={`${item.name.toLowerCase()}-section`}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="group block"
                >
                  <div className="flex items-center space-x-4 p-2 rounded-lg transition-colors duration-300 hover:bg-purple-500/10">
                    <div className="relative">
                      <item.icon className="h-5 w-5 text-purple-500 group-hover:text-blue-400 transition-colors duration-300" />
                      <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <div className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </ScrollLink>
              </li>
            ))}
          </ul>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default Hamburger;