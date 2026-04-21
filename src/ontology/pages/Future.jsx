import { useEffect } from "react";



function Future() {

  useEffect(() => {
    document.body.setAttribute("data-page", "future");
  }, []);

  return (
    <>

      {/* HEADER */}
      <header className="ontology-hero">
        <h1>Future Work</h1>
        <p>
          Potential research extensions and advancements
          for ontology-driven geospatial inference
        </p>
      </header>

      {/* OVERVIEW */}
      <section className="ontology-section show">
        <h2>Future Research Directions</h2>
        <p>
          While the proposed framework establishes a strong foundation for
          ontology-driven knowledge graph inference, several research
          directions can further enhance its applicability, scalability,
          and intelligence.
        </p>
      </section>

      {/* FUTURE 1 */}
      <section className="ontology-section">
        <h2>Integration with Real-Time Geospatial Data</h2>
        <p>
          Integration with real-time geospatial sources such as IoT sensors
          and satellite feeds will enable dynamic knowledge graph updates
          and real-time inference.
        </p>
      </section>

      {/* FUTURE 2 */}
      <section className="ontology-section">
        <h2>Spatio-Temporal Reasoning</h2>
        <p>
          Future work will extend the framework to include temporal
          dimensions for better analysis of changes over time.
        </p>
      </section>

      {/* FUTURE 3 */}
      <section className="ontology-section">
        <h2>Deep Learning–Assisted Rule Generation</h2>
        <p>
          Combining deep learning with symbolic reasoning will improve
          inference accuracy while maintaining explainability.
        </p>
      </section>

      {/* FUTURE 4 */}
      <section className="ontology-section">
        <h2>Scalability and Large-Scale Deployment</h2>
        <p>
          Optimizing performance for large-scale datasets and real-world
          deployments is a key future goal.
        </p>
      </section>

      {/* FUTURE 5 */}
      <section className="ontology-section">
        <h2>Interoperability and Standardization</h2>
        <p>
          Aligning with global standards will ensure interoperability and
          wider adoption of the framework.
        </p>
      </section>

    </>
  );
}

export default Future;