import { links } from '../data';
import { useState } from 'react';
import { BsList, BsXLg } from 'react-icons/bs';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-cyan-100">
      <div className="align-element py-4 sm:py-5">
        <div className="container mx-auto flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            My<span className="text-cyan-500">Portfolio</span>
          </h2>
          <div className="flex gap-x-3 font-medium">
            {/* Desktop navigation for larger screens */}
            <div className={`hidden sm:flex gap-x-7`}>
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <a
                    key={id}
                    href={href}
                    className="capitalize font-bold text-lg tracking-wide transition transform hover:scale-110  hover:text-cyan-400 duration-300 "
                  >
                    {text}
                  </a>
                );
              })}
            </div>
            {/* Drawer button and menu for small screens */}
            <div className="sm:hidden ">
              <button
                onClick={toggleDrawer}
                className="focus:outline-none pr-2 mt-2 text-3xl"
              >
                {isDrawerOpen ? <BsXLg /> : <BsList />}
              </button>
              {isDrawerOpen && (
                <div className="absolute top-20 left-7 right-7 bg-cyan-200 py-16  border-4 border-cyan-300 rounded-lg">
                  <div className=" items-center flex flex-col gap-20 mb-2">
                    {links.map((link) => {
                      const { id, href, text } = link;
                      return (
                        <a
                          key={id}
                          href={href}
                          className="underline decoration-cyan-500 underline-offset-4 capitalize text-xl font-bold"
                          onClick={toggleDrawer}
                        >
                          {text}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
