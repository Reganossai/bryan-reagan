import React,{useState} from 'react';
import Logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };
  
    nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  return (
    
        <nav className='navbar'>
            
        <img src={Logo} alt="logo" />
        <Link to="/" className="navbar-brand" >
        Next-It services
      </Link>
      <ul id="navbarSupportedContent">
        <li className="nav-link" aria-current="page">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          
        </li>
        <li className="nav-link">
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
      </ul>
      {nav ? (
        <ul id="navbarSupportedContentMobile">
          <li className="nav-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
      ) : null}

      <div onClick={handleNav} className="zaracho">
        {nav ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>
  )
}

export default Navbar