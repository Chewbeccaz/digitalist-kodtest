import { Menu } from "./Menu";
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
        <Menu />
      </div>
    </nav>
  );
};
