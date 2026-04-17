import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Applications() {

  useEffect(() => {
    document.body.setAttribute("data-page", "applications");
  }, []);

  return (
    <>
   

      {/* ================= PAGE HEADER ================= */}
      <header className="hero">
        <h1>Applications</h1>
        <p>
          Real-world use cases of ontology-driven
          knowledge graph inference for geospatial data
        </p>
      </header>

      {/* ================= OVERVIEW ================= */}
      <section className="section show">
        <h2>Application Overview</h2>
        <p>
          The proposed ontology-driven knowledge graph inference framework
          has wide applicability across multiple domains that rely on
          geospatial data analysis. By integrating semantic reasoning with
          machine learning, the framework enables reliable, interpretable,
          and scalable decision support.
        </p>

        <p>
          The following applications demonstrate how semantic inference
          can enhance traditional geospatial analytics and support
          complex, real-world problem-solving.
        </p>
      </section>

      {/* ================= APPLICATION 1 ================= */}
      <section className="section">
        <h2>Smart City Planning and Urban Development</h2>
        <p>
          In smart city environments, large volumes of heterogeneous
          geospatial data are generated from sensors, transportation
          systems, and urban infrastructure. The proposed framework
          enables semantic integration of these datasets to support
          informed urban planning and development.
        </p>

        <p>
          Ontology-driven inference allows decision-makers to analyze
          spatial relationships between land use, transportation
          networks, population density, and infrastructure, resulting
          in more sustainable and efficient urban development strategies.
        </p>
      </section>

      {/* ================= APPLICATION 2 ================= */}
      <section className="section">
        <h2>Environmental Monitoring and Climate Analysis</h2>
        <p>
          Environmental monitoring involves continuous analysis of
          geospatial data related to air quality, water resources,
          land cover, and climate variables. Semantic modeling ensures
          consistent representation of environmental entities and processes.
        </p>

        <p>
          The knowledge graph–based inference framework enables discovery
          of hidden environmental patterns and supports early detection
          of environmental risks, contributing to better climate
          impact assessment and policy formulation.
        </p>
      </section>

      {/* ================= APPLICATION 3 ================= */}
      <section className="section">
        <h2>Disaster Management and Risk Assessment</h2>
        <p>
          Disaster management requires timely and accurate interpretation
          of geospatial data from multiple sources, including satellite
          imagery, sensor networks, and historical disaster records.
        </p>

        <p>
          The proposed framework supports semantic reasoning to identify
          vulnerable regions, predict potential impacts, and assist
          emergency response planning, thereby enhancing preparedness
          and mitigation strategies.
        </p>
      </section>

      {/* ================= APPLICATION 4 ================= */}
      <section className="section">
        <h2>Land Use and Urban Growth Analysis</h2>
        <p>
          Understanding land-use dynamics and urban expansion is
          essential for sustainable development. The ontology-driven
          approach enables semantic classification and analysis of
          land-use patterns over time.
        </p>

        <p>
          By integrating spatial and temporal relationships within a
          knowledge graph, the framework supports long-term urban growth
          analysis and evidence-based land management decisions.
        </p>
      </section>

      {/* ================= APPLICATION 5 ================= */}
      <section className="section">
        <h2>Decision Support Systems</h2>
        <p>
          The integration of semantic reasoning and machine learning
          facilitates the development of intelligent decision support
          systems for geospatial applications.
        </p>

        <p>
          These systems provide interpretable recommendations based on
          inferred knowledge, enabling domain experts to make informed
          decisions with higher confidence and transparency.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Applications;