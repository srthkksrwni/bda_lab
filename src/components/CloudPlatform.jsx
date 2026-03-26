import React from "react";
import "../styles/HealthMonitoringProject.css";

const CloudPlatformProject = () => {
  return (
    <div className="hm-card">
      <h2 className="hm-title">
        Cloud-Based Platform with Cyber-Physical Integration
      </h2>

      {/* Brief */}
      <p className="hm-brief">
        The cloud-based platform enables scalable analytics, predictive modeling,
        and seamless system integration through a big data infrastructure built
        on Kafka, Hadoop, and Spark ML. By combining cloud-level intelligence
        with cyber-physical system integration, the platform supports continuous
        data ingestion, advanced analytics, and coordinated system responses
        across distributed healthcare environments.
      </p>

      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
          <li>Enable scalable data analytics using Kafka, Hadoop, and Spark ML</li>
          <li>Analyze multimodal sensor data streams through complex event processing</li>
          <li>Detect anomalies and composite risk situations in real time</li>
          <li>Personalize interventions and alerts using adaptive reinforcement learning</li>
          <li>Support both medical and psychological emergency detection</li>
          <li>Integrate low-latency edge responses with cloud-level predictive intelligence</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="hm-actions">
        <a
          href="https://drive.google.com/file/d/1Qgr3wvgJzX0Nvu3zjJz780-N4AqSf-1h/view"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-demo-btn"
        >
          Demo+Setup
        </a>

        <a
          href="https://github.com/BDA-IIITA/TIH_BimodalGestureRecognition"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default CloudPlatformProject;