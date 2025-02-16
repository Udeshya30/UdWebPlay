import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.scss";

const projects = [
  {
    title: "GalactiView - AR Space Exploration 🚀",
    video: "https://www.youtube.com/embed/yXnH8IyXAiM",
    description: "An AR-powered educational Android app built with Unity & ARCore."
  },
  {
    title: "Construction Plan Analyzer 🏗️",
    video: "https://www.youtube.com/embed/yXnH8IyXAiM",
    description: "A MERN stack project that detects discrepancies in construction plans using AI."
  },
  {
    title: "UdWebPlay - Web Game Hosting 🎮",
    video: "https://www.youtube.com/embed/yXnH8IyXAiM",
    description: "A game hosting platform built with Unity WebGL & React."
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects 🚀</h1>
      <p>Here are some of my best works.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
