// Objectives.jsx
import "../styles.css";
import useFadeIn from "../hooks/useFadeIn";

const Objectives = () => {
  useFadeIn();
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
          src="/images/head backgrounds/23148.jpg"
          alt="Banner"
          className="banner-img"
        />

        <div className="banner-text">
          <h1>Project Objectives</h1>
        </div>
      </section>

      {/* MAIN OBJECTIVE */}
      <section className="section card">
        <div className="container">

          <h2>Overall Objective</h2>

          <p>
            The primary objective of this research project is to develop an ontology-driven knowledge
            framework for modeling and analyzing environmental and occupational epidemiology
            data in the Indian context.
          </p>

          <p>
            The project aims to integrate heterogeneous environmental and healthcare datasets,
            enable structured knowledge representation, and support advanced data mining
            techniques for disease risk analysis and decision support.
          </p>

          <ul className="objective-list">
            <li>Develop a standardized ontology for environmental and occupational epidemiology.</li>
            <li>Integrate epidemiological datasets from multiple heterogeneous sources into a unified knowledge base.</li>
            <li>Design mathematical and simulation models to analyze exposure-disease relationships.</li>
            <li>Apply ontology-based data mining techniques to identify hidden health risk patterns.</li>
            <li>Develop predictive and rule-based systems for occupational and environmental health assessment.</li>
            <li>Support evidence-based policy making and healthcare decision support systems.</li>
          </ul>

        </div>
      </section>

      {/* RESEARCH QUESTIONS */}
      <section className="section card ">
        <div className="container">

          <h2>Key Research Questions</h2>

          <ul className="objective-list">
            <li>What is the relationship between personal habits such as smoking and dietary patterns and disease burden?</li>
            <li>How do environmental exposures like air pollution influence cardio-respiratory health?</li>
            <li>What impact do workplace exposure conditions have on disease development?</li>
            <li>How can ontology-driven data mining improve epidemiological data analysis?</li>
          </ul>

        </div>
      </section>

      {/* CONTRIBUTIONS */}
      <section className="section card">
        <div className="container">

          <h2>Expected Contributions</h2>

          <p>
            The project is expected to contribute toward the development of structured epidemiological
            knowledge repositories, improved disease risk prediction models, and enhanced decision
            support tools for policymakers and healthcare professionals.
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

export default Objectives;