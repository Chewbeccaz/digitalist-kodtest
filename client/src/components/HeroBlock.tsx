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
          <h3>Html5</h3>
          <p>Lite text om html.</p>
          <button className="common-btn">Read more</button>
        </div>
        <div className="css-box">
          <img className="hero-logo" src={cssLogo} alt="HTML Logo" />
          <h3>CSS3</h3>
          <p>Lite text om CSS.</p>
          <button className="common-btn">Read more</button>
        </div>
        <div className="js-box">
          <img className="hero-logo" src={jsLogo} alt="HTML Logo" />
          <h3>JS</h3>
          <p>Lite text om javascript</p>
          <button className="common-btn">Read more</button>
        </div>
      </div>
    </>
  );
};
