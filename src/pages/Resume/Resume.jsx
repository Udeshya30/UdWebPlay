import React from "react";
import "./Resume.scss";
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import resume from "../../assets/resume.pdf"; 

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      {/* ✅ Contact Info */}
      <div className="resume-header">
        <p><FaMapMarkerAlt /> JP Nagar Phase 7, Bengaluru - 560078</p>
        <p><FaPhone /> (+91) 7008349166, 7549139673</p>
        <p><FaEnvelope /> <a href="mailto:udeshya.kumar30@gmail.com">udeshya.kumar30@gmail.com</a></p>
        <p><FaLinkedin /> <a href="https://linkedin.com/in/udeshyakumar" target="_blank" rel="noopener noreferrer">linkedin.com/in/udeshyakumar</a></p>
      </div>

      {/* ✅ Career Objective */}
      <div className="resume-section">
        <h2>Career Objective</h2>
        <p>Focused and detail-oriented Unity 3D engine expert with a focus on AR/VR/MR-based development, experienced in C# programming language. Creative and dependable team player dedicated to innovation, exposition, and efficiently resolving project issues.</p>
      </div>

      {/* ✅ Experience Section */}
      <div className="resume-section">
        <h2>Experience</h2>
        <div className="resume-job">
          <h3>Zibtek, Bengaluru — Software Developer</h3>
          <p><em>Jan 2023 - Present</em></p>
          <ul>
            <li>Worked on RAD Studio (Embarcadero Technologies).</li>
            <li>Enhanced a medical project focused on patient health monitoring.</li>
            <li>Integrated TeeChart Pro to generate reports with visual graphs.</li>
            <li>Used AR/VR for an integrated shopping mall experience.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h3>Kravis Technologies, Hyderabad — Jr. Software Developer</h3>
          <p><em>Nov 2020 - Dec 2022</em></p>
          <ul>
            <li>Lead technical design & development for AR/VR/MR technologies.</li>
            <li>Developed prototypes and worked with Oculus Quest 2, HTC Vive, and HoloLens.</li>
            <li>Experience in Android, Windows, HoloLens & VR headgear.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h3>Freelance, Remote</h3>
          <p><em>Dec 2019 - Oct 2020</em></p>
          <ul>
            <li>Designed AR-based products for Kapzelet Technologies.</li>
            <li>Built a scanner-based AR app using Vuforia.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h3>NSIC TSC, New Delhi — Design Trainee Apprentice</h3>
          <p><em>Dec 2018 - Nov 2019</em></p>
          <ul>
            <li>Industry 4.0 Training & CAD modeling.</li>
            <li>Developed prototype components and assemblies.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h3>Swastik Automech Pvt. Ltd., Faridabad — Quality Control</h3>
          <p><em>May 2018 - Nov 2018</em></p>
          <ul>
            <li>Helped resolve non-conforming product issues.</li>
            <li>Identified defects during cyclical checks.</li>
          </ul>
        </div>
      </div>

      {/* ✅ Education Section */}
      <div className="resume-section">
        <h2>Education</h2>
        <p><strong>MITS, Rayagada</strong> — B. Tech (2014 - 2018)</p>
        <p><strong>St. Xavier’s College, Ranchi</strong> — Intermediate (2012 - 2014)</p>
        <p><strong>St. Aloysius School, Ranchi</strong> — Matric (2002 - 2012)</p>
      </div>

      {/* ✅ Skills Section */}
      <div className="resume-section">
        <h2>Software Skills</h2>
        <p>C#, Unity 2D & 3D, RAD Studio, SQLite, C++, GitLab</p>
      </div>

      {/* ✅ Strengths Section */}
      <div className="resume-section">
        <h2>Strengths</h2>
        <p>Critical thinking, problem-solving, teamwork, communication, time management, creativity, determination.</p>
      </div>

      {/* ✅ Languages Section */}
      <div className="resume-section">
        <h2>Languages</h2>
        <p>English, Hindi</p>
      </div>

      {/* ✅ Download Resume Button */}
      <div className="resume-download">
        <a href={resume} download="Udeshya_Kumar_Resume.pdf" className="btn-download">
            Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
