// Home.jsx
import "../styles.css"; // adjust path
import useFadeIn from "../hooks/useFadeIn";
import { useEffect } from "react";

const Home = () => {
   useFadeIn();
   useEffect(() => {
  const cards = document.querySelectorAll(".card");

  const fadeCards = () => {
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  };

  const handleScroll = () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    fadeCards();
  };

  window.addEventListener("scroll", handleScroll);
  fadeCards();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div>

      {/* HEADER */}
      <header>
              <div className="navbar">
      
                <div className="logo-container">
                 
      
                <Link to="/">
                  <img
                    src="https://i.ibb.co/n8s38Yn1/csir-logo.png"
                    className="logo-img"
                    alt="CSIR Logo"
                  />
                </Link>
      
                <Link to="https://www.iiita.ac.in/">
                  <img
                     src="https://i.ibb.co/4R0jkwx2/institute-logo.png"
                      className="logo-img"
                      alt="IIITA Logo"
                  />
                </Link>
      
                  
      
               
      
                <nav className="nav-links">
                  <NavLink to="/" end>Home</NavLink>
                  <NavLink to="/objectives">Objectives</NavLink>
                  <NavLink to="/methodology">Methodology</NavLink>
                  <NavLink to="/technology">Technology</NavLink>
                  <NavLink to="/applications">Applications</NavLink>
                  <NavLink to="/publications">Publications</NavLink>
                  <NavLink to="/team">Team</NavLink>
                </nav>
      
                </div>
      
              </div>
            </header>

      {/* HERO */}
      <section className="csir-banner">
        <img
          src="/images/index.jpg"
          alt="Banner"
          className="banner-img"
        />

        <div className="banner-text">
          <h1>
            Modeling and Simulation of Environmental and Occupational Epidemiology Data
            in Indian Context using Ontology Based Data Mining
          </h1>

          <p>A CSIR Sponsored Research Initiative</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container">

          <h2>About The Project</h2>

          <p>
            Rapid urbanization, industrial expansion, and environmental degradation have significantly increased the burden of chronic diseases in India, including cancers, cardio-respiratory disorders, neurodegenerative diseases, and occupational health hazards. According to Global Burden of Disease studies, household pollution, ambient particulate matter pollution, and unsafe water remain among the leading risk factors affecting population health. Occupational health risks further contribute substantially to morbidity and mortality, especially among workers exposed to hazardous industrial environments.
          </p>

          <p>
            Despite several epidemiological investigations and occupational safety initiatives, India still lacks a centralized and standardized repository integrating environmental, occupational, and healthcare data. This fragmented data landscape makes it difficult for policymakers and healthcare professionals to accurately assess disease burden, understand exposure–disease relationships, and develop effective prevention strategies.
          </p>

          <p>
            This research project aims to address these challenges by developing an ontology-driven framework that integrates heterogeneous epidemiological datasets and supports structured knowledge representation. By incorporating semantic technologies, data mining techniques, and mathematical simulation models, the project seeks to analyze complex environmental and occupational health interactions and provide predictive insights for disease prevention and healthcare decision support.
          </p>

          <p>
            The proposed framework will investigate associations between lifestyle factors, environmental exposure, occupational hazards, and disease patterns in the Indian context. The outcomes of this research are expected to support evidence-based policymaking, improve occupational and environmental health monitoring, and contribute to the development of preventive healthcare models.
          </p>

        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section highlight">
        <div className="container">

          <h2>Research Highlights</h2>

          <div className="highlight-grid">

            <div className="card">
              <h3>Ontology Development</h3>
              <p>Structured modeling of epidemiological concepts, relationships, and exposure factors.</p>
            </div>

            <div className="card">
              <h3>Data Mining</h3>
              <p>Knowledge discovery using clustering, classification, and predictive analytics.</p>
            </div>

            <div className="card">
              <h3>Simulation Modeling</h3>
              <p>Mathematical modeling of exposure-disease relationships and health risk prediction.</p>
            </div>

            <div className="card">
              <h3>Decision Support</h3>
              <p>Policy and healthcare support through explainable analytics and forecasting models.</p>
            </div>

          </div>

        </div>
      </section>

      {/* FUNDING */}
      <section className="section funding">
        <div className="container">

          <h2>Funding & Institution</h2>

          <p>
            <strong>Funding Agency:</strong> Council of Scientific and Industrial Research (CSIR)
            <br />
            <strong>Institute:</strong> Indian Institute of Information Technology, Allahabad
            <br />
            <strong>Project Duration:</strong> 3 Years Research Project
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Ontology Based Epidemiology Research | All Rights Reserved
      </footer>

    </div>
  );
};

export default Home;