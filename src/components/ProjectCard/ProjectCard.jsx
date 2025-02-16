import React, { useState, useEffect, useRef } from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ title, video, description }) => {
  const [expanded, setExpanded] = useState(false); // ✅ State to toggle full text
  const cardRef = useRef(null); // ✅ Reference for detecting outside click

  // ✅ Handle click outside to collapse expanded description
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setExpanded(false); // ✅ Collapse when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="project-card" ref={cardRef}>
      <h2 className="project-title">{title}</h2>

      <div className="video-container">
        <iframe
          src={video}
          title="Project Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <p className={`project-description ${expanded ? "expanded" : ""}`}>
        {expanded ? description : `${description.substring(0, 90)}...`}
      </p>

      <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ProjectCard;
