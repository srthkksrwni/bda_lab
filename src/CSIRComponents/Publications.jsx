// Publications.jsx
import "../styles.css";
import { useEffect } from "react";

const Publications = () => {
  useEffect(() => {
  const cards = document.querySelectorAll(".pub-card, .future-card");

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

      {/* BANNER */}
      <section className="banner">
        <img
          src="/images/head backgrounds/3326663.jpg"
          alt="Banner"
          className="banner-img"
        />

        <div className="banner-text">
          <h1>Publications & Future Work</h1>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="section">
        <div className="container">

          <h2>Research Progress & Publications</h2>

          <h3 className="pub-subheading">Published Research Articles</h3>

          {published.map((pub, i) => (
            <PubCard key={i} {...pub} />
          ))}

          <h3 className="pub-subheading">Ontology-Based Research & Knowledge Model</h3>

          {ontology.map((pub, i) => (
            <PubCard key={i} {...pub} />
          ))}

        </div>
      </section>

      {/* FUTURE WORK */}
      <section className="section">
        <div className="container">

          <h2>Future Work</h2>

          <div className="future-grid">
            {future.map((item, i) => (
              <div className="future-card" key={i}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Ontology Based Epidemiology Research | All Rights Reserved
      </footer>

    </div>
  );
};

export default Publications;

/* ================= COMPONENTS ================= */

const PubCard = ({ title, desc, link, linkText }) => (
  <div className="pub-card">
    <h4>{title}</h4>
    <p>{desc}</p>
    <a href={link} target="_blank" rel="noreferrer" className="pub-link">
      {linkText}
    </a>
  </div>
);

/* ================= DATA ================= */

const published = [
  {
    title: "Natural Language Processing and Ontology-Based Decision Support System for Diabetic Patients",
    desc: "Chandra, R., Shukla, A., Tiwari, S., Agarwal, S., Svafrullah, M., & Adiyarta, K. (2022). Presented at IEEE EECSI 2022.",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9946601",
    linkText: "View Paper"
  },
  {
    title: "Semantic Web-Based Diagnosis and Treatment of Vector-Borne Diseases using SWRL Rules",
    desc: "Chandra, R., Tiwari, S., Agarwal, S., & Singh, N. (2023). Knowledge-Based Systems, Elsevier.",
    link: "https://www.sciencedirect.com/science/article/pii/S0950705123003957",
    linkText: "View Paper"
  },
  {
    title: "A Diagnosis and Treatment of Liver Diseases...",
    desc: "Chandra, R., Tiwari, S., Rastogi, S., & Agarwal, S. (2025). Evolving Systems, Springer.",
    link: "https://link.springer.com/article/10.1007/s12530-025-09679-9",
    linkText: "View Paper"
  },
  {
    title: "OCEP: Ontology-Based Complex Event Processing Framework",
    desc: "Ontology-driven CEP framework integrated with big data analytics for real-time healthcare decision support.",
    link: "https://arxiv.org/abs/2503.21453",
    linkText: "View Preprint"
  },
  {
    title: "Forecasting COVID-19 Cases using Statistical Models",
    desc: "Uses SARIMA & FBProphet with ontology-based semantic modeling for risk classification.",
    link: "https://arxiv.org/abs/2206.02795",
    linkText: "View Preprint"
  },
  {
    title: "MLtoGAI: Semantic Web-Based Machine Learning",
    desc: "Integration of ML, Semantic Web, SWRL rules, and Generative AI.",
    link: "https://arxiv.org/abs/2407.20284",
    linkText: "View Preprint"
  }
];

const ontology = [
  {
    title: "Diagnosis and Treatment of Liver Diseases using Explainable AI",
    desc: "Chandra, R., Tiwari, S., Rastogi, S., & Agarwal, S. (2025). Evolving Systems Journal.",
    link: "https://satyam-rastogi.github.io/LiverO--The-Liver-Disease-Ontology/index-en.html",
    linkText: "View LiverO Ontology"
  }
];

const future = [
  {
    title: "Expansion of Knowledge Base",
    desc: "Integration of additional epidemiological datasets from national and international agencies."
  },
  {
    title: "AI Driven Predictive Modeling",
    desc: "Using ML and deep learning for improved disease prediction."
  },
  {
    title: "Real-Time Monitoring Systems",
    desc: "IoT-based environmental exposure monitoring frameworks."
  },
  {
    title: "Global Collaboration",
    desc: "Extending ontology framework for global data integration."
  }
];