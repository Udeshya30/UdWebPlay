// import React from "react";
// import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
// import Game from "./pages/Game/Game";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import "./styles/global.scss";

// function App() {
//   return (
//     <Router> {/* ✅ Use HashRouter for GitHub Pages */}
//       <Navbar /> {/* ✅ Added Navbar */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/game/:gameId" element={<Game />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer /> {/* ✅ Added Footer */}
//     </Router>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./styles/global.scss";

// ✅ Function to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // ✅ Runs on route change

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Scroll to top whenever route changes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:gameId" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
