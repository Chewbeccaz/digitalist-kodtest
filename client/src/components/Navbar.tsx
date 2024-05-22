import { IoMenuOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { Searchbox } from "./Searchbox";

export const Navbar = () => {
  const Logo = "/svgs/digitalist_logo.svg";
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  // const toggleSearchBox = () => {
  //   setIsSearchOpen(!isSearchOpen);
  // };

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Digitalist Logo" />
      </div>
      <div className="icons">
        <Searchbox />

        {/* <div className="search-box">
          <button onClick={toggleSearchBox}>
            <IoMdSearch />
          </button>
        </div> */}
        <button>
          <IoMenuOutline />
        </button>
      </div>
      {/* {isSearchOpen && <Searchbox isOpen={isSearchOpen} />} */}
    </nav>
  );
};
