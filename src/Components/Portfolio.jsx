import React from "react";
import { Link } from "react-router-dom";
import MamaPutHub from "../assets/mamaput.png";
import Foxwrld from "../assets/photo2.png";
import Shortlet from "../assets/photo3.png";

export default function Portfolio() {
  return (
    <div className="bg-slate-100" id="portfolio-section">
      <div className="flex justify-center my-28 p-4 md:w-3/4 md:mx-auto">
        <div className="project-content">
          <div className="my-4">
            <h3 className="text-green-500 font-bold text-lg md:text-xl uppercase mb-2">
              portfolio
            </h3>
            <h4 className="font-bold text-2xl md:text-2xl my-4">
              Each project showcased here is a distinctive achievement in my
              portfolio, contributing to the diverse tapestry of my web
              development journey. 🧩{" "}
            </h4>
          </div>
          <div className="project-grid grid grid-cols-1 gap-7">
            <div className="about-content md:grid md:grid-cols-1 gap-10 shadow-lg bg-white p-7 lg:grid-cols-2 justify-center">
              <div className="pro-img">
                <img
                  src={MamaPutHub}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="pro-text">
                <h3 className="font-bold text-2xl text-gray-600">
                  MamaPut Hub <span className="">(May 2023)</span> 🥘
                </h3>
                <p className="my-5 text-slate-500">
                  At MamaPutHub in Nigeria, I served as a Software Developer
                  from April 2023 to May 2023. I led the development of a
                  food-sharing platform using React, Tailwind CSS, and Appwrite
                  for the backend, with GitHub and Vercel for version control
                  and deployment. My primary focus was to empower users by
                  enabling them to easily post and save food recipes. This
                  project showcased my proficiency in modern web technologies
                  and my commitment to creating a user-friendly platform for
                  culinary enthusiasts.
                </p>
                <div className="stack flex flex-wrap gap-3 my-2">
                  <p className="bg-white shadow-md px-4 py-2">React</p>
                  <p className="bg-white shadow-md px-4 py-2">Appwrite</p>

                  <p className="bg-white shadow-md px-4 py-2">Tailwind CSS</p>
                </div>
                <div className="links flex gap-5 my-5">
                  {/* <Link className="flex">
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  </Link> */}
                  <Link to="https://mama-put-hub.vercel.app/" target="_blank" className="flex">
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="about-content md:grid md:grid-cols-1 gap-10 shadow-lg bg-white p-7 lg:grid-cols-2 justify-center">
              <div className="pro-img">
                <img src={Foxwrld} alt="" 
                 className="w-full h-full object-cover rounded-md"/>
              </div>
              <div className="pro-text">
                <h3 className="font-bold text-2xl text-gray-600">
                  Foxwrld <span className="">(August 2023)</span> 👖
                </h3>
                <p className="my-5 text-slate-500">
                  At Foxwrld in Nigeria, I served as a Frontend Developer during
                  July 2023 to August 2023. I took charge of crafting an
                  immersive clothing e-commerce website utilizing React and
                  Tailwind. My role involved close collaboration with backend
                  developers to ensure seamless integration, resulting in
                  enhanced website interactivity. This project allowed me to
                  apply my expertise in frontend development to create a
                  visually appealing and user-friendly online shopping
                  experience, contributing to the success of the Foxwrld
                  clothing e-commerce platform.
                </p>
                <div className="stack flex gap-3 my-2">
                  <p className="bg-white shadow-md px-4 py-2">React</p>

                  <p className="bg-white shadow-md px-4 py-2">Tailwind CSS</p>
                </div>
                <div className="links flex gap-5 my-5">
                  {/* <Link className="flex">
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  </Link> */}
                  <Link to="https://foxwrld.com/" target="_blank" className="flex">
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="about-content md:grid md:grid-cols-1 gap-10 shadow-lg bg-white p-7 lg:grid-cols-2 justify-center">
              <div className="pro-img">
                <img src={Shortlet} alt=""
                             className="w-full h-full object-cover rounded-md"/>
              </div>
              <div className="pro-text">
                <h3 className="font-bold text-2xl text-gray-600">
                  Shortlet <span className="">(October 2023)</span> 👖
                </h3>
                <p className="my-5 text-slate-500">
                  As a Frontend Developer at Shortlet Bookings from October 2023
                  to November 2023, I contributed to the development of a
                  comprehensive vacation rental platform using React and
                  Tailwind. Shortlet Bookings offers a versatile array of
                  features, enabling hosts to effortlessly list and manage their
                  properties while providing guests with an intuitive booking
                  system. The platform supports user profiles, a secure
                  messaging system, and a robust review and rating system,
                  fostering trust and community engagement. With advanced search
                  capabilities, users can easily find short-term apartment
                  rentals tailored to their preferences, making Shortlet
                  Bookings a user-friendly and visually appealing destination
                  for individuals exploring vacation rental options.
                </p>

                <div className="stack flex gap-3 my-2">
                  <p className="bg-white shadow-md px-4 py-2">React</p>

                  <p className="bg-white shadow-md px-4 py-2">Tailwind CSS</p>
                </div>
                <div className="links flex gap-5 my-5">
                  {/* <Link className="flex">
                    Code{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                  </Link> */}
                  <Link to="https://shbro.onrender.com/" target="_blank" className="flex">
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-external-link"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
