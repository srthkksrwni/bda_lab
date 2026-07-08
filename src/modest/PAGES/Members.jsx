function Members() {
  const members = [
    {
      role: "Principal Investigator",
      name: "Prof. Sonali Agarwal",
      image: "/Sonali.jpg",
      email: "sonali@iiita.ac.in",
      focus:
        "Stream Analytics, Big Data Analytics, Complex Event Processing, Machine Learning.",
      description:
        "Prof. Sonali Agarwal is a Professor at IIIT Allahabad with a Ph.D. in Big Data and Machine Learning. She leads the MODEST project and focuses on transforming conventional algorithms into scalable multimodal mental health diagnostic tools.",
    },

    {
      role: "Co-Investigator",
      name: "Prof. Vrijendra Singh",
      image: "/vrijendra.jpg",
      email: "vrij@iiita.ac.in",
      focus:
        "Data Mining & Machine Learning, Digital Signal & Image Processing, Information Security & Forensics.",
      description:
        "Prof. Vrijendra Singh is a Professor at IIIT Allahabad. His expertise spans Biomedical Analysis, Artificial Neural Networks, and Digital Signal Processing, contributing to audio enhancement and image denoising within the MODEST framework.",
    },

    {
      role: "Co-Investigator",
      name: "Dr. Narinder Singh",
      image: "/Narinder Singh Punn.jpg",
      email: "narinder@iiitm.ac.in",
      focus:
        "Mathematical Modeling, Numerical Analysis, Computational Fluid Dynamics.",
      description:
        "Dr. Narinder Singh is an Assistant Professor at ABV-IIITM Gwalior. He contributes expertise in mathematical modeling of multimodal datasets and optimization of diagnostic algorithms.",
    },

    {
      role: "Co-Investigator",
      name: "Prof. Karm Veer Arya",
      image: "/arya.jpg",
      email: "kvarya@iiitm.ac.in",
      focus:
        "Image Processing, Artificial Intelligence, Machine Learning.",
      description:
        "Prof. Karm Veer Arya is a Professor at ABV-IIITM Gwalior with over 34 years of experience. His expertise in AI, machine learning, and image processing supports technical validation of the MODEST framework.",
    },
  ];

  return (
    <>
      {/* HERO */}
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
            Team & Governance
          </h1>

          <p className="modest-page-subtitle">
            Multimodal Analysis for Mental Disorder Recognition to Improve
            Well-being
          </p>
        </div>
      </section>

      {/* FUNDING */}
      <section className="bg-white py-16 px-6">
        <div className="modest-container">
          <div className="modest-card">
            <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-6">
              Funding Agency
            </h2>

            <p className="modest-section-desc-no-margin">
              Council of Science & Technology, Uttar Pradesh (CSTUP)
              <br />
              Government of Uttar Pradesh
            </p>

            <p className="mt-6 text-[#5f5346]">
              <strong>Program Leadership:</strong> Ms. Pooja Yadav
              <br />
              Joint Director, Council of Science & Technology, Uttar Pradesh
            </p>
          </div>
        </div>
      </section>

      {/* MEMBERS */}
      <section className="modest-section-dark-green">
        <div className="modest-container">
          <h2 className="text-4xl font-serif text-center text-shadow-lg mb-16">
            Project Leadership
          </h2>

          <div className="space-y-12">
            {members.map((member, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[1fr_220px] gap-10 items-center bg-white/10 p-8 rounded-2xl"
              >
                <div>
                  <p className="text-[#d9c39a] font-semibold mb-2">
                    {member.role}
                  </p>

                  <h3 className="text-3xl font-semibold mb-4">
                    {member.name}
                  </h3>

                  <p className="leading-8 mb-4">
                    {member.description}
                  </p>

                  <p className="leading-8">
                    <strong>Academic Focus:</strong> {member.focus}
                  </p>

                  <p className="mt-4">
                    <strong>Email:</strong> {member.email}
                  </p>
                </div>

                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-44 h-44 rounded-full object-cover border-4 border-[#d9c39a]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="bg-[#f3eee8] py-20 px-6">
        <div className="modest-container">
          <div className="modest-card-white">
            <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-6">
              Collaborators & Stakeholders
            </h2>

            <p className="modest-section-desc-no-margin">
              The team actively engages with clinical domain experts,
              caregivers, and professional psychologists to ensure that the
              MODEST framework meets real-world clinical standards and provides
              actionable insights for mental health assessment and support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Members;