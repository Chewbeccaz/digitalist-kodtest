import { Navbar } from "./Navbar";
import { Scroll } from "./Scroll";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="navigation">
          <Navbar />
        </div>
        <div className="read-more">
          <h3>Experts in co-creation</h3>
          <p>
            Curabitur suscipit suscipit tellus. Vivamus in erat ut urna cursus
            vestibulum. Nulla consequat massa quis enim.
          </p>
          <button className="common-btn">Read more</button>
        </div>
        <Scroll />
      </div>
    </>
  );
};
