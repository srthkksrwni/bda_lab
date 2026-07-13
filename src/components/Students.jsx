import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Students.css";
import { PEOPLE_API } from "../admin/People/peopleApi";
import { API_BASE } from "../api/apiConfig";

function Students() {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [students, setStudents] = useState([]);
  const [years, setYears] = useState([]);

  const tabs = [
    { id: "postdoc", label: "Post-Doctorate" },
    { id: "ongoing", label: "PhD Scholars" },
    { id: "graduated", label: "Graduated PhD" },
    { id: "mtech", label: "M.Tech Scholars" },
    { id: "intern", label: "Interns" },
  ];

  useEffect(() => {
    if (activeTab === "mtech" || activeTab === "intern") {
      fetch(`${PEOPLE_API.list}?type=years&category=${activeTab}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.data) {
            setYears(data.data);

            if (data.data.length > 0) {
              setSelectedBatch(data.data[0]);
            } else {
              setSelectedBatch("");
            }
          }
        })
        .catch((err) => {
          console.error("Error fetching years:", err);
        });
    } else {
      setYears([]);
      setSelectedBatch("");
    }
  }, [activeTab]);

  const fetchStudents = async () => {
    let category = activeTab;

    if (activeTab === "ongoing") {
      category = "phd";
    }

    if (
      (category === "mtech" || category === "intern") &&
      !selectedBatch
    ) {
      setStudents([]);
      return;
    }

    let url = `${PEOPLE_API.list}?type=students&category=${category}`;

    if (category === "mtech" || category === "intern") {
      url += `&batch_year=${selectedBatch}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        const mappedStudents = (data.data || []).map((item) => ({
          id: item.id,
          name: item.name,
          email: item.email || "",
          img: item.image_url || "",
          scholarLink: item.scholar_url || "",
          fileLink: item.profile_url || "",
          project: item.research_topic || "",
          batch: item.batch_year || "",
        }));

        setStudents(mappedStudents);
      } else {
        setStudents([]);
        console.error("Failed to load students:", data.message);
      }
    } catch (error) {
      setStudents([]);
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    Promise.resolve().then(() => {
      fetchStudents();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, selectedBatch]);

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
              type="button"
              className={`student-tab-btn ${
                activeTab === tab.id ? "active" : ""
              }`}
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
              {/* POST-DOCTORATE SECTION */}
              {activeTab === "postdoc" && (
                <section className="postdoc-section">
                  <div className="member-grid">
                    {students.map((scholar, index) => (
                      <div
                        key={scholar.id || index}
                        className="member-card postdoc-card"
                      >
                        <div className="avatar-wrapper">
                          {scholar.img ? (
                            <img
                              src={`${API_BASE}/${scholar.img}`}
                              alt={scholar.name}
                              className="member-img"
                              onError={(event) => {
                                event.currentTarget.style.display = "none";

                                if (event.currentTarget.nextSibling) {
                                  event.currentTarget.nextSibling.style.display =
                                    "flex";
                                }
                              }}
                            />
                          ) : null}

                          <div
                            className="initials-avatar"
                            style={{
                              display: scholar.img ? "none" : "flex",
                            }}
                          >
                            {scholar.name
                              ? scholar.name.charAt(0).toUpperCase()
                              : ""}
                          </div>
                        </div>

                        <div className="member-info">
                          <h3 className="member-name">{scholar.name}</h3>

                          <p className="member-role">
                            Post-Doctoral Fellow
                          </p>

                          {scholar.email && (
                            <div className="member-email">
                              {scholar.email
                                .split("\n")
                                .filter((mail) => mail.trim() !== "")
                                .map((mail, index) => (
                                  <a
                                    key={index}
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
                          )}

                          <div className="postdoc-btn-group">
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

                            {scholar.fileLink && (
                              <a
                                href={scholar.fileLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="scholar-link-btn"
                              >
                                View Profile
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* PHD SCHOLARS SECTION */}
              {activeTab === "ongoing" && (
                <section
                  id="OngoingPhd"
                  className="phd-section-wrapper"
                >
                  <h2 className="phd-display-heading">PhD Scholars</h2>

                  <div className="phd-members-grid">
                    {students.map((student, index) => (
                      <div
                        key={student.id || index}
                        className="phd-individual-card"
                      >
                        <div className="phd-img-container">
                          {student.img ? (
                            <img
                              src={`${API_BASE}/${student.img}`}
                              alt={student.name}
                              className="phd-profile-photo"
                              onError={(event) => {
                                event.currentTarget.style.display = "none";

                                if (event.currentTarget.nextSibling) {
                                  event.currentTarget.nextSibling.style.display =
                                    "flex";
                                }
                              }}
                            />
                          ) : null}

                          <div
                            className="initials-avatar"
                            style={{
                              display: student.img ? "none" : "flex",
                            }}
                          >
                            {student.name
                              ? student.name.charAt(0).toUpperCase()
                              : ""}
                          </div>
                        </div>

                        <div className="phd-details-box">
                          <h3 className="phd-student-name">
                            {student.name}
                          </h3>

                          <p className="phd-student-role">
                            PhD Research Scholar
                          </p>

                          {student.email && (
                            <div className="phd-email-pill">
                              <span className="phd-icon">📧</span>

                              <a
                                href={`mailto:${student.email}`}
                                className="phd-email-link"
                              >
                                {student.email}
                              </a>
                            </div>
                          )}

                          {student.project && (
                            <div
                              className="phd-thesis-section"
                              style={{
                                marginTop: "10px",
                                fontSize: "0.9rem",
                              }}
                            >
                              <strong style={{ color: "#555" }}>
                                Thesis Topic:
                              </strong>

                              <p
                                style={{
                                  fontStyle: "italic",
                                  margin: "5px 0",
                                  color: "#333",
                                }}
                              >
                                {student.project}
                              </p>
                            </div>
                          )}

                          {student.scholarLink && (
                            <div className="phd-action">
                              <a
                                href={student.scholarLink}
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
              )}

              {/* GRADUATED PHD SECTION */}
              {activeTab === "graduated" && (
                <section
                  id="GraduatedPhd"
                  className="grad-section-wrapper"
                >
                  <h2 className="grad-display-heading">
                    Graduated PhD Students
                  </h2>

                  <div className="grad-members-grid">
                    {students.map((student, index) => (
                      <div
                        key={student.id || index}
                        className="grad-individual-card"
                      >
                        <div className="grad-img-container">
                          {student.img ? (
                            <img
                              src={`${API_BASE}/${student.img}`}
                              alt={student.name}
                              className="grad-profile-photo"
                              onError={(event) => {
                                event.currentTarget.style.display = "none";

                                if (event.currentTarget.nextSibling) {
                                  event.currentTarget.nextSibling.style.display =
                                    "flex";
                                }
                              }}
                            />
                          ) : null}

                          <div
                            className="initials-avatar"
                            style={{
                              display: student.img ? "none" : "flex",
                            }}
                          >
                            {student.name
                              ? student.name.charAt(0).toUpperCase()
                              : ""}
                          </div>
                        </div>

                        <div className="grad-details-box">
                          <h3 className="grad-student-name">
                            {student.name}
                          </h3>

                          <p className="grad-student-role">
                            Graduated PhD Scholar
                          </p>

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
              )}

              {/* M.TECH SECTION */}
              {activeTab === "mtech" && (
                <section className="mtech-section">
                  <div className="batch-selector">
                    {years.map((year) => (
                      <button
                        key={year}
                        type="button"
                        className={`batch-btn ${
                          selectedBatch === year ? "active" : ""
                        }`}
                        onClick={() => setSelectedBatch(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  <div className="member-grid">
                    {students.map((student, index) => (
                      <div
                        key={student.id || index}
                        className="member-card mtech-card"
                      >
                        <div className="avatar-wrapper">
                          {student.img ? (
                            <img
                              src={`${API_BASE}/${student.img}`}
                              alt={student.name}
                              className="member-img"
                              onError={(event) => {
                                event.currentTarget.style.display = "none";

                                if (event.currentTarget.nextSibling) {
                                  event.currentTarget.nextSibling.style.display =
                                    "flex";
                                }
                              }}
                            />
                          ) : null}

                          <div
                            className="initials-avatar"
                            style={{
                              display: student.img ? "none" : "flex",
                            }}
                          >
                            {student.name
                              ? student.name.charAt(0).toUpperCase()
                              : ""}
                          </div>
                        </div>

                        <div className="member-info">
                          <h3 className="member-name">{student.name}</h3>

                          <p className="member-role">
                            M.Tech Scholar (Batch {student.batch})
                          </p>

                          {student.project && (
                            <div className="project-box">
                              <strong>Project:</strong>

                              <p className="project-text">
                                {student.project}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* INTERN SECTION */}
              {activeTab === "intern" && (
                <section className="intern-section">
                  <div className="batch-selector">
                    {years.map((year) => (
                      <button
                        key={year}
                        type="button"
                        className={`batch-btn ${
                          selectedBatch === year ? "active" : ""
                        }`}
                        onClick={() => setSelectedBatch(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  {students.length === 0 ? (
                    <div
                      style={{
                        textAlign: "center",
                        margin: "40px 0",
                        color: "#64748b",
                        fontWeight: "600",
                      }}
                    >
                      No interns found for this batch.
                    </div>
                  ) : (
                    <div className="member-grid">
                      {students.map((student, index) => (
                        <div
                          key={student.id || index}
                          className="member-card intern-card"
                        >
                          <div className="avatar-wrapper">
                            {student.img ? (
                              <img
                                src={`${API_BASE}/${student.img}`}
                                alt={student.name}
                                className="member-img"
                                onError={(event) => {
                                  event.currentTarget.style.display = "none";

                                  if (event.currentTarget.nextSibling) {
                                    event.currentTarget.nextSibling.style.display =
                                      "flex";
                                  }
                                }}
                              />
                            ) : null}

                            <div
                              className="initials-avatar"
                              style={{
                                display: student.img ? "none" : "flex",
                              }}
                            >
                              {student.name
                                ? student.name.charAt(0).toUpperCase()
                                : ""}
                            </div>
                          </div>

                          <div className="member-info">
                            <h3 className="member-name">
                              {student.name}
                            </h3>

                            <p className="member-role">Intern</p>

                            {student.project && (
                              <div className="project-box">
                                <strong>Project:</strong>

                                <p className="project-text">
                                  {student.project}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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