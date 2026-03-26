import React from "react";
import "../styles/HealthMonitoringProject.css";

const HealthMonitoringProject = () => {
  return (
    <div className="hm-card">
      <h2 className="hm-title">Health Monitoring System</h2>

      {/* Brief */}
      <p className="hm-brief">
  The Health Monitoring System is an IoT-enabled solution designed to
  continuously monitor the physical and emotional well-being of individuals
  with lower-limb disabilities. It integrates biomedical sensors with Arduino
  and Raspberry Pi to track vital parameters such as cardiovascular activity,
  stress indicators, posture, and movement patterns. The system detects
  abnormalities in real time and generates timely alerts for caregivers,
  ensuring proactive health assistance.

  <br /><br />

  Edge-based AI processing enables low-latency analysis while minimizing
  reliance on continuous cloud connectivity. The system is semantically driven
  using the Lower-Limb Disability Health and Emotion Monitoring Ontology
  (LLDHEMO), which serves as the knowledge backbone by unifying biomedical,
  psychological, and contextual data within a single framework.

  <br /><br />

  Built upon the Basic Formal Ontology (BFO), LLDHEMO ensures semantic
  interoperability, logical consistency, and alignment with established
  biomedical standards. This ontology-centric approach supports multimodal data
  fusion, intelligent reasoning, and decision support for early detection and
  intervention.
</p>


      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
          <li>Provide a unified semantic framework for health and emotion monitoring</li>
          <li>Ensure interoperability using BFO-aligned biomedical standards</li>
          <li>Extend the SSN ontology to model IoT sensors and real-time observations</li>
          <li>Enable semantic annotation and multimodal data fusion</li>
          <li>Support ontology-driven reasoning for abnormality detection and decision support</li>
          <li>Facilitate seamless integration with healthcare systems and knowledge bases</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="hm-actions">
        {/* <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-demo-btn"
        >
          Live Demo
        </a> */}

        <a
          href="https://github.com/BDA-IIITA/WUHM-Ontology"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default HealthMonitoringProject;
