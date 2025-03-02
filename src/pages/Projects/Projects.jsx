import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import VRTerrain from "../../components/VRTerrain/VRTerrain"; 
import VRClassroom from "../../components/VRClassroom/VRClassroom";
import "./Projects.scss";
import WebAR3D from "../../components/WebAR3D";

const projects = [
  {
    title: "GalactiView - AR Space Exploration 🚀",
    video: "https://www.youtube.com/embed/yXnH8IyXAiM",
    description: "An AR-powered educational Android app built with Unity & ARCore."
  },
  {
    title: "Desert Tactical Training - VR Sniper Challenge 🌵",
    video: "https://www.youtube.com/embed/O99wF56j2ZA",
    description: "Standalone Oculus Quest 2 VR training mission in a harsh desert environment."
  },
  {
    title: "Forest Tactical Training - VR Stealth Mission 🌲",
    video: "https://www.youtube.com/embed/V9UQcBr0jOQ",
    description: "Find the hidden sniper in a dense forest VR training simulation."
  },
  {
    title: "Glacier Tactical Training - Extreme Cold Warfare ❄️",
    video: "https://www.youtube.com/embed/ZJXDhW5v7B8",
    description: "Test your survival & sniper detection skills in an icy battlefield."
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

      <WebAR3D />

      {/* ✅ Add VR Terrain Visualization section */}
      <VRTerrain />

      {/* ✅ Add VR Classroom section */}
      <VRClassroom /> 
    </div>
  );
};

export default Projects;
