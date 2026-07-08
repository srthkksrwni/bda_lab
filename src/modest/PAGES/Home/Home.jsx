function Home() {
  return (
    <>
      <main className="bg-white text-[#2f332d]">
        {/* Hero */}
        <section className="modest-hero-header-full">
          <img
            src="/Image/About-bg.png"
            alt=""
            className="modest-bg-image-cover"
          />

          <div className="modest-hero-content">
            <h1 className="modest-hero-main-title">
              MODEST
            </h1>

            <h2 className="modest-hero-subtitle">
              Multimodal Analysis for Mental Disorder Recognition to Improve
              Well-being
            </h2>
          </div>
        </section>

        {/* MODEST Initiative */}
        <section className="grid items-center gap-12 md:gap-16 px-6 sm:px-10 py-16 md:py-24 md:grid-cols-2 md:px-28">
          <div>
            <h2 className="mb-6 md:mb-8 font-serif text-3xl md:text-4xl italic text-[#6B705C]">
              The MODEST Initiative
            </h2>

            <p className="modest-p-block">
              The <b>MODEST</b> project addresses the critical need for early and
              accurate mental disorder recognition. By leveraging
              state-of-the-art <b>Multimodal Fusion</b>, our research combines
              visual expressions, linguistic patterns from textual data, and
              subtle user interaction behaviors.
            </p>

            <p className="text-base md:text-lg leading-8 md:leading-9">
              Our objective is to create a robust Electronic Health framework
              that assists clinicians in the early identification of conditions
              such as Depression and ADHD, moving beyond traditional survey-based
              diagnostics into the era of Intelligent Healthcare.
            </p>
          </div>

          <div className="modest-flex-center">
            <img
              src="/Image/mental-health.png"
              alt="Mental Health Awareness Logo"
              className="modest-img-contain"
            />
          </div>
        </section>

        {/* Principal Investigator */}
        <section className="modest-pi-section">
          <div className="modest-grid modest-grid-pi">
            <div className="modest-text-center">
              <img
                src="/Image/Sonali Maam.jpg"
                alt="Prof. Sonali Agarwal"
                className="modest-pi-avatar"
              />

              <a
                href="https://profile.iiita.ac.in/sonali/"
                target="_blank"
                rel="noopener noreferrer"
                className="modest-btn-primary"
              >
                View Full Profile
              </a>
            </div>

            <div>
              <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
                Principal Investigator
              </h2>

              <p className="mb-6 text-3xl md:text-4xl font-bold">
                Prof. Sonali Agarwal
              </p>

              <p className="mb-8 text-lg md:text-xl font-semibold">
                Professor, Dept. of Information Technology,{" "}
                <span className="text-[#f8f9f6]">IIIT Allahabad</span>
              </p>

              <p className="mb-8 text-base md:text-lg leading-8 md:leading-9">
                Prof. Sonali Agarwal brings over two decades of expertise in{" "}
                <b>Big Data Analytics, Machine Learning, and Data Mining</b>.
                She has been a pioneer in applying intelligent systems to
                healthcare problems, having published over 200 research papers
                in prestigious international journals and conferences.
              </p>

              <p className="text-base md:text-lg leading-8 md:leading-9">
                Under her leadership, the lab focuses on developing
                technology-enabled environments to solve complex real-world
                social and medical challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Dataset + Community */}
        <section className="grid gap-8 md:gap-10 bg-[#f4efeb] px-6 sm:px-10 py-16 md:py-24 md:grid-cols-2 md:px-28">
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h2 className="mb-5 font-serif text-3xl md:text-4xl text-[#6B705C]">
              Open Datasets
            </h2>

            <p className="mb-8 text-base md:text-lg leading-8">
              Access our curated multimodal datasets for mental health research
              and analysis.
            </p>

            <a
              href="https://github.com/BDA-IIITA/MODEST"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 md:mt-8 rounded-md bg-[#43453f] px-8 md:px-10 py-3 text-white transition hover:bg-[#4b5146]"
            >
              View Repository
            </a>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h2 className="mb-5 font-serif text-3xl md:text-4xl text-[#6B705C]">
              Community
            </h2>

            <p className="mb-8 text-base md:text-lg leading-8">
              Wellness initiatives specifically tailored for the IIIT Allahabad
              student communities.
            </p>

            <a
              href="https://bdasp.iiita.ac.in/#/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 md:mt-8 rounded-md bg-[#6B705C] px-8 md:px-10 py-3 text-white transition hover:bg-[#4b5146]"
            >
              Join us
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;