import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PUBLICATIONS_API } from "../api/publicationsApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/Publications.css";

export default function Publications() {
  const [activeTab, setActiveTab] = useState("journals");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [publications, setPublications] = useState([]);
  const [fullCitationData, setFullCitationData] = useState([]);

  const [citationStats, setCitationStats] = useState({
    citations: 0,
    h_index: 0,
    i10_index: 0,
  });

  useEffect(() => {
    fetch(PUBLICATIONS_API.list)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPublications(data.publications);
      })
      .catch((err) => console.log("Error fetching publications:", err));

    fetch(PUBLICATIONS_API.getYearlyStats)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const chartData = data.data.map((item) => ({
            year: String(item.year),
            count: Number(item.total),
          }));

          setFullCitationData(chartData);
        }
      })
      .catch((err) => console.log("Error fetching yearly stats:", err));

    fetch(PUBLICATIONS_API.getCitationStats)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCitationStats(data.data);
        }
      })
      .catch((err) => console.log("Error fetching citation stats:", err));
  }, []);

  const sidebarData = fullCitationData.slice(-7);

  const highlightAuthor = (citation) => {
    const names = ["S. Agarwal", "Sonali Agarwal", "S Agarwal"];
    let text = citation;

    names.forEach((name) => {
      const regex = new RegExp(`(${name})`, "gi");
      text = text.replace(regex, "<strong>$1</strong>");
    });

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  const filteredPublications = publications.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="publications-page">
      <div className="pub-layout">
        <div className="pub-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="page-title"
          >
            Research Publications
          </motion.h1>

          <div className="publication-tabs">
            <button
              className={`tab-btn ${activeTab === "journals" ? "active" : ""}`}
              onClick={() => setActiveTab("journals")}
            >
              Transactions & Journals
            </button>

            <button
              className={`tab-btn ${
                activeTab === "conferences" ? "active" : ""
              }`}
              onClick={() => setActiveTab("conferences")}
            >
              Conference Publications
            </button>

            <button
              className={`tab-btn ${activeTab === "books" ? "active" : ""}`}
              onClick={() => setActiveTab("books")}
            >
              Books
            </button>
          </div>

          <div className="pub-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="pub-list"
              >
                {filteredPublications.map((pub, index) => (
                  <div className="pub-card" key={pub.id || index}>
                    <div className="pub-index">{index + 1}</div>

                    <div className="pub-details">
                      <p className="pub-citation">
                        {pub.citation
                          ? highlightAuthor(pub.citation)
                          : pub.title}
                      </p>

                      {pub.year && <p className="pub-year">{pub.year}</p>}

                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pub-link-btn"
                        >
                          {pub.category === "books"
                            ? "View Book 📖"
                            : "View Publication ↗"}
                        </a>
                      )}
                    </div>
                  </div>
                ))}

                {filteredPublications.length === 0 && (
                  <p className="no-data">No records found in this category.</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="pub-right">
          <div className="scholar-card">
            <table className="scholar-table">
              <thead>
                <tr>
                  <th></th>
                  <th>All</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Citations</td>
                  <td>{citationStats.citations}</td>
                </tr>

                <tr>
                  <td>h-index</td>
                  <td>{citationStats.h_index}</td>
                </tr>

                <tr>
                  <td>i10-index</td>
                  <td>{citationStats.i10_index}</td>
                </tr>
              </tbody>
            </table>

            <div
              className="graph-container"
              onClick={() => setIsModalOpen(true)}
              title="Click to view full history"
            >
              <ResponsiveContainer width="100%" height={180}>
                <BarChart
                  data={sidebarData}
                  margin={{ top: 10, right: 5, left: -25, bottom: 0 }}
                >
                  <CartesianGrid vertical={false} stroke="#f0f0f0" />

                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#999" }}
                  />

                  <YAxis
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#999" }}
                  />

                  <Bar dataKey="count" fill="#777" barSize={22} />
                </BarChart>
              </ResponsiveContainer>

              <p className="graph-hint">Click to expand history</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>Detailed Citation History</h3>
                <button
                  className="close-x"
                  onClick={() => setIsModalOpen(false)}
                >
                  &times;
                </button>
              </div>

              <div className="full-graph-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={fullCitationData}>
                    <CartesianGrid vertical={false} stroke="#eee" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} />
                    <YAxis
                      orientation="right"
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip cursor={{ fill: "#f8f8f8" }} />
                    <Bar
                      dataKey="count"
                      fill="#1a2a6c"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}