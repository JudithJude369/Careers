import { NavLink } from "react-router-dom";
import { Logo } from "@/components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    // set both to true
    setToggleMenu((prev) => !prev);
    setOpenMenu(!openMenu);
  };

  const handleOpenMenu = () => {
    // set both to false
    setToggleMenu((prev) => !prev);
    setOpenMenu(!open);
  };

  return (
    <main className=" bg-gray-900 backdrop-blur-md w-full fixed top-0 left-0 z-50 shadow-lg">
      {/* mobile menu */}
      <section className="lg:hidden relative">
        <div className="flex justify-between items-center p-12">
          <Logo />
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            className="bg-blue-700 text-gray-100 max-w-[3.5rem] w-full grid place-content-center text-[3rem] cursor-pointer shadow-lg"
          />
        </div>
        {toggleMenu && (
          <div
            onClick={handleOpenMenu}
            className="bg-gray-100 grid grid-cols-1 gap-1 capitalize p-8 items-center text-[1.3rem] text-gray-900 font-semibold shadow-2xl absolute top-[6rem] w-full z-50 transition-all"
          >
            <NavLink
              to="/"
              className="cursor-pointer hover:bg-blue-700 hover:text-gray-100 hover:rounded-sm hover:pl-2"
            >
              home
            </NavLink>
            <NavLink
              to="about"
              className="cursor-pointer hover:bg-blue-700 hover:text-gray-100 hover:rounded-sm hover:pl-2"
            >
              about us
            </NavLink>
            <NavLink
              to="jobs"
              className="cursor-pointer hover:bg-blue-700 hover:text-gray-100 hover:rounded-sm hover:pl-2"
            >
              jobs
            </NavLink>
            <NavLink
              to="contact"
              className="cursor-pointer hover:bg-blue-700 hover:text-gray-100 hover:rounded-sm hover:pl-2"
            >
              contact us
            </NavLink>
          </div>
        )}
      </section>
      {/* desktop menu */}
      <section className="hidden lg:flex text-gray-100  text-[1.3rem] capitalize  justify-between items-center  max-w-7xl py-8 mx-auto px-4 md:px-12">
        <Logo />
        <div className=" flex gap-4 items-center">
          <NavLink to="/" className="cursor-pointer hover:underline">
            home
          </NavLink>
          <NavLink to="about" className="cursor-pointer hover:underline">
            about us
          </NavLink>
          <NavLink to="jobs" className="cursor-pointer hover:underline">
            jobs
          </NavLink>
        </div>
        {/* Register and Login */}
        <div className=" flex gap-4 items-center">
          <NavLink to="contact" className="cursor-pointer hover:underline">
            contact us
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
