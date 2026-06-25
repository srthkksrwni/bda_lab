import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journals } from "../data/journals";
import { conferences } from "../data/conferences";
import { books } from "../data/books";
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
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fullCitationData = [
    { year: "2015", count: 80 },
    { year: "2016", count: 120 },
    { year: "2017", count: 190 },
    { year: "2018", count: 210 },
    { year: "2019", count: 280 },
    { year: "2020", count: 450 },
    { year: "2021", count: 825 },
    { year: "2022", count: 1050 },
    { year: "2023", count: 950 },
    { year: "2024", count: 980 },
    { year: "2025", count: 825 },
  ];

  const sidebarData = fullCitationData.slice(-8);

  const highlightAuthor = (citation) => {
    const names = ["S. Agarwal", "Sonali Agarwal", "S Agarwal"];
    let text = citation;

    names.forEach((name) => {
      const regex = new RegExp(`(${name})`, "gi");
      text = text.replace(regex, "<strong>$1</strong>");
    });

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  const allPublications = [
    ...journals.map((item) => ({ ...item, category: "journals" })),
    ...conferences.map((item) => ({ ...item, category: "conferences" })),
    ...books.map((item) => ({ ...item, category: "books" })),
  ];

  const filteredPublications =
    activeTab === "all"
      ? allPublications
      : allPublications.filter((item) => item.category === activeTab);

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

          <div className="pub-filter-box">
            <label htmlFor="publicationFilter">Filter Publications</label>

            <select
              id="publicationFilter"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="pub-dropdown"
            >
              <option value="all">All Publications</option>
              <option value="journals">Transactions & Journals</option>
              <option value="conferences">Conference Publications</option>
              <option value="books">Books</option>
            </select>
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
                      <span className="pub-category">
                        {pub.category === "journals" && "Journal"}
                        {pub.category === "conferences" && "Conference"}
                        {pub.category === "books" && "Book"}
                      </span>

                      <p className="pub-citation">
                        {pub.citation
                          ? highlightAuthor(pub.citation)
                          : pub.title}
                      </p>

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
                  <p className="no-data">
                    No records found for this category.
                  </p>
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
                  <th>Since 2021</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Citations</td>
                  <td>7016</td>
                  <td>4761</td>
                </tr>
                <tr>
                  <td>h-index</td>
                  <td>39</td>
                  <td>31</td>
                </tr>
                <tr>
                  <td>i10-index</td>
                  <td>111</td>
                  <td>76</td>
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
                  margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
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
                  <Bar dataKey="count" fill="#777" barSize={18} />
                </BarChart>
              </ResponsiveContainer>

              <p className="graph-hint">Click to expand history</p>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div
            className="modal-overlay"
            onClick={() => setIsModalOpen(false)}
          >
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