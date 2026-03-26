import React from "react";
import "../styles/HealthMonitoringProject.css";

const CEPProject = () => {
  return (
    <div className="hm-card">
      <h2 className="hm-title">CEP (Complex Event Processing)</h2>

      {/* Brief */}
      <p className="hm-brief">
        A Complex Event Processing (CEP) engine identifies critical health
        events by applying predefined medical thresholds to multiple sensor
        inputs such as body temperature and heart rate. By correlating events
        across heterogeneous and continuous data streams, the system enables
        accurate disease detection and supports timely, data-driven clinical
        decision-making for proactive health management.
      </p>

      {/* Objectives */}
      <div className="hm-objectives">
        <h4>Objectives</h4>
        <ul>
          <li>Analyze continuous streams of physiological sensor data</li>
          <li>Detect critical medical events using predefined thresholds</li>
          <li>Correlate heterogeneous sensor inputs for accurate event detection</li>
          <li>Support real-time, data-driven clinical decision-making</li>
          <li>Enable proactive health management through early disease detection</li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="hm-actions">
        <a
          href="https://drive.google.com/drive/folders/14tm_QYLET3aurbaOwde0xT5UP3q4gVQB?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-demo-btn"
        >
          Demo Video 
        </a>

        <a
          href="https://github.com/BDA-IIITA/TiH-Project-2"
          target="_blank"
          rel="noopener noreferrer"
          className="hm-btn hm-github-btn"
        >
          Github Repo 
        </a>
      </div>
    </div>
  );
};

export default CEPProject;