import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav className="portfolio-navbar">
      <div className="portfolio-logo">Dr. Sadhana Tiwari</div>

      <ul className="portfolio-nav-links">
        <li><Link to="/portfolio" onClick={handleClick}>Home</Link></li>
        <li><Link to="/portfolio/experience" onClick={handleClick}>Experience</Link></li>
        <li><Link to="/portfolio/education" onClick={handleClick}>Education</Link></li>
        <li><Link to="/portfolio/research" onClick={handleClick}>Research</Link></li>
        <li><Link to="/portfolio/publications" onClick={handleClick}>Publications</Link></li>
        <li><Link to="/portfolio/achievements" onClick={handleClick}>Achievements & Activities</Link></li>
        <li><Link to="/portfolio/contact" onClick={handleClick}>Contact</Link></li>
      </ul>

      <div className="portfolio-mobile-menu">
        <HiMenu
          className="portfolio-menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && (
          <div className="portfolio-dropdown">
            <Link to="/portfolio" onClick={handleClick}>Home</Link>
            <Link to="/portfolio/experience" onClick={handleClick}>Experience</Link>
            <Link to="/portfolio/education" onClick={handleClick}>Education</Link>
            <Link to="/portfolio/research" onClick={handleClick}>Research</Link>
            <Link to="/portfolio/publications" onClick={handleClick}>Publications</Link>
            <Link to="/portfolio/achievements" onClick={handleClick}>Achievements & Activities</Link>
            <Link to="/portfolio/contact" onClick={handleClick}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;