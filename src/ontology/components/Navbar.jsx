import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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

  // 🔥 Active link checker
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        🌐 Geospatial KG Inference
      </Link>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/objectives" className={isActive("/objectives") ? "active" : ""} onClick={closeMenu}>Objectives</Link></li>
        <li><Link to="/methodology" className={isActive("/methodology") ? "active" : ""} onClick={closeMenu}>Methodology</Link></li>
        <li><Link to="/technology" className={isActive("/technology") ? "active" : ""} onClick={closeMenu}>Technology</Link></li>
        <li><Link to="/applications" className={isActive("/applications") ? "active" : ""} onClick={closeMenu}>Applications</Link></li>
        <li><Link to="/future" className={isActive("/future") ? "active" : ""} onClick={closeMenu}>Future Work</Link></li>
        <li><Link to="/publications" className={isActive("/publications") ? "active" : ""} onClick={closeMenu}>Publications</Link></li>
        <li><Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu}>Contact</Link></li>
      </ul>

      <button onClick={toggleDark} className="dark-toggle">
        🌙
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