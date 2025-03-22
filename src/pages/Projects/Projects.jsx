import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import VRTerrain from "../../components/VRTerrain/VRTerrain"; 
import VRClassroom from "../../components/VRClassroom/VRClassroom";
import WebAR3D from "../../components/WebAR3D/WebAR3D";
import "./Projects.scss";
import axios from "axios";

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [detectionResult, setDetectionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewURL(URL.createObjectURL(file));
    setDetectionResult(null);
  };

  const handleSendToServer = async () => {
    if (!selectedImage) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const res = await axios.post("https://ai-dog-detection-backend.onrender.com/predict", formData);
      setDetectionResult(res.data);
    } catch (error) {
      setDetectionResult({ message: "Error occurred", count: 0 });
    }
    setLoading(false);
  };

  return (
    <div className="projects-container">
      <h1>My Projects 🚀</h1>
      <p>Here are some of my best works.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="dog-detection-section">
        <h2>🐶 Dog Detection AI (YOLOv8)</h2>

        <div className="dog-detect-layout">
          {/* Left side */}
          <div className="left-section">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {previewURL && <img src={previewURL} alt="Preview" className="preview-image" />}
          </div>

          {/* Right side */}
          <div className="right-section">
            <button onClick={handleSendToServer} disabled={loading}>
              {loading ? "Detecting..." : "Check for Dogs"}
            </button>

            {loading && <div className="loader"></div>}

            {detectionResult && (
              <div className="detection-result">
                <p>{detectionResult.message}</p>
                <p>Dog Count: {detectionResult.count}</p>
                {detectionResult.image_base64 && (
                  <img
                    src={`data:image/jpeg;base64,${detectionResult.image_base64}`}
                    alt="Detected"
                    className="result-image"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>


      <WebAR3D />
      <VRTerrain />
      <VRClassroom /> 
    </div>
  );
};

export default Projects;
