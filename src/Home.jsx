import React from 'react';
import Header from './Header';
import HeroSection from './Components/HeroSection';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Hamburger from './Components/Hamburger';
import Articles from './Components/Article';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hamburger />
      
      <div id="home-section">
        <HeroSection />
      </div>
      
      <div id="about-section">
        <AboutMe />
      </div>
      
      <div id="projects-section">
        <Portfolio />
      </div>
      
      <div id="article-section">
        <Articles />
      </div>
      
      <div id="contact-section">
        <Footer />
      </div>
    </div>
  );
}