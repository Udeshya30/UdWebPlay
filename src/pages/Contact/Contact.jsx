import React from "react";
import "./Contact.scss";
import { FaLocationArrow, FaLinkedin } from "react-icons/fa";
import { MdCall, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Left Section - Contact Details */}
        <div className="contact-details">
          <h2>Udeshya Kumar</h2>
          <p className="designation">MERN Stack & Unity AR/VR Developer</p>

          <div className="contact-info">
            <p><FaLocationArrow /> JP Nagar Phase 7, Bengaluru, India</p>
            <p><MdCall /> (+91) 7008349166, 7549139673</p>
            <p><MdOutlineEmail /> <a href="mailto:udeshya.kumar30@gmail.com">udeshya.kumar30@gmail.com</a></p>
            <p><FaLinkedin /> <a href="https://linkedin.com/in/udeshyakumar" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>

          {/* <button className="contact-button">Contact Me</button> */}
        </div>

        {/* Right Section - Google Map (Set to Bangalore) */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490657754!2d77.30125509979652!3d12.954459542594671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1740860620919!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
