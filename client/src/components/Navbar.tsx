import { IoMenuOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { Searchbox } from "./Searchbox";

export const Navbar = () => {
  const Logo = "/svgs/digitalist_logo.svg";

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Digitalist Logo" />
      </div>
      <div className="icons">
        <Searchbox />
        <button>
          <IoMenuOutline />
        </button>
      </div>
    </nav>
  );
};
