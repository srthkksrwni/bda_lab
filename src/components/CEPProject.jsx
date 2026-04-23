import React from "react";
import { motion } from "framer-motion";
import "../styles/CEPProject.css";

const CEPProject = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfEBRei1bffqJWcQlRProQNbRLNlns4uoWW8zW-t-G0Hy2pDA/viewform?usp=publish-editor";
  
  const team = [
    "Dr. Sadhana Tiwari", "Ritesh Chandra", "Santhosh", 
    "Amareshwar", "Sai Ganesh", "Akhil Kumar", "Abhinav Karthik"
  ];

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
            <h2 className="cep-title-premium">Complex Event Processing (CEP)</h2>
            <div className="cep-badge">Real-time Analytics</div>
          </div>

          {/* 1. Project Brief */}
          <div className="cep-info-section">
            <h4 className="cep-label">Project Brief</h4>
            <p className="cep-text">
              A Complex Event Processing (CEP) engine identifies critical health
              events by applying predefined medical thresholds to multiple sensor
              inputs such as body temperature and heart rate. By correlating events
              across heterogeneous and continuous data streams, the system enables
              accurate disease detection and supports timely, data-driven clinical
              decision-making for proactive health management.
            </p>
          </div>

          {/* 2. Objectives (Wapas add kar diya hai) */}
          <div className="cep-info-section">
            <h4 className="cep-label">Objectives</h4>
            <ul className="cep-list">
              <li>Analyze continuous streams of physiological sensor data</li>
              <li>Detect critical medical events using predefined thresholds</li>
              <li>Correlate heterogeneous sensor inputs for accurate event detection</li>
              <li>Support real-time, data-driven clinical decision-making</li>
              <li>Enable proactive health management through early disease detection</li>
            </ul>
          </div>

          {/* 3. Large Diagrams Section */}
          <div className="cep-large-diagrams">
            <div className="cep-diagram-block">
              <h4 className="cep-label">Workflow Diagram</h4>
              <div className="cep-img-wrapper">
                <img src="workflow_page-0001.jpg" alt="Workflow Diagram" className="cep-large-img" />
              </div>
            </div>

            <div className="cep-diagram-block">
              <h4 className="cep-label">Architecture Diagram</h4>
              <div className="cep-img-wrapper">
                <img src="archi4_page-0001.jpg" alt="Architecture Diagram" className="cep-large-img" />
              </div>
            </div>
          </div>

          {/* 4. Footer Buttons */}
          <div className="cep-footer">
            <div className="cep-btn-group">
              <a
                href="https://drive.google.com/file/d/1c-IArgBPIJhXWfLYOdcuIJKoEwO-O5_q/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="cep-btn-secondary"
              >
                Demo Video
              </a>
              
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cep-btn-primary"
              >
                Request GitHub Access ↗
              </a>
            </div>
          </div>
        </div>

        {/* --- 5. SEPARATE TEAM CARD (As per your Image) --- */}
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

export default CEPProject;
