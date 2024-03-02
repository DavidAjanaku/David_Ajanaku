import React from "react";

export default function AboutMe() {
  return (
    <div id="about-me-section">
    <div className='bg-slate-100'>
        <div className="flex justify-center my-28 p-4 md:w-3/4 md:mx-auto">
          <div className="about-content md:grid md:grid-cols-1 gap-10 lg:grid-cols-2 justify-center">
            <div className="img-slide">
              <img
                src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="text-slide py-5">
    <h3 className="text-green-500 font-bold text-lg md:text-xl uppercase mb-2">
        About Me
    </h3>
    <h4 className="font-bold text-2xl md:text-2xl my-4">
        A Dedicated Software Developer and Technical Writer <br /> Based in Lagos, Nigeria 📍
    </h4>
    <p className="text-slate-500">
        As an Experienced Front-End Developer and Technical Writer, I bring a wealth of expertise to the table, akin to a seasoned Software Developer. My journey has spanned the creation, development, and maintenance of immersive web experiences, culminating in a diverse and promising skill set. Proficient across various platforms, languages, and cutting-edge development tools, I specialize in crafting exceptional digital solutions. My ability to effectively self-manage during independent projects is complemented by my aptitude for collaborative teamwork. Notable achievements include conquering the complexities of Appwrite technology for MamaPut Hub, highlighting my adaptability and problem-solving prowess. With a track record of delivering outstanding results, I am well-prepared to contribute effectively to your team.
    </p>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
