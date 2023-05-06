import React from 'react'
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="leftSide"></div>
        <div className="rightSide">
            <h1><u>Contact</u> <u>Us</u>~</h1>
            <form method='POST' id="contact-form">
                <label htmlFor="name">Name:{" "}</label>
                <input className='inputC' type="text" name='name' placeholder='Enter your name' />
            
                <label htmlFor="email">E-mail:{" "}</label>
                <input className='inputC' type="email" name='email' placeholder='Enter your email' />
                
                <label htmlFor="message">Message:{" "}</label>
                <textarea rows='7' name='message' placeholder='Enter your message...' required/>
                <button className='SUB' type='submit'> Send Message </button>
            </form>
        </div>
    </div>
  )
}

export default Contact
