import React from "react";
import "../styles/objective.css"

function CoreObjective() { 
  return ( 
    <section id="objectives" className="objectives-section">
      <div className="section-header">
        <h2 className="section-title">Core Objectives</h2>
        <div className="title-underline"></div>
      </div>

      <div className="objectives-grid">
        {/* Card 1 */}
        <div className="objective-card fade-in">
          <div className="icon-box">🔬</div>
          <h3>Research Ecosystem</h3>
          <p>
            Providing a research-oriented environment for students and
            researchers to work on large-scale data analytics and intelligent
            systems.
          </p>
        </div>

        {/* Card 2 */}
        <div className="objective-card fade-in">
          <div className="icon-box">🤝</div>
          <h3>Global Synergy</h3>
          <p>
            Strengthening collaboration between academia and industry through
            sponsored projects and applied research initiatives.
          </p>
        </div>

        {/* Card 3 */}
        <div className="objective-card featured fade-in">
          <div className="icon-box">⚙️</div>
          <h3>Strategic Goals</h3>
          <ul>
            <li>Design scalable ML frameworks</li>
            <li>High-quality research publications</li>
            <li>Interdisciplinary research support</li>
            <li>Practical industrial solutions</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="objective-card featured fade-in">
          <div className="icon-box">🚀</div>
          <h3>Long-term Vision</h3>
          <ul>
            <li>Advanced computing infrastructure</li>
            <li>International collaborations</li>
            <li>Skill-based student training</li>
            <li>Impact-oriented research</li>
          </ul>
        </div>
      </div>
    </section>
  ); 
}

export default CoreObjective; 
