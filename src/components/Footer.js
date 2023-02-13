import "./Footer.css";
import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4>
                      <FaHome 
                        size ={30} 
                        style ={{ color:"#fff", 
                        marginRight:"2rem"}}/>
                    </h4>
                    <div>
                      <p>Edinburgh, Scotland</p>
                    </div>
                </div>
                <div className = "phone">
                  <h4>
                    <FaPhone 
                      size ={30} 
                      style ={{ color:"#fff",
                      marginRight:"2rem"}}/>
                      07506 462277
                  </h4>  
                </div>
                <div className = "email">
                  <h4>
                    <FaMailBulk 
                      size ={30} 
                      style ={{ color:"#fff", 
                      marginRight:"2rem"}}/> 
                      annelast202@gmail.com
                  </h4>  
                </div>
            </div>
            <div className="right">
              <h4> About me</h4>
              <p> Hi, i'm Anne ( ＾◡＾)っ ♡</p>
              <p> I love to create beautiful and performant products with delighful user experiences. </p>
              <div className="social">
              <h4>
                  <a href= "https://www.linkedin.com/in/anne-last/" target="_blank" >
                  <FaLinkedin 
                    size ={40} 
                    style ={{ color:"#fff", 
                    marginRight:"1rem"}}
                    />
                  </a>

                  <a href ="https://github.com/alast202" target="_blank" >
                  <FaGithub
                    size ={40} 
                    style ={{ color:"#fff", 
                    marginRight:"1rem"}}/>
                  </a>
              </h4>         
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer