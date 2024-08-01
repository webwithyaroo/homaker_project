import { MaxWidth, Button } from "./constant";
import { navLinks } from "../constant";
import { searchIcon, buyIcon, menu } from "../constant";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "../contest/AppContext";

const Nav = () => {
  // Toggle Nav
  const [opened, setOpened] = useState(false);
  const navRef = useRef(null);

  function handleClick() {
    setOpened((open) => !open);
  }

  const handleClickOutside = (event) => {
    if (!navRef.current?.contains(event.target)) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { handleLoginShow } = useContext(AppContext);

  return (
    <div className="bg-white relative z-50">
      <MaxWidth>
        <nav className="custom-nav-menu">
          <div className="flex-custom gap-20">
            <Button
              IconUrl={menu}
              className={
                "hidden max-[1040px]:block fixed z-10 p-3 rounded-full bg-accent shadow-2xl"
              }
              onClick={handleClick}
            />
            <h1 className="font-xl_bold text-xl flex-custom max-md:hidden max-[1040px]:ml-[80px]">
              Homaker.
            </h1>
            <NavList
              className={
                opened ? "custom-nav shadow-2xl" : "max-[1040px]:hidden"
              }
              ref={navRef}
            />
          </div>
          <div className="flex-custom">
            <div className="flex-custom gap-6 max-sm:gap-2 border-r-2 border-accent max-sm:border-transparent pr-10 max-sm:pr-2">
              <Button IconUrl={searchIcon} />
              <Button IconUrl={buyIcon} />
            </div>
            <div className="flex-custom pl-10 max-sm:pl-2 gap-4">
              <Button label={"Sign Up"} className={"max-sm:hidden"} />
              <Button
                label={"Login"}
                className={
                  "px-[43px] max-sm:px-6 py-2 bg-accent text-white rounded-md"
                }
                onClick={handleLoginShow}
              />
            </div>
          </div>
        </nav>
      </MaxWidth>
    </div>
  );
};

export default Nav;

// NavList component
const NavList = React.forwardRef(({ className }, ref) => (
  <ul ref={ref} className={twMerge("flex gap-10", className)}>
    {navLinks.map((link, index) => (
      <li key={index}>
        <Link to={link.href}>{link.label}</Link>
      </li>
    ))}
  </ul>
));
