function Services() {
  const focusAreas = [
    "ADHD",
    "Anxiety",
    "Bipolar",
    "Mood and Personality",
    "Poly/Couples Work",
    "Depression",
    "PTSD",
    "Peer Relationships",
    "Stress",
  ];

  const services = [
    {
      title: "Digital Biomarker Analysis",
      text: "Interpretation of EEG and GSR data for clinical research.",
    },
    {
      title: "Speech & Text Screening",
      text: "Automated sentiment and emotional marker extraction for therapeutic documentation.",
    },
    {
      title: "Early Intervention Alerts",
      text: "AI-driven scoring for identifying high-risk symptoms in early stages.",
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
          <h1 className="modest-page-title-large">
            Services
          </h1>
          <p className="modest-page-subtitle">
            Multimodal Analysis for Mental Disorder Recognition to Improve Well-being
          </p>
        </div>
      </section>

      <section className="modest-team-section">
        <div className="modest-container-narrow">
          <h2 className="modest-section-title">
            Our Approach to Healing
          </h2>

          <p className="modest-section-desc-no-margin">
            Project MODEST supports well-being by combining multimodal mental
            health analysis with clinical understanding. It helps in observing
            emotional, behavioral, and physiological signals in a structured way.
          </p>

          <p className="text-lg text-[#5f5346] leading-8 mt-6">
            The goal is to support researchers and clinicians with better tools
            for early recognition, documentation, and intervention.
          </p>
        </div>
      </section>

      <section className="modest-section-dark-green">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Areas of Focus
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-semibold">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modest-section-cream">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Technical Support Services
          </h2>

          <div className="modest-grid modest-grid-3 modest-gap-8">
            {services.map((service, index) => (
              <div key={index} className="modest-card-white">
                <h3 className="modest-card-title">
                  {service.title}
                </h3>
                <p className="modest-card-text">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;