import { useEffect } from "react";



function Publications() {

  useEffect(() => {
    document.body.setAttribute("data-page", "publications");
  }, []);

  return (
    <>

      {/* ================= PAGE HEADER ================= */}
      <header className="ontology-hero">
        <h1>Publications & Research Team</h1>
        <p>
          Research contributors and scholarly outputs
          of the Geospatial Knowledge Graph Inference project
        </p>
      </header>

      {/* ================= TEAM ================= */}
      <section className="ontology-section show">
        <h2>Research Team</h2>

        <div className="ontology-team-vertical">

          {/* GUIDE */}
          <div className="ontology-team-card">
            <div className="ontology-team-info">
              <h3>Dr. Triloki Pant</h3>
              <div className="ontology-team-role">Principal Investigator</div>
              <p><strong>Affiliation:</strong> IIIT Allahabad </p>
              <p>
                <a href="https://scholar.google.com/citations?user=Uh4AsZsAAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a> |
                <a href="https://it.iiita.ac.in/?pg=facultypage&uid=tpant" target="_blank">Faculty Profile</a>
              </p>
            </div>

            <div className="ontology-team-image">
              <img src="/triloki.jpg" alt="Dr. Triloki Pant" />
            </div>
          </div>

          {/* CO-GUIDE */}
          <div className="ontology-team-card">
            <div className="ontology-team-info">
              <h3>Prof. Sonali Aggrawal</h3>
              <div className="ontology-team-role">Co-Principal Investigator</div>
              <p><strong>Affiliation:</strong> IIIT Allahabad </p>
              <p>
                <a href="https://scholar.google.com/citations?user=hPvt6d8AAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a> |
                <a href="https://profile.iiita.ac.in/sonali/" target="_blank">Faculty Profile</a>
              </p>
            </div>

            <div className="ontology-team-image">
              <img src="/Sonali.jpg" alt="Prof. Sonali Aggrawal" />
            </div>
          </div>

          {/* YOU */}
          <div className="ontology-team-card">
            <div className="ontology-team-info">
              <h3>Md Inzmam</h3>
              <div className="ontology-team-role">Junior Research Assistant</div>
              <p><strong>Affiliation:</strong> IIIT Allahabad </p>
              <p>
                <a href="https://scholar.google.com/citations?user=nRVUPksAAAAJ&hl=en" target="_blank">Google Scholar</a> |
                <a href="https://orcid.org/0009-0006-4604-5804" target="_blank">Portfolio</a>
              </p>
            </div>

            <div className="ontology-team-image">
              <img src="/inzmam.jpg" alt="Md Inzmam" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= PUBLICATIONS ================= */}
      <section className="ontology-section">
        <h2>Publications</h2>

        <div className="ontology-pub-list">

          <div className="ontology-pub-item">
            <strong>
              Ontology-Based Knowledge Modeling and Uncertainty-Aware Outdoor Air Quality Assessment Using Weighted Interval Type-2 Fuzzy Logic
            </strong>
            <br />
            <a href="https://arxiv.org/abs/2603.19683" target="_blank">
              View Publication (arXiv)
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Publications;