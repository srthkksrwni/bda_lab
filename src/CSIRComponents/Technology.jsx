// Technology.jsx
import "../styles.css";
import { useEffect } from "react";

const Technology = () => {

  /* ✅ Add scroll + navbar effects */
  useEffect(() => {
    const cards = document.querySelectorAll(".tech-card");

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

      // Navbar scroll effect
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      fadeCards();
    };

    window.addEventListener("scroll", handleScroll);
    fadeCards(); // run once

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
      <section className="banner">
        <img
          src="/images/head backgrounds/4884273.jpg"  
          alt="Banner"
          className="banner-img"
        />
        <div className="banner-text">
          <h1>Technology Stack</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container">
          <h2>Technology Overview</h2>
          <p>
            The proposed research integrates Semantic Web technologies, data mining algorithms,
            mathematical modeling techniques, and visualization platforms to develop an ontology
            driven epidemiological analysis framework.
          </p>
        </div>
      </section>

      {/* SECTIONS */}
      <TechSection
        title="Semantic Web Technologies"
        items={[
          { title: "OWL", desc: "Ontology Web Language used for domain knowledge modeling." },
          { title: "RDF", desc: "Resource Description Framework for semantic data representation." },
          { title: "SPARQL", desc: "Query language used to retrieve knowledge from ontology repositories." }
        ]}
      />

      <TechSection
        title="Data Mining & Modeling Tools"
        items={[
          { title: "Clustering Algorithms", desc: "Used for grouping exposure and disease patterns." },
          { title: "Classification Models", desc: "Prediction of epidemiological risk categories." },
          { title: "Association Rule Mining", desc: "Discovery of hidden relationships between environmental factors and diseases." },
          { title: "Mathematical Modeling", desc: "ODE-based epidemiological simulation models." }
        ]}
      />

      <TechSection
        title="Development & Programming Tools"
        items={[
          { title: "Python", desc: "Data preprocessing, analytics, and modeling." },
          { title: "Java / Web Technologies", desc: "Ontology processing and system development." },
          { title: "Protégé", desc: "Ontology development and semantic modeling tool." }
        ]}
      />

      <TechSection
        title="Database & Storage Infrastructure"
        items={[
          { title: "Semantic Repositories", desc: "Storage of RDF triples and ontology knowledge base." },
          { title: "Data Warehousing", desc: "Integration of multi-source epidemiological datasets." },
          { title: "Distributed Processing", desc: "Handling large scale environmental and healthcare datasets." }
        ]}
      />

      <TechSection
        title="Visualization & Decision Support Tools"
        items={[
          { title: "Interactive Dashboards", desc: "Visualization of disease risk patterns." },
          { title: "Forecasting Systems", desc: "Predictive health alert generation." }
        ]}
      />

      {/* FOOTER */}
      <footer>
        © 2026 Ontology Based Epidemiology Research | All Rights Reserved
      </footer>

    </div>
  );
};

export default Technology;


/* REUSABLE COMPONENT */
const TechSection = ({ title, items }) => (
  <section className="section">
    <div className="container">
      <h2>{title}</h2>

      <div className="tech-grid">
        {items.map((item, index) => (
          <div className="tech-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);