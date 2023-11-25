import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setOpen(false);
  };

  return (
    <div className="flex items-center md:hidden bg-white p-4 py-6 justify-between fixed top-0 left-0 right-0 z-10">
      <h3 className="logo font-bold text-2xl text-slate-600" onClick={scrollToTop}>
        David.dev
      </h3>

      {/* Hamburger menu */}
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={handleClick}
        width={30}
        height={20}
        strokeWidth={2}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />

      {/* Menu items */}
      <div className={`absolute top-20 left-0 right-0 bg-white p-4 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center">
          <li className="mb-2">
            <ScrollLink
              to="hero-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li className="mb-2">
            <ScrollLink
              to="about-me-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setOpen(false)}
            >
              About
            </ScrollLink>
          </li>
          <li className="mb-2">
            <ScrollLink
              to="portfolio-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="mb-2">
            <ScrollLink
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Contact
            </ScrollLink>
          </li>

          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
