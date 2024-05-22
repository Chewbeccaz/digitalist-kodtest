import "./../styles/main.scss";

export const HeroBlock = () => {
  const htmlLogo = "/svgs/html-logo.svg";
  const cssLogo = "/svgs/css-logo.svg";
  const jsLogo = "/svgs/js-logo.svg";

  return (
    <>
      <div className="container">
        <div className="html-box">
          <img className="hero-logo" src={htmlLogo} alt="HTML Logo" />
          <h2>HTML5</h2>
          <p>
            HTML5 is a markup language used for structuring presenting content
            on the World Wide Web. It is the fifth and current major version of
            the HTML standard.
          </p>
          <button className="common-btn">Read more</button>
        </div>
        <div className="css-box">
          <img className="hero-logo" src={cssLogo} alt="HTML Logo" />
          <h2>CSS3</h2>
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language.
          </p>
          <button className="common-btn">Read more</button>
        </div>
        <div className="js-box">
          <img className="hero-logo" src={jsLogo} alt="HTML Logo" />
          <h2>JS</h2>
          <p>
            JavaScript, often abbreviated as JS, is a high-level, dynamic,
            weakly typed, prototype-based, multi-paradigm, and interpreted
            programming language.{" "}
          </p>
          <button className="common-btn">Read more</button>
        </div>
      </div>
    </>
  );
};
