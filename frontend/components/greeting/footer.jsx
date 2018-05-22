import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Footer-Container">
        <nav className="Footer">
          <div className="FooterLeft">
            <Link to="/" className="header-link">
              <h1 className="FooterLogo">Jtsy</h1>
            </Link>
            <p>We make it easy to find your component</p>
          </div>
          <div className="FooterRight" >
            <div><i className="far fa-copyright"></i> 2018 Jtsy</div>
            <a className='footer-links' href="https://jeffliang0318.github.io/Portfolio/">
              <h2 className='footer-website'>Jeff's Website</h2>
            </a>
            <a className='footer-links' href="https://github.com/jeffliang0318">
              <img src="https://res.cloudinary.com/dwanjkcku/image/upload/v1526010598/GitHub-Mark-120px-plus.png" />
            </a>
            <a className='footer-links' href="https://www.linkedin.com/in/jeff-chun-liang-699bb679/">
              <img src="https://res.cloudinary.com/dwanjkcku/image/upload/v1526010598/linkedin.png" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
