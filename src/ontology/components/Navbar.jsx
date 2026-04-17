import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  // 🌙 Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  // 🌙 Toggle theme
  function toggleDark() {
    const newTheme = !dark;
    setDark(newTheme);

    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // 🔥 Active link checker logic modified for nested routing
  // location.pathname ab "/ontology/objectives" jaisa hoga
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* Home link updated to /ontology */}
      <Link to="/ontology" className="nav-brand" onClick={closeMenu}>
        🌐 Geospatial KG Inference
      </Link>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {/* Sabhi paths ke aage /ontology lagaya gaya hai */}
        <li>
          <Link to="/ontology" className={isActive("/ontology") ? "active" : ""} onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/ontology/objectives" className={isActive("/ontology/objectives") ? "active" : ""} onClick={closeMenu}>Objectives</Link>
        </li>
        <li>
          <Link to="/ontology/methodology" className={isActive("/ontology/methodology") ? "active" : ""} onClick={closeMenu}>Methodology</Link>
        </li>
        <li>
          <Link to="/ontology/technology" className={isActive("/ontology/technology") ? "active" : ""} onClick={closeMenu}>Technology</Link>
        </li>
        <li>
          <Link to="/ontology/applications" className={isActive("/ontology/applications") ? "active" : ""} onClick={closeMenu}>Applications</Link>
        </li>
        <li>
          <Link to="/ontology/future" className={isActive("/ontology/future") ? "active" : ""} onClick={closeMenu}>Future Work</Link>
        </li>
        <li>
          <Link to="/ontology/publications" className={isActive("/ontology/publications") ? "active" : ""} onClick={closeMenu}>Publications</Link>
        </li>
        <li>
          <Link to="/ontology/contact" className={isActive("/ontology/contact") ? "active" : ""} onClick={closeMenu}>Contact</Link>
        </li>
      </ul>

      <button onClick={toggleDark} className="dark-toggle">
        {dark ? "☀️" : "🌙"}
      </button>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
