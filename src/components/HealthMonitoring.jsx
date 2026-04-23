import React from "react";
import { motion } from "framer-motion";
import "../styles/CEPProject.css"; // Same premium CSS for consistency

const HealthMonitoringProject = () => {
  const googleFormUrl = "https://google.com";

  // Team names as per your provided code
  const team = ["Dr. Sadhana Tiwari", "Ritesh Chandra"];

  return (
    <div className="cep-page-wrapper">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="cep-container"
      >
        <div className="cep-glass-card">
          {/* Header */}
          <div className="cep-header">
            <h2 className="cep-title-premium">Health Monitoring System</h2>
            <div className="cep-badge">IoT & Semantic Web</div>
          </div>

          {/* 1. Project Brief (Restored) */}
          <div className="cep-info-section">
            <h4 className="cep-label">Project Brief</h4>
            <p className="cep-text">
              An IoT-enabled solution designed to continuously monitor the physical and 
              emotional well-being of individuals with lower-limb disabilities using 
              semantic reasoning and BFO-aligned standards.
            </p>
          </div>

          {/* 2. Key Objectives (Restored) */}
          <div className="cep-info-section">
            <h4 className="cep-label">Key Objectives</h4>
            <ul className="cep-list">
              <li>Unified semantic framework for health monitoring</li>
              <li>Interoperability via BFO-aligned standards</li>
              <li>Multimodal data fusion & semantic annotation</li>
            </ul>
          </div>

          {/* 3. Diagram Section (Placeholder if you want to add later) */}
          {/* <div className="cep-large-diagrams">
            <div className="cep-diagram-block">
              <h4 className="cep-label">System Architecture</h4>
              <div className="cep-img-wrapper">
                <img 
                  src="/images/projects/health-monitor-diag.png" 
                  alt="Health Monitoring Diagram" 
                  className="cep-large-img" 
                />
              </div>
            </div>
          </div> */}

          {/* 4. Footer Buttons */}
          <div className="cep-footer">
            <div className="cep-btn-group">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cep-btn-primary"
              >
                Request GitHub Access ↗
              </a>
              <a
                href="https://drive.google.com/file/d/1yDeTdiFdN4NswLX2IoV7UpA_lIhAMltC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cep-btn-primary"
              >
                Demo Video ↗
              </a>
            </div>
          </div>
        </div>

        {/* --- 5. SEPARATE TEAM CARD (Niche alag card mein) --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="team-separate-card"
        >
          <h3 className="team-card-title">Project Team</h3>
          <div className="team-names-container">
            {team.map((name, index) => (
              <React.Fragment key={index}>
                <span className="team-member-name">{name}</span>
                {index !== team.length - 1 && <span className="team-separator">•</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="team-supervision">Under the supervision of Prof. Sonali Agarwal</p>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default HealthMonitoringProject;
