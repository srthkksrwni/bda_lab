import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Methodology() {

  useEffect(() => {
    document.body.setAttribute("data-page", "methodology");
  }, []);

  return (
    <>
   

      {/* ================= PAGE HEADER ================= */}
      <header className="hero">
        <h1>Research Methodology</h1>
        <p>
          Ontology engineering, knowledge graph construction,
          and machine learning–based inference for geospatial data
        </p>
      </header>

      {/* ================= METHODOLOGY OVERVIEW ================= */}
      <section className="section show">
        <h2>Methodology Overview</h2>
        <p>
          The proposed methodology adopts a systematic and layered approach to enable
          semantic inference from large-scale geospatial datasets. It integrates
          ontology engineering, knowledge graph modeling, and machine learning–based
          rule induction to ensure reliable, explainable, and scalable inference.
        </p>

        <p>
          Each stage of the methodology is designed to address specific challenges
          associated with geospatial big data, including heterogeneity, semantic
          ambiguity, and limited interpretability of conventional data-driven models.
        </p>
      </section>

      {/* ================= STEP 1 ================= */}
      <section className="section">
        <h2>Step 1: Geospatial Data Collection and Preprocessing</h2>
        <p>
          The first step involves the acquisition of geospatial data from heterogeneous
          sources such as satellite imagery, sensor-based observations, spatial
          databases, and publicly available geospatial repositories.
        </p>

        <p>
          Preprocessing techniques are applied to clean, normalize, and structure the
          data. This includes handling missing values, spatial alignment, coordinate
          system normalization, and transformation of raw data into formats suitable
          for semantic modeling.
        </p>
      </section>

      {/* ================= STEP 2 ================= */}
      <section className="section">
        <h2>Step 2: Ontology Design and Semantic Modeling</h2>
        <p>
          In this step, domain-specific ontologies are designed to formally represent
          geospatial entities, attributes, relationships, and constraints. Ontology
          engineering ensures that domain knowledge is explicitly captured in a
          machine-interpretable form.
        </p>

        <p>
          The ontology serves as a conceptual backbone for integrating heterogeneous
          datasets and provides semantic consistency across different data sources.
          It also enables reasoning and validation through well-defined classes,
          properties, and axioms.
        </p>
      </section>

      {/* ================= STEP 3 ================= */}
      <section className="section">
        <h2>Step 3: Knowledge Graph Construction</h2>
        <p>
          The ontology-based models are transformed into a geospatial knowledge graph,
          where entities and relationships are represented as interconnected triples.
          This structured representation enables efficient storage, querying, and
          traversal of semantic relationships.
        </p>

        <p>
          The knowledge graph integrates both spatial and non-spatial attributes,
          allowing contextual relationships to be captured and utilized during the
          inference process.
        </p>
      </section>

      {/* ================= STEP 4 ================= */}
      <section className="section">
        <h2>Step 4: Machine Learning–Based Inference Rule Learning</h2>
        <p>
          Machine learning techniques are employed to learn inference rules from the
          structured knowledge graph. These rules aim to identify hidden patterns,
          correlations, and implicit relationships that are not directly observable
          in the raw data.
        </p>

        <p>
          The learned rules are designed to complement semantic reasoning by enhancing
          inference capability while preserving interpretability and domain constraints.
        </p>
      </section>

      {/* ================= STEP 5 ================= */}
      <section className="section">
        <h2>Step 5: Semantic Reasoning and Knowledge Inference</h2>
        <p>
          The learned inference rules are imposed on the knowledge graph to infer new
          facts and relationships. Semantic reasoning mechanisms ensure that inferred
          knowledge remains consistent with the ontology constraints and domain logic.
        </p>

        <p>
          This hybrid inference strategy combines symbolic reasoning with data-driven
          learning, resulting in reliable and explainable inference outcomes.
        </p>
      </section>

      {/* ================= STEP 6 ================= */}
      <section className="section">
        <h2>Step 6: Evaluation and Analysis</h2>
        <p>
          The inferred knowledge is evaluated using qualitative and quantitative
          measures to assess accuracy, consistency, and reliability. Comparative
          analysis is performed against traditional machine learning approaches
          to demonstrate the effectiveness of the proposed framework.
        </p>

        <p>
          Performance metrics such as inference accuracy, scalability, and response
          time are analyzed to validate the applicability of the approach to
          real-world geospatial scenarios.
        </p>
      </section>

      {/* ================= STEP 7 ================= */}
      <section className="section">
        <h2>Step 7: Web-Based System Implementation</h2>
        <p>
          Finally, a web-based inference framework is developed to visualize and
          interact with the geospatial knowledge graph and inferred results. The
          system provides an intuitive interface for exploring semantic relationships
          and understanding inference outcomes.
        </p>

        <p>
          This implementation serves as a proof-of-concept and facilitates practical
          demonstration, validation, and dissemination of the proposed research.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Methodology;