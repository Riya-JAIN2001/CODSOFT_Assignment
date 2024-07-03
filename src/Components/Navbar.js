import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import Habot from '../images/Habot.png';


const Navbar = () => {
  

  return (
    <nav className="navbar">
      {/* Wrap the logo inside Link */}
      <Link to="/">
        <div className="navbar-logo">
          <img src={Habot} alt="Logo" />
        </div>
      </Link>
      <div className="navbar-links">
        <a href="#find-suppliers" className="nav-link">Find Suppliers</a>
        <div className="nav-dropdown">
          <a href="#find-service-tags" className="nav-link1">Find Service Tags <RiArrowDropDownLine className="dropdown-arrow"/></a>
        </div>
        
          <button className="login-button">
            Login/SignUp
          </button>
       
      </div>
    </nav>
  );
};

export default Navbar;
