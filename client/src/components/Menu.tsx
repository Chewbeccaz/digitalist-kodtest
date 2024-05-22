import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { MenuDropdown } from "./MenuDropdown";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <button onClick={toggleMenu}>
        <IoMenuOutline />
      </button>
      {isMenuOpen && <MenuDropdown />}
    </div>
  );
};
