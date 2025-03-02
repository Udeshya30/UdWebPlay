// import React, { useState, useEffect } from "react";
// import "./WebAR3D.scss";
// import "@google/model-viewer";


// const WebAR3D = () => {
//     const [modelUrl, setModelUrl] = useState("/assets/Baseball_glove.glb");
//     const [modelName, setModelName] = useState("Baseball Glove");

//     useEffect(() => {
//         setModelUrl("/assets/Baseball_glove.glb");
//         setModelName("Baseball Glove");
//     }, []);

//     const handleModelChange = (event) => {
//         const selectedOption = event.target.selectedOptions[0];
//         setModelUrl(selectedOption.value);
//         setModelName(selectedOption.getAttribute("data-name"));
//     };

//     return (
//         <div className="webar-container">
//             <h2>🔷 WebAR 3D Model Viewer</h2>
//             <p>Select a 3D model to view in AR.</p>

//             <div className="model-selector">
//                 <select id="model-select" onChange={handleModelChange}>
//                     <option value="/assets/Baseball_glove.glb" data-name="Baseball Glove">Baseball Glove</option>
//                     <option value="/assets/Boxing_glove.glb" data-name="Boxing Glove">Boxing Glove</option>
//                     <option value="/assets/Golf_bag.glb" data-name="Golf Bag">Golf Bag</option>
//                     <option value="/assets/Golf_Visor.glb" data-name="Golf Visor">Golf Visor</option>
//                 </select>
//             </div>

//             <div className="model-viewer-container">
//                 <model-viewer
//                     id="model-viewer"
//                     src={modelUrl}
//                     alt="3D model"
//                     shadow-intensity="1"
//                     camera-controls
//                     auto-rotate
//                     ar>
//                 </model-viewer>
//             </div>

//             <div className="model-info">
//                 <h3>{modelName}</h3>
//             </div>
//         </div>
//     );
// };

// export default WebAR3D;


import React, { useState, useEffect } from "react";
import "./WebAR3D.scss";
import "@google/model-viewer";

const baseUrl = import.meta.env.BASE_URL;  // Dynamically fetch base URL

const WebAR3D = () => {
    const [modelUrl, setModelUrl] = useState(`${baseUrl}assets/Baseball_glove.glb`);
    const [modelName, setModelName] = useState("Baseball Glove");

    useEffect(() => {
        setModelUrl(`${baseUrl}assets/Baseball_glove.glb`);
        setModelName("Baseball Glove");
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
                    <option value={`${baseUrl}assets/Baseball_glove.glb`} data-name="Baseball Glove">Baseball Glove</option>
                    <option value={`${baseUrl}assets/Boxing_glove.glb`} data-name="Boxing Glove">Boxing Glove</option>
                    <option value={`${baseUrl}assets/Golf_bag.glb`} data-name="Golf Bag">Golf Bag</option>
                    <option value={`${baseUrl}assets/Golf_Visor.glb`} data-name="Golf Visor">Golf Visor</option>
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
