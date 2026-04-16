import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Students.css";
import { mtechStudents } from "../data/mtechStudents";
import OngoingPhd from "./OngoingPhd";
import GraduatedPhd from "./GraduatePhd";
import { postdoc } from "../data/postdoc";

function Students() {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [selectedBatch, setSelectedBatch] = useState("2025");

  const tabs = [
    { id: "postdoc", label: "Post-Doctorate" }, // Added to tabs
    { id: "ongoing", label: "PhD Scholars" },
    { id: "graduated", label: "Graduated PhD" },
    { id: "mtech", label: "M.Tech Scholars" },
  ];

  const years = [...new Set(mtechStudents.map((s) => s.batch))]
    .sort()
    .reverse();

  return (
    <div className="students-page">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="main-title"
        >
          LAB MEMBERS
        </motion.h1>

        <div className="student-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`student-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="students-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* --- POST-DOCTORATE SECTION --- */}
              {/* --- POST-DOCTORATE SECTION --- */}
              {activeTab === "postdoc" && (
                <section className="postdoc-section">
                  <div className="member-grid">
                    {postdoc.map((scholar, index) => (
                      <div key={index} className="member-card postdoc-card">
                        <div className="avatar-wrapper">
                          {scholar.img ? (
                            <img
                              src={`/images/students/${scholar.img}`}
                              alt={scholar.name}
                              className="member-img"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          ) : (
                            <div className="initials-avatar">
                              {scholar.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">{scholar.name}</h3>
                          <p className="member-role">Post-Doctoral Fellow</p>

                          {/* Email display with split logic to make them clickable separately */}
                          <div className="member-email">
                            {scholar.email.split("\n").map((mail, i) => (
                              <a
                                key={i}
                                href={`mailto:${mail.trim()}`}
                                style={{
                                  display: "block",
                                  color: "inherit",
                                  textDecoration: "none",
                                }}
                              >
                                {mail.trim()}
                              </a>
                            ))}
                          </div>

                          {scholar.scholarLink && (
                            <a
                              href={scholar.scholarLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="scholar-link-btn"
                            >
                              Google Scholar
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* --- PHD SECTIONS --- */}
              {activeTab === "ongoing" && <OngoingPhd />}
              {activeTab === "graduated" && <GraduatedPhd />}

              {/* --- M.TECH SECTION --- */}
              {activeTab === "mtech" && (
                <section className="mtech-section">
                  <div className="batch-selector">
                    {years.map((year) => (
                      <button
                        key={year}
                        className={`batch-btn ${selectedBatch === year ? "active" : ""}`}
                        onClick={() => setSelectedBatch(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  <div className="member-grid">
                    {mtechStudents
                      .filter((s) => s.batch === selectedBatch)
                      .map((student, index) => (
                        <div key={index} className="member-card mtech-card">
                          <div className="avatar-wrapper">
                            <div className="initials-avatar">
                              {student.name.charAt(0)}
                            </div>
                          </div>
                          <div className="member-info">
                            <h3 className="member-name">{student.name}</h3>
                            <p className="member-role">
                              M.Tech Scholar (Batch {student.batch})
                            </p>
                            <div className="project-box">
                              <strong>Project:</strong>
                              <p className="project-text">{student.project}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Students;
