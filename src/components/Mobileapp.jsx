import React from "react";
import "../styles/HealthMonitoringProject.css";

const MobileApplicationProject = () => {
  return (
    <div className="hm-card">
      <h2 className="hm-title">Mobile Application</h2>

      {/* Brief */}
      <p className="hm-brief">
        The mobile application is designed for comprehensive health monitoring
        and is compatible with a wide range of devices including smartphones,
        tablets, and other smart devices. Serving as a central hub, the
        application provides real-time access to health monitoring data and
        enables patients to send messages indicating immediate needs or requests
        for assistance.
      </p>

      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
          <li>Provide real-time health monitoring access across mobile devices</li>
          <li>Enable prompt communication with assistants, doctors, and caregivers</li>
          <li>Support location-independent messaging for emergency and routine needs</li>
          <li>Deliver medication and exercise reminders tailored to patient requirements</li>
          <li>Improve treatment adherence and daily health management</li>
          <li>Offer a flexible, customizable, and user-friendly interface</li>
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
          Demo Video+Setup
        </a>

        <a
          href="https://github.com/BDA-IIITA/TIH_BimodalGestureRecognition_App"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          Code
        </a>

        <a
          href="https://drive.google.com/file/d/1rpakH9APjQjQe_tmVkb6BlooHNvjAcHB/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          App
        </a>

        <a
          href="http://1.208.108.242:58725/"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          Live Demo 
        </a>
        
      </div>
    </div>
  );
};

export default MobileApplicationProject;