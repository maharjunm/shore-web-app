import React, { useState } from 'react';
import './NavBar.scss';
import Logo from './../images/logo.png';
import {NavLink} from 'react-router-dom';
import Flex from './../Flex/Flex';
const NavBar = () => {
  const [mobview,setMobview]= useState('invisible');
  const onClick=()=>{
    if(mobview==='visible'){
      setMobview('invisible');
    }else{
      setMobview('visible');
    }
  };
  return (
    <nav className="navbar">
      <div className="main">
        <div className="container">
          <div className="header">
            <Flex>
              <img className="img" src={Logo} />
              <h4>
                <NavLink exact to="/">
                  <span className="color-blue">Shore</span>
                  <span className="color-yellow">Birdie</span>
                </NavLink>
              </h4>
            </Flex>
          </div>
          <div>
            <ul>
              <li ><NavLink exact to="/" >Home</NavLink></li>
              <li ><NavLink to="/jobs">Jobs</NavLink></li>
              <li ><NavLink to="/postjobs">Post a Job</NavLink></li>
              <li ><NavLink to="/contactus">Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobview">
        <div className="container">
          <div className="header">
            <img className="img" src={Logo} />
            <h4 className="margin">
              <span className="color-blue">Shore</span>
              <span className="color-yellow">Birdie</span>
            </h4>
            <button className="menubar" onClick={onClick}>
              <span ></span>
              <span ></span>
              <span ></span>
            </button>
          </div>
          <div className={'options '+mobview}>
            <ul onClick={()=> setMobview('invisible')}>
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
