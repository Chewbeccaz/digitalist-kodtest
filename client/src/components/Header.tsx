import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>LOGO + DIGITALIST</h1>
        </div>
        <div className="searchbox">
          <button>Searchicon</button>
        </div>
        <div className="navigation">
          <Navbar />
        </div>
      </div>
    </>
  );
};
