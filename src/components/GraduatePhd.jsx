import React from "react";
import { graduatedphd } from "../data/graduatedphd";
import "../styles/graduatedphd.css"; // Ensure ye file import ho

const GraduatedPhd = () => {
  return (
    <section id="GraduatedPhd" className="grad-section-wrapper">
      <h2 className="grad-display-heading">Graduated PhD Students</h2>
      
      <div className="grad-members-grid">
        {graduatedphd.map((student, index) => (
          <div key={index} className="grad-individual-card">
            {/* Image with Premium Ring */}
            <div className="grad-img-container">
              <img 
                src={student.img || "default-avatar.png"} 
                alt={student.name} 
                className="grad-profile-photo" 
              />
            </div>

            {/* Content Details (Centered) */}
            <div className="grad-details-box">
              <h3 className="grad-student-name">{student.name}</h3>
              <p className="grad-student-role">Graduated PhD Scholar</p>
              
              <div className="grad-email-pill">
                <span className="grad-icon">📧</span>
                <a href={`mailto:${student.email}`} className="grad-email-link">
                  {student.email}
                </a>
              </div>

              {student.scholarLink && (
                <div className="grad-action">
                  <a 
                    href={student.scholarLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="grad-scholar-btn"
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

export default GraduatedPhd;
