function ResearchPublication() {
  const researchCards = [
    {
      title: "Multimodal Fusion Framework",
      text: "Integration of interviews, voice patterns, facial expressions, and EEG/GSR signals.",
    },
    {
      title: "Explainable AI",
      text: "AI-generated scores are designed to be understandable for clinical professionals.",
    },
    {
      title: "Domain Adaptation",
      text: "Studies how demographic and environmental factors relate to mental health conditions.",
    },
  ];

  const publications = [
    {
      title:
        "Innovative Framework for Early Estimation of Mental Disorder Scores to Enable Timely Interventions",
      info: "Singh, H., Agarwal, S., Singh, V. | DEXA 2025, Springer Nature",
    },
    {
      title:
        "XAI-Enabled Framework to Estimate Mental Disorder Using Fusion Approaches",
      info: "Submitted to IEEE INDICON 2025",
    },
    {
      title:
        "Multimodal Data-Driven Classification of Mental Disorders",
      info: "arXiv:2502.03943, 2025",
    },
  ];

  return (
    <>
      <section
        className="modest-hero-header"
        style={{
          backgroundImage: "url('/Image/About-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="modest-container modest-text-center">
          <h1 className="modest-page-title">
            Research & Publications
          </h1>
          <p className="modest-page-subtitle">
            Advancing Mental Health Informatics through Multimodal Fusion
          </p>
        </div>
      </section>

      <section className="modest-team-section">
        <div className="modest-container">
          <h2 className="modest-section-title">
            Research Focus & Methodology
          </h2>

          <p className="modest-section-desc">
            Our research moves away from single-source data and uses a fusion
            approach to understand a user's mental state through multiple data
            sources.
          </p>

          <div className="modest-grid modest-grid-3 modest-gap-8">
            {researchCards.map((card, index) => (
              <div key={index} className="modest-card">
                <h3 className="modest-card-title">
                  {card.title}
                </h3>
                <p className="modest-card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modest-section-dark-green">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Key Publications
          </h2>

          <div className="modest-space-y-6">
            {publications.map((paper, index) => (
              <div key={index} className="modest-card-translucent">
                <h3 className="modest-card-title-white">{paper.title}</h3>
                <p className="modest-card-text-white">{paper.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modest-section-cream">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Technical Frameworks
          </h2>

          <div className="modest-grid modest-grid-3 modest-gap-8">
            <div className="modest-card-white">
              <h3 className="modest-card-title">
                Vision Pipeline
              </h3>
              <p>CNN-based face detection and expression encoding.</p>
            </div>

            <div className="modest-card-white">
              <h3 className="modest-card-title">
                Acoustic Pipeline
              </h3>
              <p>Pitch, tone, pause, and voice pattern analysis.</p>
            </div>

            <div className="modest-card-white">
              <h3 className="modest-card-title">
                Physiological Pipeline
              </h3>
              <p>EEG and GSR signal processing for stress response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="modest-team-section">
        <div className="modest-container">
          <h2 className="modest-section-title">
            Deliverables & Progress
          </h2>

          

         

          <div className="modest-grid modest-grid-3 modest-gap-6">
            {[
              "Dataset Curation",
              "Baseline Model Development",
              "Initial Fusion Logic",
              "Real-time Validation",
              "Web-interface Deployment",
              "Mobile App Integration",
            ].map((item, index) => (
              <div key={index} className="modest-card-small">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ResearchPublication;