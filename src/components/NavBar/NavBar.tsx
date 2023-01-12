import React, { useState } from 'react';
import './NavBar.scss';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar">
          <div className="container">
            <div className="header">
              <h4>
                <span className="color-blue">Shore</span>
                <span className="color-yellow">Birdie</span>
              </h4>
                <span className="companyLogo"> <img  src="largelogo.png" width="100px" /></span>
            </div>
          <div>
            <ul>
              <li ><NavLink exact to="/" >Home<i className="fa-solid fa-house"></i></NavLink></li>
              <li > <NavLink to="/jobs">Jobs</NavLink></li>
              <li ><NavLink to="/postjobs">Post a Job</NavLink></li>
              <li > <NavLink to="/aboutus">About Us</NavLink></li>
              <li > <NavLink to="/contactus">Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
};
export default NavBar;
