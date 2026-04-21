import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  // 🌙 Theme load karein (Sirf local storage se)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.body.classList.add("dark");
      
      // Wrapper par class lagane ke liye thoda wait karein taaki DOM load ho jaye
      setTimeout(() => {
        const ontologyWrapper = document.querySelector(".ontology-wrapper");
        if (ontologyWrapper) ontologyWrapper.classList.add("dark");
      }, 100);
    }
  }, []);


  // 🌙 Toggle function
  function toggleDark() {
    const newTheme = !dark;
    setDark(newTheme);

    // 1. LocalStorage update karein
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // 2. Body par class toggle karein (Project A ke liye)
    document.body.classList.toggle("dark", newTheme);

    // 3. FIX: Ontology Wrapper ko dhund kar uspar bhi class lagayein
    const ontologyWrapper = document.querySelector(".ontology-wrapper");
    if (ontologyWrapper) {
      if (newTheme) {
        ontologyWrapper.classList.add("dark");
      } else {
        ontologyWrapper.classList.remove("dark");
      }
    }
  }

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // 🔥 Active link checker
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="ontology-navbar">
      <Link to="/ontology" className="ontology-nav-brand" onClick={closeMenu}>
        🌐 Geospatial KG Inference
      </Link>

      {/* Mobile Links */}
      <ul className={`ontology-nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/ontology" className={isActive("/ontology") ? "active" : ""} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/ontology/objectives" className={isActive("/ontology/objectives") ? "active" : ""} onClick={closeMenu}>Objectives</Link></li>
        <li><Link to="/ontology/methodology" className={isActive("/ontology/methodology") ? "active" : ""} onClick={closeMenu}>Methodology</Link></li>
        <li><Link to="/ontology/technology" className={isActive("/ontology/technology") ? "active" : ""} onClick={closeMenu}>Technology</Link></li>
        <li><Link to="/ontology/applications" className={isActive("/ontology/applications") ? "active" : ""} onClick={closeMenu}>Applications</Link></li>
        <li><Link to="/ontology/future" className={isActive("/ontology/future") ? "active" : ""} onClick={closeMenu}>Future Work</Link></li>
        <li><Link to="/ontology/publications" className={isActive("/ontology/publications") ? "active" : ""} onClick={closeMenu}>Publications</Link></li>
        <li><Link to="/ontology/contact" className={isActive("/ontology/contact") ? "active" : ""} onClick={closeMenu}>Contact</Link></li>
      </ul>

      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={toggleDark} className="ontology-dark-toggle" title="Toggle Mode">
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Hamburger Menu Icon */}
        <div className={`ontology-hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
