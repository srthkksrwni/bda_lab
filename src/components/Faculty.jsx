import React from "react";
import { ExternalLink, Award, BrainCircuit, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/Faculty.css";


export const facultyData = [
  {
    name: "Prof. Sonali Agarwal",
    roles: [
      "Head, Centre for Intelligent Robotics (CIR)",
      "Professor-In-Charge, Students’ Holistic Growth, Inclusive Care and Mental Wellness",
      "General Chair: ISEC 2023 | ICONIP 2022 | BDA 2021"
    ],
    email: "sonali@iiita.ac.in",
    img: "/Sonali Maam.jpg", 
    scholarLink: "https://scholar.google.com/citations?user=hPvt6d8AAAAJ&hl=en",
    profile: "https://profile.iiita.ac.in/sonali/",
    cirLab: "https://cir.iiita.ac.in/"
  }
];

function Faculty() {
  return (
    <div className="fac-page-container">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fac-main-title"
      >
        FACULTY
      </motion.h1>

      <div className="fac-grid">
        {facultyData.map((f, index) => (
          <motion.div 
            className="fac-member-card" 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Image Section */}
            <div className="fac-img-wrapper">
              <img src={f.img} alt={f.name} className="fac-profile-img" />
            </div>

            <h3 className="fac-member-name">{f.name}</h3>
            
            {/* Roles Section */}
            <div className="fac-roles-container">
              {f.roles.map((role, i) => (
                <p key={i} className="fac-member-role">{role}</p>
              ))}
            </div>

            {/* Email with Icon */}
            <div className="fac-contact-info">
              <a href={`mailto:${f.email}`} className="fac-email-link">
                <Mail size={16} /> {f.email}
              </a>
            </div>

            {/* --- THREE MAIN LINKS SECTION --- */}
            <div className="fac-actions-stack">
              <a href={f.profile} target="_blank" rel="noreferrer" className="fac-btn btn-primary-blue">
                <ExternalLink size={18} /> Personal Homepage
              </a>
              
              <a href={f.scholarLink} target="_blank" rel="noreferrer" className="fac-btn btn-outline-scholar">
                <Award size={18} /> Google Scholar Profile
              </a>

              <a href={f.cirLab} target="_blank" rel="noreferrer" className="fac-btn btn-outline-lab">
                <BrainCircuit size={18} /> Visit Centre for Intelligent Robotics
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
