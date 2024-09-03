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

  const { handleLoginShow, cart, selectedProduct } = useContext(AppContext);
  const itemInCart = cart.find((item) => item.id === selectedProduct.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="bg-white fixed h-[70px] z-50 w-full shadow-sm">
      <MaxWidth>
        <nav className="custom-nav-menu fixed top-0 left-[1rem] right-[1rem]">
          <div className="flex-custom gap-20">
            <Button
              IconUrl={menu}
              className={
                "hidden max-[1040px]:block fixed left-5 z-10 p-3 rounded-full bg-accent shadow-2xl"
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
            <div className="flex-custom gap-6 max-sm:gap-2 border-r-2 border-accent max-sm:border-transparent pr-10 max-sm:pr-2 relative">
              <Link to={"/products"}>
                {" "}
                <Button
                  onClick={() =>
                    window.scrollTo({ top: 420, behavior: "smooth" })
                  }
                  IconUrl={searchIcon}
                  className={"max-[320px]:hidden max-sm:w-5"}
                />
              </Link>
              <Link to={"/Cart"} className="max-sm:w-5">
                <Button
                  IconUrl={buyIcon}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className={"relative"}
                >
                  <span className="w-4 h-4  p-3 flex-center rounded-full bg-green-400 text-white absolute top-4 -right-2 text-xs">
                    {quantity}
                  </span>
                </Button>
              </Link>
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
      <li
        key={index}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className=" hover:underline hover:underline-offset-4"
      >
        <Link to={link.href}>{link.label}</Link>
      </li>
    ))}
  </ul>
));
