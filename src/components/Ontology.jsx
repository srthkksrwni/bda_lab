import React from "react";
import { motion } from "framer-motion";
import "../styles/CEPProject.css"; // Same CSS use kar rahe hain consistent look ke liye

const OntologyProject = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfEBRei1bffqJWcQlRProQNbRLNlns4uoWW8zW-t-G0Hy2pDA/viewform?usp=publish-editor";
  
  const team = [
    "Dr. Sadhana Tiwari", "Ritesh Chandra", "Anjali", 
    "Prableen Kaur"
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
            <h2 className="cep-title-premium">Ontology (LLDHEMO)</h2>
            <div className="cep-badge">Semantic Web & Big Data</div>
          </div>

          {/* 1. Project Brief */}
          <div className="cep-info-section">
            <h4 className="cep-label">Project Brief</h4>
            <p className="cep-text">
              Integrating Big Data and Semantic Web technologies to transform traditional 
              healthcare data into meaningful, machine-readable knowledge. Using R2RML, 
              relational data is converted into RDF and stored in HDFS for scalable processing. 
              The system enables both structured querying through HiveQL and semantic querying 
              using SPARQL by integrating the WUHM ontology.
            </p>
          </div>

          {/* 2. Objectives */}
          <div className="cep-info-section">
            <h4 className="cep-label">Objectives</h4>
            <ul className="cep-list">
              <li>Convert relational healthcare data into RDF format using R2RML</li>
              <li>Store and manage RDF data in a distributed environment (HDFS)</li>
              <li>Perform structured data analysis using HiveQL</li>
              <li>Integrate WUHM ontology for semantic enrichment</li>
              <li>Enable advanced querying and knowledge extraction using SPARQL</li>
            </ul>
          </div>

          {/* 3. Diagram Section (Large) */}
          {/* <div className="cep-large-diagrams">
            <div className="cep-diagram-block">
              <h4 className="cep-label">Ontology Framework & Data Transformation</h4>
              <div className="cep-img-wrapper">
                <img 
                  src="/images/projects/ontology-flow.png" 
                  alt="Ontology Flow Diagram" 
                  className="cep-large-img" 
                />
              </div>
            </div>
          </div> */}

          {/* 4. Footer Buttons */}
          <div className="cep-footer">
            <div className="cep-btn-group">
             <a
              href="https://drive.google.com/file/d/1XsuXqQJQWuNYg0N75Dag6jNHToeww-cG/view?ts=69e9fea8"
              target="_blank"
              rel="noopener noreferrer"
              className="gc3-btn-primary"
            >
              Demo Video and Setup
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

export default OntologyProject;
