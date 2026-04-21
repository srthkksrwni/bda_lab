


function Home() {
  return (
    <>

      <header className="ontology-hero">
        <h1>Ontology-Driven Knowledge Graph Inference</h1>
        <p>
          Semantic Reasoning and Machine Learning for Reliable
          Geospatial Big Data Analytics
        </p>
      </header>

      {/* ================= PROBLEM STATEMENT ================= */}
      <section className="ontology-section show">
        <h2>Problem Statement</h2>
        <p>
          The rapid expansion of geospatial big data generated from satellite imagery,
          Internet of Things (IoT) sensors, geographic information systems, and
          location-based services has created significant challenges in data
          understanding, integration, and analysis. These datasets are inherently
          heterogeneous, distributed, and semantically ambiguous, making traditional
          data-driven machine learning approaches insufficient for reliable inference.
        </p>

        <p>
          Existing machine learning techniques primarily operate on numerical features
          and lack the capability to explicitly model semantic relationships, domain
          constraints, and contextual dependencies present in geospatial data.
          Consequently, the inferred knowledge often suffers from inconsistency,
          poor explainability, and limited generalization across domains.
        </p>

        <p>
          This research addresses these limitations by introducing an ontology-driven
          knowledge graph framework that integrates semantic modeling with
          machine learning-based inference. By leveraging domain ontologies and
          structured knowledge representations, the proposed approach aims to
          enable explainable, scalable, and semantically consistent inference
          from large-scale geospatial datasets.
        </p>
      </section>

      {/* ================= FUNDING & DURATION ================= */}
      <section className="ontology-section">
        <h2>Funding & Project Duration</h2>

        <p>
          This research project is supported through external funding to facilitate
          advanced investigation into semantic technologies and intelligent
          geospatial data analysis. The funding enables systematic development
          of ontology models, large-scale experimentation, and dissemination
          of research outcomes through publications and prototype systems.
        </p>

        <p><strong>Funding Agency:</strong> CSTUP (Council of Science & Technology, Uttar Pradesh)</p>
        <p><strong>Project Type:</strong> Sponsored Academic Research Project</p>
        <p><strong>Project Duration:</strong> November 2025 – November 2027</p>

        <p>
          The project duration covers multiple research phases including ontology
          engineering, knowledge graph construction, inference rule learning,
          system implementation, evaluation, and publication of results.
        </p>
      </section>
    </>
  );
}

export default Home;