import React, { useEffect, useState } from "react";
import "../styles/events.css";

function Events() {
  const [activeTab, setActiveTab] = useState("conferences");

  const [eventsData, setEventsData] = useState({
    conferences: [],
    corporate: [],
    gian: [],
    tutorials: [],
    workshop: [],
    awards: [],
  });

  const categories = [
    { id: "conferences", label: "International Conferences" },
    { id: "corporate", label: "Corporate Training" },
    { id: "gian", label: "GIAN Courses" },
    { id: "tutorials", label: "Tutorials" },
    { id: "workshop", label: "Workshops" },
    { id: "awards", label: "Awards" },
  ];

  useEffect(() => {
    fetch("http://localhost:8000/events/list.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const grouped = {
            conferences: [],
            corporate: [],
            gian: [],
            tutorials: [],
            workshop: [],
            awards: [],
          };

          data.data.forEach((item) => {
            if (grouped[item.category_id]) {
              grouped[item.category_id].push(item);
            }
          });

          setEventsData(grouped);
        }
      })
      .catch((error) => {
        console.log("Error fetching events:", error);
      });
  }, []);

  return (
    <section className="events-container">
      <h2 className="section-title">Scientific & Academic Contributions</h2>

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
        <h3 className="category-heading">
          {activeTab.toUpperCase().replace("_", " ")}
        </h3>
        <hr />

        {eventsData[activeTab].map((item, index) => (
          <div
            className={`event-card ${
              activeTab === "awards" ? "award-highlight" : ""
            }`}
            key={item.id}
          >
            <div className="event-index">
              {activeTab === "awards" ? "🏆" : index + 1}
            </div>

            <div className="event-content">
              <p className="citation-text">
                {activeTab === "awards" ? (
                  <strong>{item.citation}</strong>
                ) : (
                  item.citation
                )}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link-badge"
                >
                  {activeTab === "awards" ? "[View Award]" : "View Link"}
                </a>
              )}
            </div>
          </div>
        ))}

        {eventsData[activeTab].length === 0 && (
          <p>No events found in this category.</p>
        )}
      </div>
    </section>
  );
}

export default Events;