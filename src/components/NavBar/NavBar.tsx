import React, { useState ,useContext } from 'react';
import './NavBar.scss';
import Logo from './../images/logo.png';
import {NavLink} from 'react-router-dom';
import Flex from './../Flex/Flex';
import { UserContext } from '../../pages/HomePage/HomePage';

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () =>{
    if(state){
      return(
        <ul>
          <li ><NavLink exact to="/" >Home</NavLink></li>
          <li ><NavLink to="/postjobs">Post a Job</NavLink></li>
          <li ><NavLink to="/contactus">Contact Us</NavLink></li>
          <li ><NavLink to="/logout">Logout</NavLink></li>
        </ul>
      )
    }
    else{
      return(
        <ul>
        <li ><NavLink exact to="/" >Home</NavLink></li>
        <li ><NavLink to="/postjobs">Post a Job</NavLink></li>
        <li ><NavLink to="/contactus">Contact Us</NavLink></li>
        <li ><NavLink to="/signup">Signup/Login</NavLink></li>
      </ul>
      )
    }
  }

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
            <RenderMenu />
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
              <RenderMenu />
            </ul>
          </div >
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
