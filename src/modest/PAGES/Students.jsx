function Students() {
  const students = [
    {
      name: "Sarthak Kesarwani",
      image: "/sarthakIMG.jpg",
      role: "Research Assistant (Current)",
      text: "Working as a Research Assistant on the MODEST project, contributing to multimodal data analysis and the development of AI-driven mental health solutions.",
    },
    {
      name: "Himanshi Singh",
      image: "/Himanshi Singh.jpeg",
      role: "Research Assistant (2024 - 2026)",
      text: "Worked as a Research Assistant on the MODEST project, contributing to dataset curation and the development of deep learning models for emotion recognition.",
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
            Students Team
          </h1>

          <p className="modest-page-subtitle">
            Big Data Analytics Lab Contributors
          </p>
        </div>
      </section>

      <section className="modest-team-section">
        <div className="modest-container">
          <p className="modest-section-desc">
            <strong>Big Data Analytics Lab Contributors</strong> Under the
            mentorship of <strong>Prof. Sonali Agarwal</strong>, students from
            the Big Data Analytics Lab at IIIT Allahabad work on the technical
            pipelines of Project MODEST.
          </p>

          <div className="space-y-8">
            {students.map((student, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[120px_1fr] gap-8 items-center bg-[#f9f6f2] p-8 rounded-2xl shadow"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#9b4ab8]"
                />

                <div>
                  <h2 className="text-3xl font-semibold text-[#9b4ab8]">
                    {student.name}
                  </h2>

                  <h3 className="text-xl font-semibold mt-2 text-[#222]">
                    {student.role}
                  </h3>

                  <p className="text-[#5f5346] leading-8 mt-4">
                    {student.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-6 text-lg text-[#5f5346] leading-8">
            <p>
              <strong>M.Tech Research:</strong> 4 postgraduate students are
              currently developing the <strong>multimodal fusion logic</strong>{" "}
              and <strong>Physiological (EEG/GSR) signal processing</strong>{" "}
              modules.
            </p>

            <p>
              <strong>B.Tech Research Interns:</strong> 8 undergraduate students
              are assisting in dataset curation,{" "}
              <strong>Visual (CNN) expression encoding</strong>, and the
              development of the web-based assessment interface.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Students;