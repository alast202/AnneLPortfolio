import React from 'react';
import "./Form.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1umo58', 'template_4d9mr0c', form.current, 'R0o1qgg1M3mcVz4JF')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
          alert("Messange sent!");
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <form className="formContainer" ref={form} onSubmit={sendEmail}>
      
        <label>Your Name</label>
        <input type ="text" name="user_name"></input>
        <label>Email</label>
        <input type ="text" name="user_email"></input>
        <label>Subject</label>
        <input type ="text" name="user_subject"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message" />
        <input type="submit" value="send" />

    </form>
  )
}

export default Form