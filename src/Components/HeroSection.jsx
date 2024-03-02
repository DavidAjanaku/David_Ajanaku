import React from "react";
import handsImage from "../assets/hello.png";
import myPhoto from "../assets/photo.jpg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    
    <div className="" id="hero-section">
      <div>
        <div className="flex flex-col h-[100vh] md:h-[50vh] justify-center p-4 md:w-3/4  md:mx-auto ">
          <div className="hero-main w-full md:pt-40 pb-0 flex md:flex-row flex-col-reverse items-center justify-between">
            <div className="hero-text md:w-2/5">
            <h1 className="text-4xl md:text-7xl font-bold mt-5 md:text-left text-center text-black">
              Software Developer & Technical Writer{" "}
              <span className="flex justify-center md:justify-start">
                <img src={handsImage} className="w-10 md:w-14 animated-hand" alt="Animated Hand" />
              </span>
            </h1>
            <p className="font-medium text-slate-500 my-4">
              Hello! I'm David Ajanaku, a dedicated Software Developer and Technical Writer based in Lagos, Nigeria. 📍
            </p>
              <span className="flex justify-center md:justify-start">
                <Link to="http://www.linkedin.com/in/ajanaku-david-45375424b" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </Link>
                <Link to="https://github.com/DavidAjanaku" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
              </span>
            </div>
            <div className="hero-img  md:w-2/5">
              <img src={myPhoto} alt="" className="animated-image" />
            </div>
          </div>
          <div className="hero-skills  items-center space-y-3 my-20 pb-10">
            <p className="text-base font-bold">Tech Stack</p>
            <div className="logos">
              <ul className="flex  items-center space-x-3">
                <li>
                  <img src="https://skillicons.dev/icons?i=html,css" alt="" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=js,ts" alt="" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=react,next" alt="" />

                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=appwrite,firebase" alt="" />

                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=flutter" alt="" />

                </li>
                <li>
            <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js Icon" />
        </li>

        <li>
            <img src="https://skillicons.dev/icons?i=xd" alt="Node.js Icon" />
        </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
