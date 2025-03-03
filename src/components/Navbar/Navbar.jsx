import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/" onClick={handleHomeClick}>
          UdWebPlay
        </Link>

        {/* ✅ Mobile Menu Toggle */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* ✅ Navbar Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => setMenuOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
