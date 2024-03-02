import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="hidden md:block">
      <nav className="flex items-center justify-between p-8 shadow-lg fixed bg-white z-10 left-0 right-0 top-0">
        <h3 className="logo font-bold text-2xl text-slate-600" onClick={scrollToTop}>
          David.dev
        </h3>
        <ul className="space-x-5 flex items-center text-slate-600">
          <li className="cursor-pointer">
            <ScrollLink
              to="hero-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="about-me-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="article-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Article
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="portfolio-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="cursor-pointer">
            <ScrollLink
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
