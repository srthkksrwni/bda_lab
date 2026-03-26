import React from "react";
import "../styles/GestureCarepage.css";
// import diagram from "../assets/diagram.png";

export default function GestureCarePage() {
  return (
    <div id= "start" className="gc3-container">

      {/* HERO */}
      <section className="gc3-hero">
        <div className="gc3-hero-content">
          <h1>Bi-Modal Gesture Recognition Assisted Care System</h1>
          <p>
            A smart healthcare communication platform that combines artificial intelligence,
            computer vision, and wearable sensing to enable reliable patient–caregiver interaction
            in clinical and assisted-care environments.
          </p>

          <div className="gc3-hero-buttons">
            <a href="https://drive.google.com/file/d/1hkFqySeEZwQCm5bzBhfdFMONbMqvC-iV/view?usp=sharinghttps://drive.google.com/file/d/1hkFqySeEZwQCm5bzBhfdFMONbMqvC-iV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="gc3-btn-primary">
              Demo Video and Setup
            </a>
            <a href="https://github.com/BDA-IIITA/TIH_BimodalGestureRecognition" target="_blank" rel="noopener noreferrer" className="gc3-btn-secondary">
              GitHub Repository
            </a>
          </div>
        </div>
      </section>

      {/* TOP GRID */}
      <section className="gc3-top-grid">
        <div className="gc3-box">
          <h2>Project Overview</h2>
          <p>
            The system establishes a natural gesture-based communication interface for patients
            who face physical or cognitive communication barriers, enabling dignified and
            accessible interaction in healthcare environments.
          </p>
          <p>
            The bimodal architecture ensures reliability, fault tolerance, and clinical-grade robustness.
          </p>
        </div>

        <div className="gc3-box">
          <h2>Core Objectives</h2>
          <p>
            Universal accessibility, clinical reliability, real-time response, system resilience,
            and scalable deployment form the foundation of the platform design philosophy.
          </p>
          <p>
            The system prioritizes patient dignity, safety, and long-term healthcare integration.
          </p>
        </div>
      </section>

      {/* ARCHITECTURE TIMELINE */}
      <section className="gc3-architecture-alt">
        <h2 className="gc3-arch-title">Bi-Modal System Architecture</h2>

        <div className="gc3-arch-timeline">
          {[{
            title: "Gesture Acquisition",
            desc: "Patient gestures are captured through both camera-based vision systems and wearable sensor interfaces, enabling parallel data acquisition through independent modalities."
          }, {
            title: "Feature Extraction",
            desc: "Visual landmarks and sensor deformation signals are transformed into structured numerical feature representations suitable for machine learning processing."
          }, {
            title: "AI Inference Layer",
            desc: "Parallel ML pipelines perform real-time classification using trained models on both modalities, ensuring redundancy and reliability."
          }, {
            title: "Decision Fusion Engine",
            desc: "Outputs from both models are fused through a decision logic layer that resolves conflicts and maximizes confidence reliability."
          }, {
            title: "Communication Layer",
            desc: "Validated commands are transmitted through secure low-latency channels to caregiver dashboards and hospital systems."
          }].map((step, idx) => (
            <div className="gc3-arch-step" key={idx}>
              <div className="gc3-arch-node">{idx + 1}</div>
              <div className="gc3-arch-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gc3-arch-diagram">
          <img src={"/diagram.png"} alt="System Architecture Diagram" />
          <img src={"/diagram1.png"} alt="System Architecture Diagram" />
          <span>Bi-Modal Architecture System Diagram</span>
        </div>
      </section>

      {/* SYSTEM STREAM (matches gc3-pipeline CSS) */}
      <section className="gc3-pipeline">
        <div className="gc3-pipeline-grid">
          {[{
            icon: "AI",
            title: "Vision Intelligence",
            desc: "MediaPipe landmark extraction and machine-learning classification enable non-contact real-time gesture recognition using camera-based perception."
          }, {
            icon: "S",
            title: "Sensor Intelligence",
            desc: "Wearable flex sensors provide environment-independent gesture detection, ensuring reliability in all lighting and clinical conditions."
          }, {
            icon: "↔",
            title: "System Communication",
            desc: "Real-time processing pipelines and WebSocket infrastructure enable low-latency alert transmission to caregiver dashboards."
          }, {
            icon: "✓",
            title: "Results & Validation",
            desc: "Experimental evaluation demonstrates high accuracy, low latency, and strong fault-tolerance through bimodal redundancy."
          }, {
            icon: "→",
            title: "Future Roadmap",
            desc: "Future development includes deep learning integration, hospital system interoperability, large-scale clinical deployment, and regulatory compliance."
          }].map((item, idx) => (
            <div className="gc3-pipeline-card" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="gc3-team">
        <h2>Project Team</h2>
        <p className="gc3-team-members">
          Sadhana Tiwari · Ritesh Chandra ·  Tanisha · Prableen Kaur · Swarup Narkhede · Shravani Wange · Pratik Pansare
        </p>
        <p className="gc3-guide">Under the supervision of Prof. Sonali Agarwal</p>
      </section>

      {/* FOOTER */}
      {/* <footer className="gc3-footer">
        <p>Bi-Modal Gesture Recognition Assisted Care System</p>
        <span>AI · Healthcare · Smart Hospitals · Assistive Technology</span>
      </footer> */}

    </div>
  );
}
