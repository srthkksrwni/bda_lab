import React, { useState } from "react";
import "../styles/Projects.css";
import { Ongoingprojects } from "../data/Ongoingprojects";
import { Completedprojects } from "../data/Completedprojects";

function Projects() {
  const [activeTab, setActiveTab] = useState("ongoing");

  return (
    <section className="projects-container">
      <h2 className="section-title">Research Projects & Funding</h2>
      
      {/* Toggle Tabs */}
      <div className="tab-group">
        <button 
          className={`tab-btn ${activeTab === "ongoing" ? "active" : ""}`}
          onClick={() => setActiveTab("ongoing")}
        >
          Ongoing Projects
        </button>
        <button 
          className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          Completed Projects
        </button>
      </div>

      <div className="project-list">
        {(activeTab === "ongoing" ? Ongoingprojects : Completedprojects).map((proj) => (
          <div className="project-card" key={proj.id}>
            <div className="project-header">
              <span className="project-role">{proj.role}</span>
              <span className="project-duration">{proj.duration}</span>
            </div>
            
            <h3 className="project-title">{proj.title}</h3>
            
            <div className="project-details">
              <p><strong>Funding Agency:</strong> {proj.agency || "N/A"}</p>
              {proj.scheme && <p><strong>Scheme:</strong> {proj.scheme}</p>}
              {proj.brief && <p className="project-brief"><em>{proj.brief}</em></p>}
            </div>

            {proj.collaborators && proj.collaborators.length > 0 && (
              <div className="collaborators">
                <strong>Collaborators:</strong>
                <ul>
                  {proj.collaborators.slice(0, 3).map((collab, i) => (
                    <li key={i}>{collab}</li>
                  ))}
                  {proj.collaborators.length > 3 && <li>...and more</li>}
                </ul>
              </div>
            )}

            {proj.website && proj.website !== "" && (
              <a href={proj.website} target="_blank" rel="noreferrer" className="project-link">
                View Project Site →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
