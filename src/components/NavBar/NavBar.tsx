import React, { useState ,useContext } from 'react';
import './NavBar.scss';
import Logo from './../images/logo.png';
import {NavLink} from 'react-router-dom';
import Flex from './../Flex/Flex';
import { UserContext } from '../../pages/HomePage/HomePage';
const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () =>{
    if(state.user){
      return(
        <ul>
          <li ><NavLink to="/profile">Profile</NavLink></li>
          <li ><NavLink to="/logout">Logout</NavLink></li>
        </ul>
      );
    }
    if(state.isAdmin){
      return(
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/logout">Logout</NavLink></li>
        </ul>
      );
    }
    else{
      return(
        <li ><NavLink to="/signup">Signup/Login</NavLink></li>
      );
    }
  };

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
        <div className="container">
          <div>
            <ul>
              <li ><NavLink exact to="/" >Home</NavLink></li>
              <li ><NavLink to="/payment">Payment</NavLink></li>
              <li ><NavLink to="/postjobs">Post a Job</NavLink></li>
              <li ><NavLink to="/contactus">Contact Us</NavLink></li>
              <RenderMenu />
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
              <ul>
                <li ><NavLink exact to="/" >Home</NavLink></li>
                <li ><NavLink to="/payment">Payment</NavLink></li>
                <li ><NavLink to="/postjobs">Post a Job</NavLink></li>
                <li ><NavLink to="/contactus">Contact Us</NavLink></li>
                <RenderMenu />
              </ul>
            </ul>
          </div >
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
