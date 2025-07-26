import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import './Contact.css'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z5ekquh', 
      'template_dtwx8pp',
      form.current,
      'sVYnTA4QrsMw-ePRe'  
    ).then(
      (result) => {
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className='mainContainer'>
        <Header/>
        <div className="contact-page">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send</button>
        </form>
        </div>
    </div>
  );
};

export default Contact;
