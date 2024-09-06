import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20" id="contact-section">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-green-400 font-bold text-lg md:text-xl uppercase mb-3">
            Contact
          </h3>
          <h2 className="font-bold text-3xl md:text-4xl mb-6">
            Don't be shy! Hit me up! 👇
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="contact-card bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 transition-transform duration-300 hover:transform hover:scale-105">
            <div className="bg-green-500 rounded-full p-3">
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
                className="text-white"
              >
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M20.2 20.2l1.8 1.8"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Location</h3>
              <p className="text-gray-300">Lagos, Nigeria</p>
            </div>
          </div>

          <div className="contact-card bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 transition-transform duration-300 hover:transform hover:scale-105">
            <div className="bg-green-500 rounded-full p-3">
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
                className="text-white"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1">Mail</h3>
              <a 
                href="mailto:davidajanaku46163@gmail.com"
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                davidajanaku46163@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} David Ajanaku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}