import React from "react";
import { motion } from "framer-motion";
import "../styles/CEPProject.css"; // Sabhi modules ke liye ek hi professional CSS use ho rahi hai

const CloudPlatformProject = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfEBRei1bffqJWcQlRProQNbRLNlns4uoWW8zW-t-G0Hy2pDA/viewform?usp=publish-editor";
  
  const team = [
    "Dr. Sadhana Tiwari", "Ritesh Chandra", 
    "Prableen Kaur", "Swarup Narkhede", "Shravani Wange", "Pratik Pansare"
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
            <h2 className="cep-title-premium">Cloud-Based Platform</h2>
            <div className="cep-badge">Cyber-Physical Integration</div>
          </div>

          {/* 1. Project Brief */}
          <div className="cep-info-section">
            <h4 className="cep-label">Project Brief</h4>
            <p className="cep-text">
              The cloud-based platform enables scalable analytics, predictive
              modeling, and seamless system integration through a big data
              infrastructure built on Kafka, Hadoop, and Spark ML. By combining
              cloud-level intelligence with cyber-physical system integration, the
              platform supports continuous data ingestion, advanced analytics, and
              coordinated system responses across distributed healthcare environments.
            </p>
          </div>

          {/* 2. Objectives */}
          <div className="cep-info-section">
            <h4 className="cep-label">Objectives</h4>
            <ul className="cep-list">
              <li>Enable scalable data analytics using Kafka, Hadoop, and Spark ML</li>
              <li>Analyze multimodal sensor data streams through complex event processing</li>
              <li>Detect anomalies and composite risk situations in real time</li>
              <li>Personalize interventions and alerts using adaptive reinforcement learning</li>
              <li>Support both medical and psychological emergency detection</li>
              <li>Integrate low-latency edge responses with cloud-level predictive intelligence</li>
            </ul>
          </div>

          {/* 3. Architecture/Diagram Section */}
          {/* <div className="cep-large-diagrams">
            <div className="cep-diagram-block">
              <h4 className="cep-label">System Architecture & Data Flow</h4>
              <div className="cep-img-wrapper">
                <img 
                  src="/images/projects/cloud-architecture.png" 
                  alt="Cloud Platform Architecture" 
                  className="cep-large-img" 
                />
              </div>
            </div>
          </div> */}

          {/* 4. Footer Buttons */}
          <div className="cep-footer">
            <div className="cep-btn-group">
              <a
                href="https://drive.google.com/file/d/1Qgr3wvgJzX0Nvu3zjJz780-N4AqSf-1h/view"
                target="_blank"
                rel="noopener noreferrer"
                className="cep-btn-secondary"
              >
                Demo + Setup
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

        {/* --- 5. SEPARATE TEAM CARD --- */}
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

export default CloudPlatformProject;
