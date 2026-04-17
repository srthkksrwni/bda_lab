// Applications.jsx
import "../styles.css"; // adjust path as needed
import useFadeIn from "../hooks/useFadeIn";
import { useEffect } from "react";

const Applications = () => {
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
          src="/images/head backgrounds/3306567.jpg"
          alt="Banner"
          className="banner-img"
        />

        <div className="banner-text">
          <h1>Research Applications</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container">
          <h2>Application Overview</h2>
          <p>
            The proposed ontology-driven epidemiological framework supports multiple real-world
            applications in healthcare, environmental monitoring, occupational safety, and policy
            decision-making. The system helps identify disease risks and supports preventive
            healthcare strategies.
          </p>
        </div>
      </section>

      {/* HEALTHCARE */}
      <AppSection
        title="Healthcare Applications"
        items={[
          {
            title: "Disease Risk Prediction",
            desc: "Identification of exposure-disease relationships for early diagnosis and prevention."
          },
          {
            title: "Clinical Decision Support",
            desc: "Providing evidence-based support for healthcare professionals."
          },
          {
            title: "Public Health Monitoring",
            desc: "Tracking disease trends influenced by environmental exposure."
          }
        ]}
      />

      {/* ENVIRONMENT */}
      <AppSection
        title="Environmental Monitoring Applications"
        items={[
          {
            title: "Air Pollution Risk Analysis",
            desc: "Monitoring outdoor and indoor air pollutants and their health effects."
          },
          {
            title: "Environmental Exposure Modeling",
            desc: "Analyzing long-term environmental health risks."
          },
          {
            title: "Health Alert Systems",
            desc: "Generating early warning alerts for pollution-related health risks."
          }
        ]}
      />

      {/* OCCUPATIONAL */}
      <AppSection
        title="Occupational Safety Applications"
        items={[
          {
            title: "Workplace Hazard Identification",
            desc: "Monitoring occupational exposure to chemicals and pollutants."
          },
          {
            title: "Industrial Health Risk Assessment",
            desc: "Predicting disease risks among industrial workers."
          },
          {
            title: "Preventive Occupational Policies",
            desc: "Supporting development of workplace safety standards."
          }
        ]}
      />

      {/* POLICY */}
      <AppSection
        title="Policy and Decision Support"
        items={[
          {
            title: "Evidence-Based Policy Making",
            desc: "Providing scientific insights for environmental and occupational regulations."
          },
          {
            title: "Government Health Planning",
            desc: "Supporting national disease prevention programs."
          }
        ]}
      />

      {/* RESEARCH */}
      <AppSection
        title="Research and Academic Applications"
        items={[
          {
            title: "Epidemiological Research",
            desc: "Providing structured knowledge base for researchers and institutions."
          },
          {
            title: "Global Collaboration",
            desc: "Supporting international research and comparative health studies."
          }
        ]}
      />

      {/* FOOTER */}
      <footer>
        © 2026 Ontology Based Epidemiology Research | All Rights Reserved
      </footer>

    </div>
  );
};

export default Applications;


/* Reusable Component */
const AppSection = ({ title, items }) => {
  return (
    <section className="section">
      <div className="container">

        <h2>{title}</h2>

        <div className="app-grid">
          {items.map((item, index) => (
            <div className="app-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};