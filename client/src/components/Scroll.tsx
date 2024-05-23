import { FaArrowDown } from "react-icons/fa";

export const Scroll = () => {
  const scrollDown = () => {
    const heroBlock = document.querySelector(".container");
    if (heroBlock) {
      heroBlock.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Kunde inte scrolla.");
    }
  };

  return (
    <div
      className="scroll-icon"
      onClick={scrollDown}
      style={{ cursor: "pointer" }}>
      <FaArrowDown size={30} />
    </div>
  );
};
