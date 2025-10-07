import { NavLink } from "react-router-dom";
import Logo from "./Logo";
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
    <main>
      <section className="lg:hidden">
        <Logo />
        <div
          className="bg-orange-400 text-cyan-50 max-w-[2rem] w-full grid place-content-center text-[2rem]"
          onClick={handleToggleMenu}
        >
          <GiHamburgerMenu />
        </div>
        {toggleMenu && (
          <div onClick={handleOpenMenu}>
            <NavLink to="/">home</NavLink>
            <NavLink to="about">about us</NavLink>
            <NavLink to="jobs">jobs</NavLink>
            <NavLink to="login">login</NavLink>
            <NavLink to="register">sign up</NavLink>
          </div>
        )}
      </section>
    </main>
  );
};

export default Navbar;
