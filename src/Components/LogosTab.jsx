import React from "react";
import { logoTab } from "../constant";
const LogosTab = () => {
  return (
    <ul className="flex items-center justify-evenly mt-[76px] max-sm: gap-[28px] mb-[96px] max-sm:mb-[52px]">
      {logoTab.map((logo) => (
        <li key={logo.logo}>
          <img src={logo.logo} alt="logo" />
        </li>
      ))}
    </ul>
  );
};

export default LogosTab;

// logo section
