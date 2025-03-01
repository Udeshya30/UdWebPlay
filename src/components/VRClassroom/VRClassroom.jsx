import React from "react";
import vrClassroomImages from "../../assets/Images/VR-Classroom"; 
import "./VRClassroom.scss";

const VRClassroom = () => {
  return (
    <div className="vr-classroom-container">
      <h2 className="vr-title">VR Classroom</h2>

      {/* Cards Grid (Images First) */}
      <div className="vr-images-grid">
        {vrClassroomImages.map((img, index) => (
          <div key={index} className="vr-card">
            <img src={img} alt={`VR Classroom ${index + 1}`} className="vr-card-image" />
          </div>
        ))}
      </div>

      {/* Project Description - Ensures it's below images */}
      <div className="vr-description-container">
        <p>
          <strong>VR Classroom</strong> is an interactive **virtual learning environment** 
          designed for **Oculus Quest 2**. Built using **Unity 3D & C#**, it allows users 
          to **engage in immersive educational experiences** with real-time interaction.
        </p>

        <h3>🎓 Key Features</h3>
        <ul>
          <li>📺 **Interactive Video Lectures** – Users can watch educational content in a VR setting.</li>
          <li>📝 **Quiz & Decision-Making Tasks** – Engaging activities to test knowledge.</li>
          <li>🔍 **Virtual Lab Environments** – Simulated lab experiments for STEM learning.</li>
          <li>🎮 **Hand & Controller Interactions** – Smooth interaction with the environment.</li>
        </ul>

        <h3>🛠️ Tech Stack</h3>
        <ul>
          <li>🎮 <strong>Unity 3D</strong> - Game Engine.</li>
          <li>🖥️ <strong>C#</strong> - Programming Language.</li>
          <li>🕶️ <strong>Oculus SDK</strong> - VR Development.</li>
          <li>📡 <strong>WebRTC & Networking</strong> - For live classroom integration.</li>
        </ul>

        <h3>🎯 Use Cases</h3>
        <ul>
          <li>🏫 **Remote Learning** – Enhances distance education with immersive VR classrooms.</li>
          <li>🧪 **Virtual Labs** – Conduct chemistry, physics, and biology experiments safely.</li>
          <li>🏛️ **Corporate Training** – Interactive business and professional development training.</li>
        </ul>
      </div>
    </div>
  );
};

export default VRClassroom;
