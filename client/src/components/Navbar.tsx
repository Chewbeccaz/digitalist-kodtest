import { IoMenuOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

export const Navbar = () => {
  const Logo = "/svgs/digitalist_logo.svg";

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Digitalist Logo" />
      </div>
      <div className="icons">
        <button>
          <IoMdSearch />
        </button>
        <button>
          <IoMenuOutline />
        </button>
      </div>
    </nav>
  );
};
