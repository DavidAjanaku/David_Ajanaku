import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const menuItems = [
    { name: 'Home', sectionId: 'home-section' },
    { name: 'About', sectionId: 'about-section' },
    { name: 'Article', sectionId: 'article-section' },
    { name: 'Projects', sectionId: 'projects-section' },
    { name: 'Contact', sectionId: 'contact-section' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hidden md:block">
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <h3
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text cursor-pointer hover:scale-105 transition-transform"
            >
              David.dev
            </h3>
            
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.sectionId}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    activeClass="text-white"
                    className="text-gray-400 hover:text-white transition-colors relative group cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;