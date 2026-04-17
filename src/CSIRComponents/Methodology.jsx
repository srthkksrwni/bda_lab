// Methodology.jsx
import "../styles.css";
import useFadeIn from "../hooks/useFadeIn";
import { useEffect } from "react";
import { Link } from "react-router-dom";
 import { NavLink } from "react-router-dom";

const Methodology = () => {
  useFadeIn();
  useEffect(() => {
  const handleScroll = () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
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

      {/* BANNER */}
      <section className="banner">
        <img
          src="/images/head backgrounds/19276.jpg"
          alt="Banner"
          className="banner-img"
        />

        <div className="banner-text">
          <h1>Research Methodology</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section class">
        <div className="container">

          <h2>Methodological Overview</h2>

          <p>
            The research adopts a multi-phase methodology to model, integrate, and analyze
            environmental and occupational epidemiology data using ontology-based data mining.
            The methodology ensures semantic interoperability, structured knowledge representation,
            and advanced predictive analytics.
          </p>

          <img
            src="/images/framework.png"
            className="framework-img"
            alt="Framework"
          />

        </div>
      </section>

      {/* PHASES */}
      <PhaseSection
        title="Phase 1: Data Collection and Preprocessing"
        text="Data will be collected from government health reports, environmental monitoring agencies, occupational safety records, and epidemiological studies. The data will undergo cleaning, normalization, and standardization to ensure consistency and reliability."
      />

      <PhaseSection
        title="Phase 2: Ontology Design and Knowledge Modeling"
        text="A domain-specific ontology will be developed to formally represent exposure agents, environmental factors, occupational activities, diseases, and demographic attributes. The ontology will be constructed using Semantic Web technologies such as OWL and RDF."
        image="/images/ontology.png"
        imageClass="ontology-img"
      />

      <PhaseSection
        title="Phase 3: Semantic Data Integration"
        text="Preprocessed datasets will be semantically annotated and mapped into a unified knowledge base. This integration enables interoperability across heterogeneous data sources and supports advanced querying and reasoning mechanisms."
      />

      <PhaseSection
        title="Phase 4: Mathematical Modeling and Simulation"
        text="Mathematical models will be developed to analyze exposure-disease relationships across spatio-temporal dimensions. These models will help understand epidemiological risk patterns and predict disease progression under different environmental conditions."
      />

      <PhaseSection
        title="Phase 5: Ontology Based Data Mining"
        text="Data mining techniques such as clustering, classification, and association rule mining will be applied to discover hidden relationships between environmental exposure and health outcomes."
      />

      <PhaseSection
        title="Phase 6: Visualization and Decision Support"
        text="Interactive dashboards and analytical visualization tools will be developed to assist policymakers, healthcare professionals, and regulatory agencies in making evidence-based decisions."
      />

      {/* FOOTER */}
      <footer>
        © 2026 Ontology Based Epidemiology Research | All Rights Reserved
      </footer>

    </div>

    // </div>
  );
};

export default Methodology;


/* Reusable Phase Component */
const PhaseSection = ({ title, text, image, imageClass }) => {
  return (
    <section className="section class">
      <div className="container">

        <h2>{title}</h2>
        <p>{text}</p>

        {image && (
          <img
            src={image}
            className={imageClass}
            alt="visual"
          />
        )}

      </div>
    </section>
  );
};