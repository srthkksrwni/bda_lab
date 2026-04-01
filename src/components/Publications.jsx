import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journals } from "../data/journals";
import { conferences } from "../data/conferences";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import "../styles/Publications.css";

export default function Publications() {
  const [activeTab, setActiveTab] = useState("journals");

  // --- SMART LOGIC: Extracting Data for Graph ---
  const stats = useMemo(() => {
    const allPubs = [...journals, ...conferences];
    const yearCounts = {};
    
    allPubs.forEach(pub => {
      // Citation text se 4-digit year (e.g. 2020) extract karne ka logic
      const yearMatch = pub.citation.match(/\b(20\d{2})\b/);
      if (yearMatch) {
        const year = yearMatch[0];
        yearCounts[year] = (yearCounts[year] || 0) + 1;
      }
    });

    // Graph ke liye format: [{year: '2019', count: 5}, ...]
    const graphData = Object.keys(yearCounts)
      .sort()
      .map(year => ({ year, count: yearCounts[year] }));

    return {
      total: allPubs.length,
      graphData,
      journalsCount: journals.length,
      conferencesCount: conferences.length
    };
  }, []);

  const tabs = [
    { id: "journals", label: "Transactions & Journals", data: journals },
    { id: "conferences", label: "Conference Publications", data: conferences },
  ];

  return (
    <div className="publications-page">
      <div className="pub-layout">
        
        {/* LEFT COLUMN */}
        <div className="pub-left">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="page-title">
            Research Publications
          </motion.h1>

          <div className="pub-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`pub-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pub-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="pub-list"
              >
                {tabs.find(t => t.id === activeTab).data.map((pub, index) => (
                  <div className="pub-card" key={pub.id}>
                    <div className="pub-index">{index + 1}</div>
                    <div className="pub-details">
                      <p className="pub-citation">{pub.citation}</p>
                      {pub.link && (
                        <a href={pub.link} target="_blank" rel="noreferrer" className="pub-link-btn">
                          View Publication ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN: Dynamic Metrics based on your data */}
        <div className="pub-right">
          <div className="scholar-card">
            <div className="scholar-header">
              <h3>Publication Metrics</h3>
            </div>
            
            <table className="metrics-table">
              <thead>
                <tr><th>Category</th><th>Count</th></tr>
              </thead>
              <tbody>
                <tr><td>Journals</td><td>{stats.journalsCount}</td></tr>
                <tr><td>Conferences</td><td>{stats.conferencesCount}</td></tr>
                <tr><td><b>Total</b></td><td><b>{stats.total}</b></td></tr>
              </tbody>
            </table>

            <div className="graph-container">
              <h4 className="graph-label">Publications by Year</h4>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={stats.graphData}>
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                  <Tooltip cursor={{fill: '#f0f0f0'}} />
                  <Bar dataKey="count" fill="#1a2a6c" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
