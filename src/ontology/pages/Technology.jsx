import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Technology() {

  useEffect(() => {
    document.body.setAttribute("data-page", "technology");
  }, []);

  return (
    <>
    

      {/* ================= PAGE HEADER ================= */}
      <header className="hero">
        <h1>Technologies Used</h1>
        <p>
          Tools and technologies supporting ontology-driven
          knowledge graph inference for geospatial data
        </p>
      </header>

      {/* ================= OVERVIEW ================= */}
      <section className="section show">
        <h2>Technology Stack Overview</h2>
        <p>
          The proposed research framework integrates semantic web technologies,
          machine learning tools, geospatial data processing utilities, and
          modern web technologies. Each component of the technology stack is
          carefully selected to support scalability, interoperability,
          and explainable inference.
        </p>

        <p>
          The combination of symbolic knowledge representation and data-driven
          learning tools enables efficient processing and reasoning over
          large-scale geospatial datasets.
        </p>
      </section>

      {/* ================= ONTOLOGY ================= */}
      <section className="section">
        <h2>Ontology and Semantic Modeling Technologies</h2>
        <p>
          Ontology engineering forms the foundation of the proposed framework.
          Semantic web standards are used to formally represent domain knowledge
          related to geospatial entities, relationships, and constraints.
        </p>

        <ul>
          <li>
            <strong>OWL (Web Ontology Language):</strong>
            Used to define classes, properties, and logical axioms that enable
            semantic reasoning and consistency checking.
          </li>
          <li>
            <strong>RDF (Resource Description Framework):</strong>
            Provides a standardized data model for representing information
            as subject–predicate–object triples.
          </li>
          <li>
            <strong>Protégé:</strong>
            An ontology development environment used for designing,
            visualizing, and validating domain ontologies.
          </li>
        </ul>
      </section>

      {/* ================= KNOWLEDGE GRAPH ================= */}
      <section className="section">
        <h2>Knowledge Graph Technologies</h2>
        <p>
          Knowledge graph technologies are employed to store and manage
          ontology-based representations of geospatial data. These technologies
          support efficient querying, traversal, and integration of
          semantic information.
        </p>

        <ul>
          <li>
            <strong>RDF Triples:</strong>
            Enable structured representation of entities and relationships
            within the knowledge graph.
          </li>
          <li>
            <strong>SPARQL Concepts:</strong>
            Facilitate semantic querying and retrieval of geospatial knowledge
            from the graph.
          </li>
        </ul>
      </section>

      {/* ================= MACHINE LEARNING ================= */}
      <section className="section">
        <h2>Machine Learning Technologies</h2>
        <p>
          Machine learning techniques are integrated to enhance the inference
          capabilities of the knowledge graph. These techniques enable discovery
          of hidden patterns and support rule induction from structured data.
        </p>

        <ul>
          <li>
            <strong>Python-Based ML Frameworks:</strong>
            Used for data preprocessing, feature extraction, and learning
            inference rules from knowledge graph representations.
          </li>
          <li>
            <strong>Hybrid Learning Models:</strong>
            Combine symbolic reasoning with data-driven approaches to improve
            inference accuracy and interpretability.
          </li>
        </ul>
      </section>

      {/* ================= GEOSPATIAL ================= */}
      <section className="section">
        <h2>Geospatial Data Processing Tools</h2>
        <p>
          Geospatial data processing tools are utilized to handle spatial
          attributes, coordinate systems, and spatial relationships prior to
          semantic modeling and inference.
        </p>

        <p>
          These tools ensure accurate spatial representation and alignment,
          which is essential for reliable geospatial reasoning.
        </p>
      </section>

      {/* ================= WEB ================= */}
      <section className="section">
        <h2>Web Technologies</h2>
        <p>
          Modern web technologies are used to implement the user interface
          and visualization components of the proposed framework. The web-based
          system allows users to interact with inferred knowledge and explore
          semantic relationships.
        </p>

        <ul>
          <li><strong>HTML:</strong> Structure and content representation</li>
          <li><strong>CSS:</strong> Responsive layout, dark mode, and animations</li>
          <li><strong>JavaScript:</strong> Interactivity, navigation, and dynamic behavior</li>
        </ul>
      </section>

      {/* ================= INTEGRATION ================= */}
      <section className="section">
        <h2>System Integration</h2>
        <p>
          All technologies are integrated into a unified framework that supports
          end-to-end processing—from raw geospatial data ingestion to ontology-based
          inference and web-based visualization.
        </p>

        <p>
          This integrated architecture ensures modularity, extensibility, and
          ease of future enhancement, making the system suitable for both
          academic research and real-world applications.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Technology;