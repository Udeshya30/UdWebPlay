import React from "react";
import "./About.scss";
import profileImage from "../../assets/Images/Profile.png"; // ✅ Ensure image exists

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Udeshya Kumar" />
        </div>

        <div className="about-details">
          <h1>About Me</h1>
          <p className="description">
            Focused and detail-oriented <b>Unity 3D & MERN Stack Developer</b> with expertise in AR/VR/MR.
            Passionate about innovation and solving technical challenges.
          </p>

          <div className="info">
            <p><b>📍 Location:</b> Bengaluru, India</p>
            <p><b>📧 Email:</b> udeshya.kumar30@gmail.com</p>
            <p><b>🔗 LinkedIn:</b> <a href="https://linkedin.com/in/udeshyakumar" target="_blank" rel="noopener noreferrer">udeshyakumar</a></p>
          </div>

          <h2>Experience</h2>
          <ul>
            <li><b>Zibtek</b> - Software Developer (2023 - Present)</li>
            <li><b>Kravis Technologies</b> - Jr. Software Developer (2020 - 2022)</li>
            <li><b>Freelance</b> - Remote Developer (2019 - 2020)</li>
          </ul>

          <h2>Skills</h2>
          <div className="skills">
            <div className="skill">
              <span>Unity 3D & AR/VR</span>
              <div className="progress"><div className="bar" style={{ width: "90%" }}></div></div>
            </div>
            <div className="skill">
              <span>MERN Stack (MongoDB, Express, React, Node.js)</span>
              <div className="progress"><div className="bar" style={{ width: "85%" }}></div></div>
            </div>
            <div className="skill">
              <span>C# & C++</span>
              <div className="progress"><div className="bar" style={{ width: "80%" }}></div></div>
            </div>
            <div className="skill">
              <span>Embarcadero RAD Studio</span>
              <div className="progress"><div className="bar" style={{ width: "75%" }}></div></div>
            </div>
            <div className="skill">
              <span>SQLite & Database Management</span>
              <div className="progress"><div className="bar" style={{ width: "80%" }}></div></div>
            </div>
            <div className="skill">
              <span>Version Control (GitLab, GitHub)</span>
              <div className="progress"><div className="bar" style={{ width: "85%" }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
