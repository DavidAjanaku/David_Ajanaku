import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4  " id="contact-section">
      <div className="flex my-20 p-4 md:w-3/4 md:mx-auto">
        <div className="contact-content">
          <div className="contact-title">
            <h3 className="text-green-500 font-bold text-lg md:text-xl uppercase mb-2">
              Contact
            </h3>
            <h3 className="font-bold text-2xl md:text-2xl my-4">
              Don't be shy! Hit me up! 👇
            </h3>
          </div>
          <div className="contact-icons flex flex-wrap gap-10">
            <div className="contact__icon-box flex flex-wrap gap-3 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-map-search rounded-full shadow-2xl"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className="contact__info">
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div className="contact__icon-box flex flex-wrap gap-3 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="contact__info ">
                <h3>Mail</h3>
                <a href="mailto:davidajanaku46163@gmail.com">
                  davidajanaku46163@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
