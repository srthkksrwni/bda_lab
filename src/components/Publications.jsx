import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journals } from "../data/journals";
import { conferences } from "../data/conferences";
import "../styles/Publications.css";

export default function Publications() {
  const [activeTab, setActiveTab] = useState("journals");

  const tabs = [
    { id: "journals", label: "Transactions & Journals", data: journals },
    { id: "conferences", label: "Conference Publications", data: conferences },
  ];

  return (
    <div className="publications-page">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-title"
      >
        Research Publications
      </motion.h1>

      {/* Modern Tabs */}
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

      {/* Publications List with Animation */}
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
  );
}
