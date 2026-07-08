function Framework() {
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
            The MODEST Framework
          </h1>
          <p className="modest-page-subtitle">
            Architecting Intelligent Solutions for Clinical Mental Health Diagnostics
          </p>
        </div>
      </section>

      <section className="modest-team-section">
        <div className="modest-container">
          <h2 className="modest-section-title">
            Framework Architecture
          </h2>
          <p className="modest-section-desc-no-margin">
            The MODEST framework is a generalized multimodal fusion framework
            designed to estimate mental disorder scores and support early
            clinical interventions.
          </p>
        </div>
      </section>

      <section className="modest-section-dark-green">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Multimodal Input Integration
          </h2>

          <div className="modest-grid modest-grid-2 modest-gap-8">
            {[
              "Visual Image / Video: CNNs such as ResNet and VGGFace for face detection and expression encoding.",
              "Audio Speech: Prosodic features, MFCC, Librosa, and Whisper-based audio analysis.",
              "Text Transcript: Speech-to-text APIs with BERT and Paragraph Vector embeddings.",
              "Physiological EEG / GSR: Real-time wearable signal processing for stress markers.",
            ].map((item, index) => (
              <div key={index} className="modest-card-translucent">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modest-section-cream">
        <div className="modest-container modest-text-center">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-10">
            Framework Overview
          </h2>

          <div className="bg-white rounded-2xl shadow p-10">
            <h3 className="modest-card-title-large">
              MODEST Framework Architecture
            </h3>
            <p className="modest-card-text">
              Overview of the MODEST multimodal framework integrating visual,
              audio, text, and physiological data streams.
            </p>
          </div>
        </div>
      </section>

      <section className="modest-team-section">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Core AI Techniques
          </h2>

          <div className="modest-grid modest-grid-3 modest-gap-8">
            {[
              "Fusion Models: Early, Late, and Hybrid cross-attention fusion.",
              "Explainable AI: Interpretable diagnostic support for clinicians.",
              "Domain Adaptation: Relating demographics and mental health patterns.",
            ].map((item, index) => (
              <div key={index} className="modest-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modest-section-dark-green">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            System Deliverables
          </h2>

          <div className="modest-grid modest-grid-2 modest-gap-8">
            <div className="modest-card-translucent">
              <h3 className="modest-card-title-white">Mobile Application</h3>
              <p>Beta version for audio/video recording and EEG wearable connection.</p>
            </div>

            <div className="modest-card-translucent">
              <h3 className="modest-card-title-white">Web-based UI</h3>
              <p>Interface for real-time assessment and visual analytics.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Framework;