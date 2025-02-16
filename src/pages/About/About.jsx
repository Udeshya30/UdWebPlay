import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>Focused and detail-oriented Unity 3D engine expert & MERN Stack Developer.</p>

      <h2>Experience</h2>
      <ul>
        <li><b>Zibtek</b> - Software Developer (2023 - Present)</li>
        <li><b>Kravis Technologies</b> - Jr. Software Developer (2020 - 2022)</li>
        <li><b>Freelance</b> - Remote Developer (2019 - 2020)</li>
      </ul>

      <h2>Technical Skills</h2>
      <ul>
        <li>Unity 2D & 3D, C#</li>
        <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
        <li>RAD Studio (Embarcadero Technologies), SQLite</li>
      </ul>
    </div>
  );
};

export default About;
