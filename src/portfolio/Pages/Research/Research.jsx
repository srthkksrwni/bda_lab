import "./Research.css";

function Research() {
  const researchAreas = [
    "Big Data Analytics",
    "Data Mining",
    "Machine Learning",
    "Deep Learning",
    "Data Stream Processing",
    "Complex Event Processing",
  ];

  const projects = [
    {
      title: "Cyber-Physical Systems for Healthcare",
      description:
        "Research on intelligent healthcare systems integrating sensors, data streams, and real-time analytics.",
    },
    {
      title: "Healthcare Data Stream Mining",
      description:
        "Developing techniques to handle large-scale healthcare data streams for efficient decision making.",
    },
    {
      title: "Personal Assistance Device for Wheelchair Users",
      description:
        "Post-doctoral research focused on assistive technologies and healthcare monitoring systems.",
    },
    {
      title: "AI-driven Healthcare Analytics",
      description:
        "Applying machine learning and deep learning techniques for healthcare prediction and diagnosis.",
    },
  ];

  return (
    <div className="portfolio-research-page">
      <section className="portfolio-research-header">
        <h1>Research</h1>
        <p>
          Exploring innovative solutions in data analytics, artificial
          intelligence, and healthcare systems.
        </p>
      </section>

      <section className="portfolio-research-section">
        <h2>Research Interests</h2>

        <div className="portfolio-research-grid">
          {researchAreas.map((area, index) => (
            <div key={index} className="portfolio-research-card">
              <h3>{area}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-research-section">
        <h2>Current Research Directions</h2>

        <div className="portfolio-project-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Research;