import React from "react";
import "../styles/Home.css";
import "../styles/research.css"
import { recentUpdates } from "../data/recentUpdates";
import Carousel from "./Carousel.jsx";
import CoreObjective from "./CoreObjective.jsx"
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
          <p>
            The Big Data Analytics Lab focuses on research and development in
            the data analytics, distributed systems, and intelligent computing.
            The lab aims to design scalable methods and tools for analysing
            large and complex datasets arising from real-world domains such as
            healthcare, smart infrastructure, cybersecurity, and social systems.
          </p>
          <p>
            Our vision is to contribute meaningful research outcomes, promote
            interdisciplinary collaboration, and support academic and industrial
            innovation through data-driven solutions.
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
