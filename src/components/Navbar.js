import "./NavbarStyle.css";
import React from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo1.png";



const Navbar = () => {

  //for changing state of hamnurger menu 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // for changing colour of navbar on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className = {color ? "header header-bg" : "header"}>
        <Link to= "/" className="logo">
           <h3>Anne Last</h3>
        </Link>
      
        <ul className = {click ? "navLinks active" : "navLinks"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className = "hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size ={20} style = {{ color: "#fff"}}/>
          ) :(
            <FaBars size ={20} style = {{ color: "#fff"}
            }/>)}
          
          
        </div>
    </div>
  )
}

export default Navbar;