function NewsEvent() {
  const updates = [
    {
      date: "February 2026",
      title: "DEXA 2025 Conference Presentation",
      text: "The MODEST team presented findings on early mental disorder score estimation at DEXA in partnership with Springer Nature.",
    },
    {
      date: "December 2025",
      title: "IEEE INDICON 2025 Submission",
      text: "Research on Explainable AI for mental health diagnostics was submitted for presentation.",
    },
    {
      date: "August 2025",
      title: "Open Source Mental Health Informatics",
      text: "A GitHub repository was launched for datasets, algorithms, and mental health informatics resources.",
    },
    {
      date: "Ongoing",
      title: "Wearable Integration",
      text: "Bluetooth-enabled EEG and GSR sensors are being integrated with the MODEST framework.",
    },
  ];

  const events = [
    "MODEST Symposium 2026",
    "Student Counseling Drive",
    "Student Workshop at IIIT Allahabad",
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
            News & Recent Events
          </h1>
          <p className="modest-page-subtitle">
            Latest milestones, conferences, and community workshops.
          </p>
        </div>
      </section>

      <section className="modest-team-section">
        <div className="modest-container">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-12">
            Latest Updates
          </h2>

          <div className="modest-space-y-6">
            {updates.map((item, index) => (
              <div key={index} className="modest-card">
                <p className="text-[#50584d] font-semibold mb-2">{item.date}</p>
                <h3 className="modest-card-title">
                  {item.title}
                </h3>
                <p className="modest-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modest-section-dark-green">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Upcoming Events
          </h2>

          <div className="modest-grid modest-grid-3 modest-gap-8">
            {events.map((event, index) => (
              <div key={index} className="modest-card-translucent">
                <h3 className="modest-card-title-white">{event}</h3>
                <p>
                  Planned activity under the MODEST project for research,
                  clinical collaboration, and student awareness.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsEvent;