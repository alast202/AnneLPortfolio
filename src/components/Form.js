import React from 'react';
import "./Form.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Form = () => {

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1umo58', 'template_4d9mr0c', form.current, 'R0o1qgg1M3mcVz4JF')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
          alert("Messange sent!");
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    
    
    <form className="formContainer" ref={form} onSubmit={sendEmail} >

        <div className='iconLinks'>
        <a href= "https://www.linkedin.com/in/anne-last/" target="_blank"  >
                    <FaLinkedin 
                      size ={40} 
                      style ={{ color:"#fff", 
                      marginRight:"1rem"}}
                      
                      />
                  </a>

                  <a href ="https://github.com/alast202" target="_blank">
                    <FaGithub
                      size ={40} 
                      style ={{ color:"#fff", 
                      marginRight:"1rem"}}/>
                  </a>
        </div>
        <p className='info'>Please share as much info as possible about your project so we can discuss your design and functionality requirements. </p>

        <label>Your Name</label>
        <input type ="text" name="user_name" required></input>
        <label>Email</label>
        <input type ="email" name="user_email" required></input>
        <label>Subject</label>
        <input type ="text" name="user_subject" required></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message" required />
        <input type="submit" value="send" />

    </form>
  )
}

export default Form