import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export const Searchbox = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBox = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={`search-container ${isSearchOpen ? "open" : ""}`}>
      <input
        className="search-input"
        type="text"
        placeholder="Vad söker du efter?"
      />
      <button onClick={toggleSearchBox}>
        <IoMdSearch />
      </button>
    </div>
  );
};
