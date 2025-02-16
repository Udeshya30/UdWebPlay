import React from "react";
import "./HeroSection.scss";
import profileImage from "../../assets/Images/Profile.png"; // ✅ Use your real image
import resume from "../../assets/resume.pdf"; // ✅ Ensure this is placed correctly

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Hello, I'm</h2>
        <h1 className="hero-name">Udeshya Kumar</h1>
        <p>MERN Stack & Unity AR/VR Developer</p>
        <a href={resume} download="Udeshya_Kumar_Resume.pdf" className="resume-link">
          Download Resume
        </a>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Udeshya Kumar" />
      </div>
    </section>
  );
};

export default HeroSection;
