import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard"; // ✅ Import ProjectCard Component
import "./Projects.scss";

const projects = [
  {
    title: "GalactiView - AR Space Exploration & Learning 🚀",
    video: "https://www.youtube.com/embed/yXnH8IyXAiM",
    description: "An AR-powered educational Android app built with Unity & ARCore. my new AR-powered educational app for Android, currently in development with Unity and ARCore. Dive into the cosmos, explore stars, planets, and the universe like never before. Interact with stunning 3D models and get immersive text and audio explanations to learn all about our solar system. Coming to the Play Store very soon! 🚀"
  },
  {
    title: "Construction Plan Analyzer 🏗️",
    video: "https://www.youtube.com/embed/yXnH8IyXAiM",
    description: "A MERN stack project that detects discrepancies in construction plans using AI."
  },
  {
    title: "UdWebPlay - Web Game Hosting Platform 🎮",
    video: "https://www.youtube.com/embed/yXnH8IyXAiM",
    description: "A game hosting platform built with Unity WebGL & React."
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects 🚀</h1>
      <p>Here are some of the projects I have worked on.</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} /> // ✅ Uses ProjectCard component
        ))}
      </div>
    </div>
  );
};

export default Projects;
