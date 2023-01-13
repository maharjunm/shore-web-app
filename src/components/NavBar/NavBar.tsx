import React, { useState } from 'react';
import './NavBar.scss';
import  Logo from  "./logo1.png";
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    const [mobview,setMobview]= useState("invisible");
    const [desktopview,setDesktopView]= useState("desktop");
    const onClick=()=>{
      if(mobview==="visible"){
        setMobview("invisible");
      }else{
        setMobview("visible");
      }
    }
    return (
        <nav className="navbar">
          <div className="main">
            <div className="container">
              <div className="header">
              <span className="companyLogo"> <img  src={Logo} width="60px" /></span>
                <h4>
                  <span className="color-blue">Shore</span>
                  <span className="color-yellow">Birdie</span>
                </h4>
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
        </div>
        <div className="mobview">
          <div className="container">
            <div className="header">
              <span className="flex">
                <img  src={Logo} width="60px" />
                <h4 className="margin">
                    <span className="color-blue">Shore</span>
                    <span className="color-yellow">Birdie</span>
                </h4>
              </span>
              <button className="menubar" onClick={onClick}>
                <span ></span>
                <span ></span>
                <span ></span>
              </button>
            </div>
            <div className={"options "+mobview}>
              <ul onClick={()=> setMobview("invisible")}>
                <li ><NavLink exact to="/" >Home<i className="fa-solid fa-house"></i></NavLink></li>
                <li > <NavLink to="/jobs">Jobs</NavLink></li>
                <li ><NavLink to="/postjobs">Post a Job</NavLink></li>
                <li > <NavLink to="/aboutus">About Us</NavLink></li>
                <li > <NavLink to="/contactus">Contact Us</NavLink></li>
              </ul>
            </div >
          </div>
        </div>
      </nav>
    );
};
export default NavBar;
