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
            src="https://www.google.com/maps/embed?..."
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
