import React from "react";
import { phdStudents } from "../data/phdStudents";
import "../styles/phdscholars.css";

const OngoingPhd = () => {
  return (
    <section id="OngoingPhd" className="phd-section-wrapper">
      <h2 className="phd-display-heading">PhD Scholars</h2>
      
      <div className="phd-members-grid">
        {phdStudents.map((student, index) => (
          <div key={index} className="phd-individual-card">
            <div className="phd-img-container">
              <img 
                src={student.img || "default-avatar.png"} 
                alt={student.name} 
                className="phd-profile-photo" 
              />
            </div>

            <div className="phd-details-box">
              <h3 className="phd-student-name">{student.name}</h3>
              <p className="phd-student-role">PhD Research Scholar</p>
              
              <div className="phd-email-pill">
                <span className="phd-icon">📧</span>
                <a href={`mailto:${student.email}`} className="phd-email-link">
                  {student.email}
                </a>
              </div>

              {/* Thesis Topic Section - New Additon */}
              {student.thesisTopic && (
                <div className="phd-thesis-section" style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                  <strong style={{ color: '#555' }}>Thesis Topic:</strong>
                  <p style={{ fontStyle: 'italic', margin: '5px 0', color: '#333' }}>
                    {student.thesisTopic}
                  </p>
                </div>
              )}

              {student.cvLink && (
                <div className="phd-action">
                  <a 
                    href={student.cvLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="phd-homepage-btn"
                  >
                    Google Scholar Profile →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingPhd;
