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
            <div className={`hidden sm:flex gap-x-3 font-medium`}>
              {links.map((link) => {
                const { id, href, text } = link;
                return (
                  <a
                    key={id}
                    href={href}
                    className="capitalize text-lg tracking-wide hover:text-cyan-600 duration-300"
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
                <div className="absolute top-16 left-0 right-0 bg-cyan-200 py-4 px-2 sm:hidden">
                  <div className=" items-center flex flex-col gap-y-2 font-medium">
                    {links.map((link) => {
                      const { id, href, text } = link;
                      return (
                        <a
                          key={id}
                          href={href}
                          className="capitalize text-lg tracking-wide hover:text-cyan-600 duration-300"
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
