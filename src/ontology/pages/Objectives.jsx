import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Objectives() {

  useEffect(() => {
    document.body.setAttribute("data-page", "objectives");
  }, []);

  return (
    <>
    

      {/* ================= PAGE HEADER ================= */}
      <header className="hero">
        <h1>Project Objectives</h1>
        <p>
          Defining clear research goals for ontology-driven
          knowledge graph inference from geospatial big data
        </p>
      </header>

      {/* ================= OBJECTIVE 1 ================= */}
      <section className="section show">
        <h2>Objective 1: Ontology-Based Representation of Geospatial Data</h2>
        <p>
          The first objective of this research is to formally represent heterogeneous
          geospatial data using domain-specific ontologies. Geospatial datasets often
          originate from diverse sources such as satellite imagery, sensor networks,
          and spatial databases, each with distinct formats and semantics.
        </p>

        <p>
          By designing well-structured ontologies, spatial entities, attributes,
          relationships, and constraints can be explicitly defined. This semantic
          representation enables meaningful integration of multi-source data and
          provides a common conceptual framework for further reasoning and analysis.
        </p>
      </section>

      {/* ================= OBJECTIVE 2 ================= */}
      <section className="section">
        <h2>Objective 2: Construction of a Geospatial Knowledge Graph</h2>
        <p>
          The second objective focuses on transforming ontology-based representations
          into a large-scale geospatial knowledge graph. Knowledge graphs enable
          structured storage of entities and their relationships in the form of
          interconnected triples, facilitating efficient querying and reasoning.
        </p>

        <p>
          This objective aims to develop methods for mapping geospatial data instances
          to ontology concepts and relationships, resulting in a unified and
          semantically enriched knowledge graph that captures both spatial and
          contextual information.
        </p>
      </section>

      {/* ================= OBJECTIVE 3 ================= */}
      <section className="section">
        <h2>Objective 3: Learning and Applying Inference Rules</h2>
        <p>
          A key objective of this research is to design machine learning techniques
          capable of learning inference rules from data encoded in the knowledge graph.
          These rules aim to uncover implicit relationships and hidden patterns that
          are not explicitly present in the raw datasets.
        </p>

        <p>
          The learned rules are imposed on the knowledge graph to infer new knowledge
          while preserving semantic consistency. This hybrid approach combines the
          strengths of symbolic reasoning and data-driven learning to enhance
          inference accuracy and reliability.
        </p>
      </section>

      {/* ================= OBJECTIVE 4 ================= */}
      <section className="section">
        <h2>Objective 4: Reliable and Explainable Knowledge Extraction</h2>
        <p>
          This objective focuses on extracting reliable and explainable information
          from inferred knowledge. Unlike black-box models, ontology-driven inference
          enables traceability of results through explicit rules and semantic relations.
        </p>

        <p>
          The goal is to ensure that inferred outcomes are not only accurate but also
          interpretable, allowing domain experts to validate results and understand
          the reasoning process behind each inference.
        </p>
      </section>

      {/* ================= OBJECTIVE 5 ================= */}
      <section className="section">
        <h2>Objective 5: Scalability and Performance Optimization</h2>
        <p>
          Geospatial big data is characterized by large volume, velocity, and variety.
          Therefore, an important objective of this project is to design scalable
          algorithms capable of handling large knowledge graphs efficiently.
        </p>

        <p>
          This includes optimizing data storage, inference execution, and query
          processing to ensure that the proposed framework remains practical for
          real-world, large-scale geospatial applications.
        </p>
      </section>

      {/* ================= OBJECTIVE 6 ================= */}
      <section className="section">
        <h2>Objective 6: Development of a Web-Based Inference Framework</h2>
        <p>
          The final objective is to design and implement a web-based system that
          demonstrates the proposed ontology-driven inference framework. This system
          serves as a platform for visualization, interaction, and evaluation of
          inferred geospatial knowledge.
        </p>

        <p>
          The web interface enables users to explore data, understand inference
          outcomes, and assess the effectiveness of semantic reasoning combined with
          machine learning techniques.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Objectives;