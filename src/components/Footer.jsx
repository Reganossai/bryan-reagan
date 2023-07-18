import React from "react";
import Logo from "../assets/logo.avif";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <nav className="first-conti">
        <div className="hell">
          <img src={Logo} className="kink" alt="kink" />

          <h4>
            This website provides a tutorial to educate aspiring developers with low or no
            level or web development knowledge so as to give them a basic
            knowledge of how to code, how to develop websites or web apps and
            the basic steps involved in web development.
          </h4>
    
        </div>
        <div className="kirk">
          <h1>Created By Reagan Ossai</h1>
          <h1 className="koko">
           <a href="https://reaganossai.netlify.app">https://reaganossai.netlify.app</a>
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
          <h1>
            <Link to="/buy">Buy Me a Coffee</Link>
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
