import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/Navbar.css";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    setActiveMenu(null);
  };

  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => setActiveMenu(null);

  return (
    <nav className="navbar" ref={navRef}>
      {/* LEFT LOGO */}
      <div className="nav-left">
        <img src="logo.png" alt="BDA LAB Logo" className="nav-logo" />
        <span className="logo">BDA LAB</span>
      </div>

      {/* CENTER NAV */}
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          {/* ABOUT */}
          <li
            className="dropdown"
            style={{ position: "relative", listStyle: "none" }}
            onMouseEnter={() => setActiveMenu("about")} // Mouse aate hi open
            onMouseLeave={() => setActiveMenu(null)} // Mouse jaate hi close
          >
            <span style={{ cursor: "pointer", paddingBottom: "25px" }}>
              {" "}
              About{" "}
            </span>
            {activeMenu === "about" && (
              <div className="dropdown-menu">
                <Link to="/#mission" onClick={handleLinkClick}>
                  Vision & Mission
                </Link>
                <Link to="/#objectives" onClick={handleLinkClick}>
                  Lab Objectives
                </Link>
                <Link to="/#funding" onClick={handleLinkClick}>
                  Funding & Collaboration
                </Link>
              </div>
            )}
          </li>

          {/* PEOPLE */}
          <li
            className="dropdown"
            style={{ position: "relative", listStyle: "none" }}
            onMouseEnter={() => setActiveMenu("people")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span style={{ cursor: "pointer", paddingBottom: "25px" }}>
              People
            </span>

            {activeMenu === "people" && (
              <div className="dropdown-menu">
                <Link to="/faculty" onClick={handleLinkClick}>
                  Faculty
                </Link>
                <Link to="/students" onClick={handleLinkClick}>
                  Students
                </Link>
              </div>
            )}
          </li>

          {/* RESEARCH */}
          <li
            className="dropdown"
            style={{ position: "relative", listStyle: "none" }}
            onMouseEnter={() => setActiveMenu("research")} // Mouse aate hi open
            onMouseLeave={() => setActiveMenu(null)} // Mouse jaate hi close
          >
            <span style={{ cursor: "pointer", paddingBottom: "25px" }}>
              Research{" "}
            </span>
            {activeMenu === "research" && (
              <div className="dropdown-menu">
                <Link to="/publications" onClick={handleLinkClick}>
                  Publications
                </Link>
                <Link to="/resources" onClick={handleLinkClick}>
                  Resources
                </Link>
                <Link to="/datasets" onClick={handleLinkClick}>
                  Datasets
                </Link>
              </div>
            )}
          </li>

          {/* COURSES */}
          <li
            className="dropdown"
            style={{ position: "relative", listStyle: "none" }}
            onMouseEnter={() => setActiveMenu("courses")} // Mouse aate hi open
            onMouseLeave={() => setActiveMenu(null)} // Mouse jaate hi close
          >
            <span style={{ cursor: "pointer", paddingBottom: "25px" }}>
              Courses{" "}
            </span>
            {activeMenu === "courses" && (
              <div className="dropdown-menu">
                <Link
                  to="https://profile.iiita.ac.in/sonali/courses.html"
                  onClick={handleLinkClick}
                >
                  Big Data Analytics
                </Link>
                <Link
                  to="https://profile.iiita.ac.in/sonali/courses.html"
                  onClick={handleLinkClick}
                >
                  AI & Machine Learning
                </Link>
                <Link
                  to="https://profile.iiita.ac.in/sonali/courses.html"
                  onClick={handleLinkClick}
                >
                  Data Visualisation
                </Link>
                <Link
                  to="https://profile.iiita.ac.in/sonali/courses.html"
                  onClick={handleLinkClick}
                >
                  Software Engineering
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/projects" onClick={toggleMobileMenu}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/events" onClick={toggleMobileMenu}>
              Events
            </Link>
          </li>

          <li>
            <Link to="studentCorner" onClick={toggleMobileMenu}>
              Students Corner
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>

          <li>
            <Link to="/blog" onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT EMPTY */}
      <div className="nav-right"></div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMobileOpen && (
        <div className="mobile-menu">
          {/* 1. HOME */}
          <Link to="/" onClick={toggleMobileMenu}>
            Home
          </Link>

          {/* 2. ABOUT DROPDOWN */}
          <div className="mobile-dropdown">
            <span onClick={() => toggleMobileDropdown("about")}>About</span>
            {mobileDropdown === "about" && (
              <div className="mobile-submenu">
                <Link to="/#mission" onClick={toggleMobileMenu}>
                  Vision & Mission
                </Link>
                <Link to="/#objectives" onClick={toggleMobileMenu}>
                  Lab Objectives
                </Link>
                <Link to="/#funding" onClick={toggleMobileMenu}>
                  Funding & Collaboration
                </Link>
              </div>
            )}
          </div>

          {/* 3. PEOPLE DROPDOWN */}
          <div className="mobile-dropdown">
            <span onClick={() => toggleMobileDropdown("people")}>People</span>
            {mobileDropdown === "people" && (
              <div className="mobile-submenu">
                <Link to="/faculty" onClick={toggleMobileMenu}>
                  Faculty
                </Link>
                <Link to="/students" onClick={toggleMobileMenu}>
                  Students
                </Link>
              </div>
            )}
          </div>

          {/* 4. RESEARCH DROPDOWN */}
          <div className="mobile-dropdown">
            <span onClick={() => toggleMobileDropdown("research")}>
              Research
            </span>
            {mobileDropdown === "research" && (
              <div className="mobile-submenu">
                <Link to="/publications" onClick={toggleMobileMenu}>
                  Publications
                </Link>
                <Link to="/resources" onClick={toggleMobileMenu}>
                  Resources
                </Link>
                <Link to="/datasets" onClick={toggleMobileMenu}>
                  Datasets
                </Link>
              </div>
            )}
          </div>

          {/* 5. NEW BUTTONS */}
          <Link to="/projects" onClick={toggleMobileMenu}>
            Projects
          </Link>
          <Link to="/events" onClick={toggleMobileMenu}>
            Events
          </Link>
          <Link to="studentCorner" onClick={toggleMobileMenu}>
            Students Corner
          </Link>
          <Link to="/contact" onClick={toggleMobileMenu}>
            Contact
          </Link>
          <Link to="/blog" onClick={toggleMobileMenu}>
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
