import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Logo } from "@/components";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header className="bg-gray-900 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-md">
      {/* === Desktop Navbar === */}
      <nav className="hidden lg:flex justify-between items-center max-w-7xl mx-auto py-6 px-8 text-gray-100 text-[1.2rem] capitalize">
        <Logo />
        <div className="flex gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            about us
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            jobs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-400" : ""
              }`
            }
          >
            contact us
          </NavLink>
        </div>
      </nav>

      {/* === Mobile Navbar === */}
      <section className="lg:hidden relative">
        <div className="flex justify-between items-center px-6 py-5">
          <Logo />
          <button
            onClick={handleToggleMenu}
            className="text-gray-100 text-3xl bg-blue-700 p-2 rounded-md shadow-md"
          >
            {toggleMenu ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {toggleMenu && (
          <div className="absolute top-full left-0 w-full bg-gray-100 text-gray-900 text-lg font-semibold shadow-lg transition-all duration-300">
            <nav className="flex flex-col gap-4 p-6 capitalize">
              <NavLink
                to="/"
                onClick={handleToggleMenu}
                className="hover:bg-blue-700 hover:text-gray-100 rounded-md px-3 py-2"
              >
                home
              </NavLink>
              <NavLink
                to="/about"
                onClick={handleToggleMenu}
                className="hover:bg-blue-700 hover:text-gray-100 rounded-md px-3 py-2"
              >
                about us
              </NavLink>
              <NavLink
                to="/jobs"
                onClick={handleToggleMenu}
                className="hover:bg-blue-700 hover:text-gray-100 rounded-md px-3 py-2"
              >
                jobs
              </NavLink>
              <NavLink
                to="/contact"
                onClick={handleToggleMenu}
                className="hover:bg-blue-700 hover:text-gray-100 rounded-md px-3 py-2"
              >
                contact us
              </NavLink>
            </nav>
          </div>
        )}
      </section>
    </header>
  );
};

export default Navbar;
