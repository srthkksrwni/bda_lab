import React, { useEffect, useState } from "react";
import { ExternalLink, Award, BrainCircuit, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/Faculty.css";
import { PEOPLE_API } from "../admin/People/peopleApi";
import { API_BASE } from "../api/apiConfig";

function Faculty() {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    fetch(`${PEOPLE_API.list}?type=faculty`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const mappedFaculty = data.data.map((item) => ({
            id: item.id,
            name: item.name,
            roles: item.description
              ? item.description.split("\n")
              : [],
            email: item.email || "",
            img: item.image_url
              ? (item.image_url.startsWith("http") ? item.image_url : `${API_BASE}/${item.image_url}`)
              : "/default-profile.png",
            scholarLink: item.scholar_url || "",
            profile: item.profile_url || "",
            externalLinks: item.external_links
              ? typeof item.external_links === "string"
                ? JSON.parse(item.external_links)
                : item.external_links
              : [],
          }));

          setFacultyData(mappedFaculty);
        }
      })
      .catch((err) => console.error("Error loading faculty:", err));
  }, []);

  return (
    <div className="fac-page-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fac-main-title"
      >
        FACULTY
      </motion.h1>
      <div className="fac-show">
        <div className="fac-grid">
          {facultyData.map((f, index) => (
            <motion.div
              className="fac-member-card"
              key={f.id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Profile Image */}
              <div className="fac-img-wrapper">
                <img
                  src={f.img}
                  alt={f.name}
                  className="fac-profile-img"
                  onError={(e) => {
                    e.target.src = "/default-profile.png";
                  }}
                />
              </div>

              {/* Name */}
              <h3 className="fac-member-name">{f.name}</h3>

              {/* Roles */}
              <div className="fac-roles-container">
                {f.roles.map((role, i) => (
                  <p key={i} className="fac-member-role">
                    {role}
                  </p>
                ))}
              </div>

              {/* Email */}
              <div className="fac-contact-info">
                <a href={`mailto:${f.email}`} className="fac-email-link">
                  <Mail size={16} /> {f.email}
                </a>
              </div>

              {/* Buttons */}
              <div className="fac-actions-stack">
                {f.profile && (
                  <a
                    href={f.profile}
                    target="_blank"
                    rel="noreferrer"
                    className="fac-btn btn-primary-blue"
                  >
                    <ExternalLink size={18} />
                    Personal Homepage
                  </a>
                )}

                {f.scholarLink && (
                  <a
                    href={f.scholarLink}
                    target="_blank"
                    rel="noreferrer"
                    className="fac-btn btn-outline-scholar"
                  >
                    <Award size={18} />
                    Google Scholar Profile
                  </a>
                )}

                {f.externalLinks &&
                  f.externalLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="fac-btn btn-outline-lab"
                    >
                      <BrainCircuit size={18} />
                      {link.title}
                    </a>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;