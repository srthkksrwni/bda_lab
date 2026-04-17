import React from "react";
import "../styles/HealthMonitoringProject.css";

const HealthMonitoringProject = () => {
  const googleFormUrl = "https://google.com";

  return (
    <div className="hm-card">
      <h2 className="hm-title">Health Monitoring System</h2>

      {/* Brief Section */}
      <p className="hm-brief">
        The Health Monitoring System is an IoT-enabled solution designed to
        continuously monitor the physical and emotional well-being of
        individuals with lower-limb disabilities...
      </p>

      {/* Objectives Section */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
          <li>Provide a unified semantic framework for health monitoring</li>
          <li>Ensure interoperability using BFO-aligned standards</li>
          <li>Enable semantic annotation and multimodal data fusion</li>
        </ul>
      </div>

      {/* Actions Section */}
      <div className="hm-actions">
        {/* 2. Direct Link Jo New Tab Mein Khulega */}
        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default HealthMonitoringProject;
