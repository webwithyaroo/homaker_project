import { MaxWidth, Button } from "./constant";
import { navLinks } from "../constant";
import { searchIcon, buyIcon, menu } from "../constant";
import { twMerge } from "tailwind-merge";

const Nav = () => {
  return (
    <MaxWidth>
      <nav className="flex-custom max-h-28 h-28 max-md:max-h-20 text-accent font-bolder">
        <div className="flex-custom gap-20">
          <Button IconUrl={menu} className={"hidden max-[1040px]:block"} />
          <h1 className="font-xl_bold text-xl flex-custom max-md:hidden">
            Homaker.
          </h1>
          <NavList className={"custom-nav"} />
        </div>
        <div className="flex-custom">
          <div className="flex-custom gap-6 border-r-2 border-accent pr-10 ">
            <Button IconUrl={searchIcon} />
            <Button IconUrl={buyIcon} />
          </div>
          <div className="flex-custom pl-10 gap-4">
            <Button label={"Sign Up"} className={"max-sm:hidden"} />
            <Button
              label={"Login"}
              className={"px-[43px] py-2 bg-accent text-white rounded-lg"}
            />
          </div>
        </div>
      </nav>
    </MaxWidth>
  );
};
export default Nav;

//button component

//nav lists
function NavList({ className }) {
  return (
    <ul className={twMerge("flex gap-10 ", className)}>
      {navLinks.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
