import React from "react";
import {
  FaGraduationCap,
  FaAward,
  FaFlask,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/StudentsCorner.css";
import { Link } from "react-router-dom";

function StudentCorner() {
  return (
    <div className="student-container">
      <header className="student-header">
        <h1>Students Opportunities</h1>
        <p>Explore Research Opportunities & Guidelines</p>
        <div className="title-underline"></div>
      </header>

      {/* --- Section 1: Research Tracks --- */}
      <h2 className="section-title">Research & Project Opportunities</h2>
      <div className="opp-grid">
        <div className="opp-card">
          <div className="opp-icon">
            <FaGraduationCap />
          </div>
          <div className="opp-badge">2 Semesters</div>
          <h3>Advanced Research Track</h3>
          <p>
            For students seeking support for <b>Ph.D. or M.S. programs</b>.
            Requires long-term collaboration.
          </p>
        </div>

        <div className="opp-card">
          <div className="opp-icon">
            <FaAward />
          </div>
          <div className="opp-badge">1 Semester</div>
          <h3>Scholarship & Award Track</h3>
          <p>
            For students applying for <b>Google/IBM Scholarships</b> or similar
            prestigious awards.
          </p>
        </div>
      </div>

      {/* --- Section 2: Key Guidelines --- */}
      <div className="guidelines-section">
        <h3>Key Requirements & Policies</h3>
        <div className="guide-list">
          <div className="guide-item">
            <span className="check-icon">✓</span>
            <p>
              <b>Solid Achievements:</b> Time span is just the base. Strong
              recommendations are for those with{" "}
              <b>software deliverables or publications</b>.
            </p>
          </div>
          <div className="guide-item">
            <span className="check-icon">✓</span>
            <p>
              <b>Application Cap:</b> To maintain quality, a maximum of{" "}
              <b>7 university recommendations</b> is allowed per student.
            </p>
          </div>
          <div className="guide-item email-box">
            <FaEnvelope className="mail-icon" />
            <p>
              Official requests only:
              <Link to="/contact" className="contact-link-style">
                 &nbsp; Send Request →
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* --- Section 3: Research Labs --- */}
      <div className="labs-grid">
        <div className="lab-box">
          <div className="lab-header">
            <FaFlask /> BDA LAB
          </div>
          <p>Big Data Analytics Lab</p>
          <span className="room">Room: 5243, CC-III Building</span>
          {/* <button className="lab-btn">Available Projects</button> */}
        </div>

        <div className="lab-box">
          <div className="lab-header">
            <FaLaptopCode /> SERL LAB
          </div>
          <p>Software Engineering Research Lab</p>
          <span className="room">Room: 5302, CC-III Building</span>
          {/* <button className="lab-btn">Available Projects</button> */}
        </div>
      </div>
    </div>
  );
}

export default StudentCorner;
