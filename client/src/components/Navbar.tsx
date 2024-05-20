export const Navbar = () => {
  const Logo = "/svgs/digitalist_logo.svg";

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Digitalist Logo" />
      </div>
      <div className="searchbox">
        <button>Searchicon</button>
        <button>MENY</button>
      </div>
    </nav>
  );
};
