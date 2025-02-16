import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Left Section - Contact Details */}
        <div className="contact-details">
          <h2>Udeshya Kumar</h2>
          <p className="designation">MERN Stack & Unity AR/VR Developer</p>

          <div className="contact-info">
            <p>📍 JP Nagar Phase 7, Bengaluru, India</p>
            <p>📞 (+91) 7008349166, 7549139673</p>
            <p>📧 <a href="mailto:udeshya.kumar30@gmail.com">udeshya.kumar30@gmail.com</a></p>
            <p>🔗 <a href="https://linkedin.com/in/udeshyakumar" target="_blank">LinkedIn</a></p>
          </div>

          <button className="contact-button">Contact Me</button>
        </div>

        {/* Right Section - Google Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7772.640973405895!2d77.57346153159541!3d12.887888342333804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151dc84fbb5f%3A0xaed58b029c786032!2sJP%20Nagar%207th%20Phase%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708169821880!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
