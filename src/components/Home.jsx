import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import "../styles/research.css";
import { recentUpdates as dummyUpdates } from "../data/recentUpdates"; // rename static import if needed to prevent naming conflicts
import Carousel from "./Carousel.jsx";
import CoreObjective from "./CoreObjective.jsx";
import Research from "./Research.jsx";
import Funding from "./Funding.jsx";
import { RESEARCH_API } from "../api/researchApi";

function Home() {
  const [recentUpdates, setRecentUpdates] = useState([]);

  useEffect(() => {
    fetch(RESEARCH_API.list)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRecentUpdates(data.updates);
        }
      })
      .catch((error) => {
        console.error("Error fetching recent updates:", error);
      });
  }, []);

  return (
    <div className="home-container">
      <Carousel />

      <section id="mission" className="mission-section">
        <div className="mission-left">
          <h2>Mission & Vision</h2>

          <h4>Mission</h4>
          <p>
            Promote advanced learning, research, and system development in the
            domains of{" "}
            <b>
              AI, Machine Learning, Big Data Analytics, and Digital Twin
              technologies
            </b>
            , with a strong emphasis on sustainability and societal impact. The
            lab will foster a collaborative research ecosystem where students,
            faculty, and researchers engage in knowledge exchange, innovation,
            and interdisciplinary problem-solving, supported by interactions
            with domain experts and industry stakeholders.
          </p>

          <h4>Vision</h4>
          <p>
            To establish a center of excellence in{" "}
            <b>
              Artificial Intelligence, Machine Learning, Big Data Analytics,
              Digital Twins, and Sustainable Intelligent Systems,
            </b>{" "}
            aimed at solving complex real-world challenges in healthcare, smart
            infrastructure, geospatial intelligence, and assistive technologies
            through scalable, ethical, and data-driven innovations.
          </p>
        </div>

        <div className="mission-right">
          <h2>Recent Research Updates</h2>

          {recentUpdates.length === 0 ? (
            <p>No recent research updates available.</p>
          ) : (
            recentUpdates.map((item) => (
              <div className="update-item" key={item.id}>
                <span>{item.title}</span>
                <span className="update-date">{item.year}</span>
              </div>
            ))
          )}
        </div>
      </section>

      <CoreObjective />
      <Research />
      <Funding />
    </div>
  );
}

export default Home;