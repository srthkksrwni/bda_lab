import React from "react";
import "../styles/Faculty.css";

// Data ko array format mein rakha hai for cleaner rendering
export const facultyData = [
  {
    name: "Prof. Sonali Agarwal",
    roles: [
      "Head, Centre for Intelligent Robotics (CIR)",
      "Professor-In-Charge, Students’ Holistic Growth, Inclusive Care and Mental Wellness",
      "Action Editor, Neural Networks",
      "General Chair: ISEC 2023 | ICONIP 2022 | BDA 2021"
    ],
    email: "sonali@iiita.ac.in",
    phone: "9415647042",
    img: "Sonali Maam.jpg",
    scholarLink: "https://scholar.google.com/citations?user=hPvt6d8AAAAJ&hl=en" // Apni link yahan dalein
  }
];

function Faculty() {
  return (
    <div className="fac-page-container">
      <h1 className="fac-main-title">FACULTY</h1>

      <div className="fac-grid">
        {facultyData.map((f, index) => (
          <div className="fac-member-card" key={index}>
            <div className="fac-img-wrapper">
              <img src={f.img} alt={f.name} className="fac-profile-img" />
            </div>

            <h3 className="fac-member-name">{f.name}</h3>
            
            {/* Multiple Roles Rendering */}
            <div className="fac-roles-container">
              {f.roles.map((role, i) => (
                <p key={i} className="fac-member-role">{role}</p>
              ))}
            </div>

            <div className="fac-contact-info">
              <p className="fac-email"><strong>Email:</strong> {f.email}</p>
              <p className="fac-phone"><strong>Mobile:</strong> {f.phone}</p>
            </div>

            {/* Google Scholar / CV Link */}
            {f.scholarLink && (
              <a 
                href={f.scholarLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="fac-scholar-btn"
              >
                Google Scholar Profile →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
