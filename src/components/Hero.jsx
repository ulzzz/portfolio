import myPic from '../assets/me2.png';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import React, { useState } from 'react';

const Hero = () => {
  const [resumePath, setResumePath] = useState(
    '/EmilioLuis_Tarnate_RESUME.pdf',
  );

  const handleDownloadResume = () => {
    const a = document.createElement('a');
    a.href = resumePath;
    a.download = 'EmilioLuis_Tarnate_RESUME.pdf';
    a.click();
  };

  return (
    <div className="bg-cyan-100 py-8 md:py-32">
      <div className="align-element grid items-center gap-8  md:grid-cols-2">
        <div className="mx-auto bg-gradient-to-b from-cyan-500 mt-5  rounded-full overflow-hidden text-center ">
          <img src={myPic} alt="Emilio Luis Tarnate" className="" />
        </div>
        <article>
          <h1 className="text-6xl font-bold tracking-wider">
            Emilio Luis Tarnate
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 tracking-wide">
            I'm on an exciting journey of learning and upskilling in web
            development, with a primary focus on mastering the MERN (MongoDB,
            Express, React, Node.js) stack. However, my curiosity extends to
            various other technologies in the web development realm.
          </p>
          <div className="flex gap-x-4 mt-4 ">
            <a href="https://github.com/ulzzz">
              <FaGithubSquare className="h-8 w-8 text-cyan-700 hover:text-black duration-300  " />
            </a>
            <a href="https://www.linkedin.com/in/emilioluistarnate/">
              <FaLinkedin className="h-8 w-8 text-cyan-700 hover:text-black duration-300" />
            </a>
            <a href="https://www.facebook.com/uls333/">
              <FaFacebookSquare className="h-8 w-8 text-cyan-700 hover:text-black duration-300" />
            </a>
          </div>
          <div className="flex gap-x-4 mt-5">
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 border duration-300 rounded"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Hero;
