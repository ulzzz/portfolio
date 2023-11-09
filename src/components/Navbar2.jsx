import React, { useState } from 'react';
import { links } from '../data';
import { BsList, BsX, BsXLg } from 'react-icons/bs';

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-cyan-500 to-cyan-100 px-4">
      <div className="align-element flex flex-wrap items-center justify-between p-4">
        <h2 className="text-3xl font-bold text-slate-700">
          My<span className="text-cyan-100 ">Portfolio</span>
        </h2>
        <div className={`hidden md:flex gap-x-7`}>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-slate-800 font-bold text-lg tracking-wide  transform hover:scale-110  hover:text-cyan-700 duration-300 "
              >
                {text}
              </a>
            );
          })}
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden  inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-black-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full ${isMenuOpen ? '' : 'hidden'}`}
          id="navbar-hamburger"
        >
          <ul className="md:hidden items-center flex flex-col gap-3 pt-4">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="block capitalize text-slate-800 font-bold text-xl tracking-wide transform hover:scale-110  hover:text-cyan-700 duration-300  py-2"
                  onClick={toggleMenu}
                >
                  {text}
                </a>
              );
            })}
            <button
              type="button"
              onClick={toggleMenu}
              className=" pr-2 mt-2 text-2xl text-red-700"
            >
              {isMenuOpen && <BsXLg />}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
