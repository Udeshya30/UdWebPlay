import React from "react";
import "./PlayStoreApps.scss";

const apps = [
  {
    name: "Block Stack 3D",
    description: "A fun and challenging block stacking game for all ages!",
    link: "https://play.google.com/store/apps/details?id=com.UdDesignSolutions.BlockStack",
    image: "https://play-lh.googleusercontent.com/tFqL--HoSfBYKcWphxVP8N0wf4F4U20ijOaCs9hIZHc0b1fopYYR6Y0U-vAtbPFYWqXG=w480-h960-rw", 
  },
  {
    name: "Mantra Meter",
    description: "A meditation and mantra counting app for mindfulness.",
    link: "https://play.google.com/store/apps/details?id=com.UdDesignSolutions.MantraMeter",
    image: "https://play-lh.googleusercontent.com/yLLRkCgiFsnUeT9iWfb9lGWufumGxz9KMhLELhFlBts23_GWJCLfpS7t9D-P-EW0tw=w480-h960-rw",
  },
  {
    name: "Pin Precision",
    description: "A precision-based game to test your aiming skills!",
    link: "https://play.google.com/store/apps/details?id=com.UdDesignSolutions.PinPrecision",
    image: "https://play-lh.googleusercontent.com/mNlR9Zhk_mftonafqyn7DREX23gVLpxv8uRNbV5Do-xy5cO63mQ6uivWYYafe5G_FjE=w480-h960-rw", 
  },
];

const PlayStoreApps = () => {
  return (
    <div className="playstore-container">
      <h2 className="title">My Published Apps</h2>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div key={index} className="app-card">
            <img src={app.image} alt={app.name} className="app-image" />
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <a href={app.link} target="_blank" rel="noopener noreferrer" className="playstore-button">
              View on Play Store
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayStoreApps;
