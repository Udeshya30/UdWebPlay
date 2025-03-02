import React, { useState, useEffect } from "react";
import "./WebAR3D.scss";

const WebAR3D = () => {
    const [modelUrl, setModelUrl] = useState("/assets/3DModel/Baseball glove.glb");
    const [modelName, setModelName] = useState("Baseball glove");

    useEffect(() => {
        setModelUrl("/assets/3DModel/Baseball glove.glb");
        setModelName("Baseball glove");
    }, []);

    const handleModelChange = (event) => {
        const selectedOption = event.target.selectedOptions[0];
        setModelUrl(selectedOption.value);
        setModelName(selectedOption.getAttribute("data-name"));
    };

    return (
        <div className="webar-container">
            <h2>🔷 WebAR 3D Model Viewer</h2>
            <p>Select a 3D model to view in AR.</p>

            <div className="model-selector">
                <select id="model-select" onChange={handleModelChange}>
                    <option value="/assets/3DModel/Baseball glove.glb" data-name="Baseball glove">Baseball glove</option>
                    <option value="/assets/3DModel/Boxing glove.glb" data-name="Boxing glove">Boxing glove</option>
                    <option value="/assets/3DModel/Golf bag.glb" data-name="Golf bag">Golf bag</option>
                    <option value="/assets/3DModel/Golf Visor.glb" data-name="Golf Visor">Golf Visor</option>
                </select>
            </div>

            <div className="model-viewer-container">
                <model-viewer
                    id="model-viewer"
                    src={modelUrl}
                    alt="3D model"
                    shadow-intensity="1"
                    camera-controls
                    auto-rotate
                    ar>
                </model-viewer>
            </div>

            <div className="model-info">
                <h3>{modelName}</h3>
            </div>
        </div>
    );
};

export default WebAR3D;
