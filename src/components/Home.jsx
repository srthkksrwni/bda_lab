import React from "react";
import "../styles/Home.css";
import "../styles/research.css";
import { recentUpdates } from "../data/recentUpdates";
import Carousel from "./Carousel.jsx";
import CoreObjective from "./CoreObjective.jsx";
import Research from "./Research.jsx";
import Funding from "./Funding.jsx";

function Home() {
  return (
    <div className="home-container">
      <Carousel />

      {/* MISSION + UPDATES */}
      <section id="mission" className="mission-section">
        <div className="mission-left">
          <h2>Mission & Vision</h2>
          <h4>Mission </h4>
          <p>
            Promote advanced learning, research, and system development in the
            domains of <b> AI, Machine Learning, Big Data Analytics, and Digital
            Twin technologies</b>, with a strong emphasis on sustainability and
            societal impact. The lab will foster a collaborative research
            ecosystem where students, faculty, and researchers engage in
            knowledge exchange, innovation, and interdisciplinary
            problem-solving, supported by interactions with domain experts and
            industry stakeholders. It will act as a channel to attract funded
            research projects from government, industry, and international
            agencies, enabling the development of real-time, intelligent, and
            sustainable solutions for challenges such as mental health analysis,
            smart environments, and data-driven healthcare systems.
          </p>
          <h4> Vision </h4>
          <p>
            To establish a center of excellence in <b>Artificial Intelligence,
            Machine Learning, Big Data Analytics, Digital Twins, and Sustainable
            Intelligent Systems, </b>aimed at solving complex real-world challenges
            in healthcare, smart infrastructure, geospatial intelligence, and
            assistive technologies through scalable, ethical, and data-driven
            innovations.
          </p>
        </div>

        <div className="mission-right">
          <h2>Recent Research Updates</h2>

          {recentUpdates.map((item, index) => (
            <div className="update-item" key={index}>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              ) : (
                <span>{item.title}</span>
              )}
              <span className="update-date">{item.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Objective Field */}
      <CoreObjective />

      {/* RESEARCH FIELDS */}
      <Research />

      {/* FUNDING */}
      <Funding />
    </div>
  );
}

export default Home;
