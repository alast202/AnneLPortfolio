import React from 'react';
import "./WorkCard.css";



const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src ={props.imgsrc} alt="Project Title"/> 
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-details'>
      <p>{props.text}</p>
      <div className="pro-btns">
        <a href= {props.view} target="_blank"className="btn" > View Source</a>  
      </div>
    </div>  
  </div>
  )
}

export default WorkCard