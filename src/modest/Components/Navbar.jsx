import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path) => {
    setOpen(false);

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#6B705C] font-semibold"
      : "text-black hover:text-[#867a6b]";

  return (
    <header className="modest-navbar">
      <div className="modest-navbar-container">
        <NavLink
          to="/modest"
          onClick={() => handleNavClick("/modest")}
          className="modest-flex-row modest-gap-3 modest-align-center"
        >
          <img
            src="/Image/image.png"
            alt="MODEST Logo"
            className="modest-navbar-logo"
          />

          <span className="modest-navbar-brand-title">
            MODEST
          </span>
        </NavLink>

        <button
          onClick={() => setOpen(!open)}
          className="modest-mobile-menu-toggle"
        >
          ☰
        </button>

        <nav className="modest-desktop-nav">
          <ul className="modest-desktop-nav-list">
            <li>
              <NavLink
                to="/modest"
                onClick={() => handleNavClick("/modest")}
                className={linkClass}
              >
                Welcome
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/about"
                onClick={() => handleNavClick("/modest/about")}
                className={linkClass}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/research-publications"
                onClick={() => handleNavClick("/modest/research-publications")}
                className={linkClass}
              >
                Research & Publications
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/framework"
                onClick={() => handleNavClick("/modest/framework")}
                className={linkClass}
              >
                The MODEST Framework
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/services"
                onClick={() => handleNavClick("/modest/services")}
                className={linkClass}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/newsevents"
                onClick={() => handleNavClick("/modest/newsevents")}
                className={linkClass}
              >
                News & Events
              </NavLink>
            </li>

            <li className="group relative">
              <button className="modest-nav-text-btn">
                Team <i className="fa-solid fa-caret-down modest-ml-1"></i>
              </button>

              <div className="modest-dropdown-menu">
                <NavLink
                  to="/modest/members"
                  onClick={() => handleNavClick("/modest/members")}
                  className="modest-dropdown-link"
                >
                  Members
                </NavLink>

                <NavLink
                  to="/modest/students"
                  onClick={() => handleNavClick("/modest/students")}
                  className="modest-dropdown-link"
                >
                  Students
                </NavLink>
              </div>
            </li>

            <li>
              <NavLink
                to="/modest/contact"
                onClick={() => handleNavClick("/modest/contact")}
                className={linkClass}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {open && (
        <nav className="modest-mobile-nav">
          <ul className="modest-mobile-nav-list">
            <li>
              <NavLink
                to="/modest"
                onClick={() => handleNavClick("/modest")}
                className={linkClass}
              >
                Welcome
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/about"
                onClick={() => handleNavClick("/modest/about")}
                className={linkClass}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/research-publications"
                onClick={() => handleNavClick("/modest/research-publications")}
                className={linkClass}
              >
                Research & Publications
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/framework"
                onClick={() => handleNavClick("/modest/framework")}
                className={linkClass}
              >
                The MODEST Framework
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/services"
                onClick={() => handleNavClick("/modest/services")}
                className={linkClass}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/newsevents"
                onClick={() => handleNavClick("/modest/newsevents")}
                className={linkClass}
              >
                News & Events
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/members"
                onClick={() => handleNavClick("/modest/members")}
                className={linkClass}
              >
                Members
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/students"
                onClick={() => handleNavClick("/modest/students")}
                className={linkClass}
              >
                Students
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/modest/contact"
                onClick={() => handleNavClick("/modest/contact")}
                className={linkClass}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;