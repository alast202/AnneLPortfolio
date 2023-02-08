import React from 'react'
import "./HeroImg.css";
import IntroImg from "../assets/IntroImg.png";
import { Link } from 'react-router-dom';




const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={IntroImg} alt="Intro Image"/>
        </div>
        <div className='content'>
          <p>HEY, I'M ANNE LAST.</p>
          <h1>Front-End Developer</h1>
          <p>Specialising in React Applications</p>
          <div className='btnGroup'>
            <Link 
              to="/projects" className='btn'> Projects 
            </Link>  
            <Link 
              to="/contact" className='btn-light'> Contact 
            </Link>  
          </div>
        </div>
    </div>
  )
}

export default HeroImg