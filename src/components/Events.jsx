import React, { useState } from "react";
import { eventsData } from "../data/eventsData";
import "../styles/events.css";

function Events() {
  const [activeTab, setActiveTab] = useState("conferences");

  const categories = [
    { id: "conferences", label: "International Conferences" },
    { id: "corporate", label: "Corporate Training" },
    { id: "gian", label: "GIAN Courses" },
    { id: "tutorials", label: "Tutorials" },
    { id: "workshop", label: "Workshops" },
    { id: "awards", label: "Awards" },
  ];

  return (
    <section className="events-container">
      <h2 className="section-title">Scientific & Academic Contributions</h2>
      
      {/* Category Tabs */}
      <div className="tab-group">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            className={`tab-btn ${activeTab === cat.id ? "active" : ""}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="event-list">
        <h3 className="category-heading">{activeTab.toUpperCase().replace("_", " ")}</h3>
        <hr />
        
        {eventsData[activeTab].map((item, index) => (
          <div 
            className={`event-card ${activeTab === "awards" ? "award-highlight" : ""}`} 
            key={item.id}
          >
            <div className="event-index">
              {/* Awards ke liye Trophy, baaki ke liye Number */}
              {activeTab === "awards" ? "🏆" : index + 1}
            </div>
            
            <div className="event-content">
              <p className="citation-text">
                {activeTab === "awards" ? <strong>{item.citation}</strong> : item.citation}
              </p>
              
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="link-badge">
                   {activeTab === "awards" ? "[View Award]" : "View Link"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
