import React from "react";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <nav className="first-conti">
        <div className="hell">
          <img src={Logo} className="kink" alt="kink" />

          <h4>
            This website provides a tutorial to educate interns with low or no
            level or web development knowledge so as to give them a basic
            knowledge of how to code, how to develop websites or web apps and
            the basic steps involved in web development.
          </h4>
    
        </div>
        <div className="kirk">
          <h1 className="koko">
            <span>
              <FontAwesomeIcon icon={faCopyright} />
            </span>
            2023 Next-Itservices
          </h1>
        </div>
        <hr className="hirrr" />
        <div className="olo">
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <Link to="/about">About</Link>
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
