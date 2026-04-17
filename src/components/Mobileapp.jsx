import React from "react";
import { motion } from "framer-motion";
import "../styles/CEPProject.css"; // Humne CEP wali CSS hi use ki hai consistent look ke liye

const MobileApplicationProject = () => {
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfEBRei1bffqJWcQlRProQNbRLNlns4uoWW8zW-t-G0Hy2pDA/viewform?usp=publish-editor";

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
            <h2 className="cep-title-premium">Mobile Application</h2>
            <div className="cep-badge">Cross-Platform Hub</div>
          </div>

          {/* 1. Project Brief */}
          <div className="cep-info-section">
            <h4 className="cep-label">Project Brief</h4>
            <p className="cep-text">
              The mobile application is designed for comprehensive health
              monitoring and is compatible with a wide range of devices
              including smartphones, tablets, and other smart devices. Serving
              as a central hub, the application provides real-time access to
              health monitoring data and enables patients to send messages
              indicating immediate needs or requests for assistance.
            </p>
          </div>

          {/* 2. Objectives */}
          <div className="cep-info-section">
            <h4 className="cep-label">Objectives</h4>
            <ul className="cep-list">
              <li>
                Provide real-time health monitoring access across mobile devices
              </li>
              <li>
                Enable prompt communication with assistants, doctors, and
                caregivers
              </li>
              <li>
                Support location-independent messaging for emergency and routine
                needs
              </li>
              <li>
                Deliver medication and exercise reminders tailored to patient
                requirements
              </li>
              <li>Improve treatment adherence and daily health management</li>
              <li>
                Offer a flexible, customizable, and user-friendly interface
              </li>
            </ul>
          </div>

          {/* 3. Screenshots/Diagrams Section (Placeholder for App UI) */}
          <div className="cep-large-diagrams">
            <div className="cep-diagram-block">
              <h4 className="cep-label">
                Hardware Setup: Flex Sensors and Microcontrollers
              </h4>
              <div className="cep-img-wrapper">
                <img
                  src="hardware_page-0001.jpg"
                  alt="Mobile App Interface"
                  className="cep-large-img"
                />
              </div>
            </div>
          </div>
          <div className="cep-large-diagrams">
            <div className="cep-diagram-block">
              <h4 className="cep-label">
                System Application Architecture
              </h4>
              <div className="cep-img-wrapper">
                <img
                  src="system_page-0001.jpg"
                  alt="Mobile App Interface"
                  className="cep-large-img"
                />
              </div>
            </div>
          </div>
          <div className="cep-large-diagrams">
            <div className="cep-diagram-block">
              <h4 className="cep-label">
                Screenshots
              </h4>
              <div className="cep-img-wrapper">
                <img
                  src="screen shot_page-0001.jpg"
                  alt="Mobile App Interface"
                  className="cep-large-img"
                />
              </div>
            </div>
          </div>
          

          {/* 4. Footer Buttons (All Links Restored) */}
          <div className="cep-footer">
            <div className="cep-btn-group">
              <a
                href="https://drive.google.com/file/d/1Qgr3wvgJzX0Nvu3zjJz780-N4AqSf-1h/view"
                target="_blank"
                rel="noopener noreferrer"
                className="cep-btn-secondary"
              >
                Demo Video + Setup
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
                {index !== team.length - 1 && (
                  <span className="team-separator">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="team-supervision">
            Under the supervision of Prof. Sonali Agarwal
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileApplicationProject;
