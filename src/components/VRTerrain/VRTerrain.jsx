import React from "react";
import vrTerrainImages from "../../assets/Images/VRTerrain"; 
import "./VRTerrain.scss";

const VRTerrain = () => {
  return (
    <div className="vr-terrain-container">
      <h2 className="vr-title">VR Terrain</h2>

      {/* Cards Grid (Images First) */}
      <div className="vr-images-grid">
        {vrTerrainImages.map((img, index) => (
          <div key={index} className="vr-card">
            <img src={img} alt={`VR Terrain ${index + 1}`} className="vr-card-image" />
          </div>
        ))}
      </div>

      {/* Project Description - Ensures it's below images */}
      <div className="vr-description-container">
        <p>
          <strong>VR Terrain Visualization</strong> is an advanced <strong>Windows-based VR application</strong> designed for immersive 
          <strong> tactical analysis and training</strong>. Built using <strong>Unity 3D, C#, and SQLite</strong>, this system provides a 
          <strong> real-time, interactive 3D environment</strong> where users can explore and analyze terrain in <strong>virtual reality</strong>.
        </p>

        <h3>🧑‍🤝‍🧑 Multi-User Operation</h3>
        <ul>
          <li><strong>VR Operator:</strong> Wears the <strong>VR headset</strong>, explores the environment using <strong>teleportation</strong>, and conducts <strong>tactical analysis</strong>.</li>
          <li><strong>Control Operator:</strong> Manages **terrain settings**, **weather conditions**, **day-night cycle**, and **VR user placement** from a **Windows system**.</li>
        </ul>

        <h3>🛠️ Key Features & Functionalities</h3>
        <ul>
          <li>🔍 **VR Exploration & Teleportation** – The VR user can **freely move and teleport** to analyze the terrain in detail.</li>
          <li>🕹️ **Real-Time Control Panel** – The control operator can **place the VR user anywhere in India**, change **weather settings**, and deploy **3D objects**.</li>
          <li>🌍 **Dynamic 3D Environment** – The VR headset user sees real-time changes made by the control operator.</li>
          <li>💾 **Data Storage & Management** – SQLite is used to save user sessions and environmental settings.</li>
        </ul>

        <h3>🛠️ Tech Stack</h3>
        <ul>
          <li>🎮 <strong>Unity 3D</strong> - Game Engine for VR development.</li>
          <li>🖥️ <strong>C#</strong> - Programming Language.</li>
          <li>🕶️ <strong>XR Interaction Toolkit</strong> - Handles VR interaction.</li>
          <li>💾 <strong>SQLite</strong> - Stores environment configurations.</li>
        </ul>

        <h3>🎯 Impact & Use Cases</h3>
        <ul>
          <li>🏗️ **Military & Tactical Training** – Helps personnel analyze terrain before real missions.</li>
          <li>🚒 **Emergency Response Planning** – Simulate disaster scenarios for training.</li>
          <li>🏙️ **Urban & Infrastructure Planning** – Visualize city layouts in VR.</li>
        </ul>
      </div>
    </div>
  );
};

export default VRTerrain;