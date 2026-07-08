function Contact() {
  
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
            Contact Us
          </h1>
          <p className="modest-page-subtitle">
            For collaborations, research data, and institutional monitoring applications.
          </p>
        </div>
      </section>

      <section className="modest-team-section">
        <div className="modest-container">
          <h2 className="text-4xl font-serif text-[#6b665b] text-shadow-lg mb-12">
            Institutional Information
          </h2>

          <div className="modest-grid modest-grid-2 modest-gap-8">
            <div className="modest-card">
              <h3 className="modest-card-title">
                Institutional Address
              </h3>
              <p className="text-[#5f5346] leading-8">
                Department of Information Technology,
                <br />
                Indian Institute of Information Technology (IIIT) Allahabad,
                <br />
                Prayagraj, Uttar Pradesh - 211015, India.
              </p>
            </div>

            <div className="modest-card">
              <h3 className="modest-card-title">
                Sanctioning Authority
              </h3>
              <p className="text-[#5f5346] leading-8">
                Council of Science & Technology, U.P.
                <br />
                Letter No. CST/D-715
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="modest-section-dark-green">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Lab Address
          </h2>

          <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl p-10">
            <h3 className="text-3xl font-semibold mb-5">
              Big Data Analytics Lab
            </h3>
            <p className="leading-8">
              Room No.-5243, CV Raman Computer Center-III
              <br />
              IIIT Allahabad, Prayagraj
            </p>
          </div>
        </div>
      </section>

      <section className="modest-section-cream">
        <div className="modest-container">
          <h2 className="modest-section-title modest-text-center">
            Communication
          </h2>

          <div className="modest-grid modest-grid-3 modest-gap-8">
            <div className="modest-card-white">
              <h3 className="modest-card-title">
                Phone
              </h3>
              <p className="modest-card-text">+91-532-2922424</p>
            </div>

            <div className="modest-card-white">
              <h3 className="modest-card-title">
                Official Email
              </h3>
              <p className="text-[#5f5346] wrap-break-words">
                sonali@iiita.ac.in
                <br />
                rsi2026003@iiita.ac.in
                <br />
                prf.sarthak@iiita.ac.in
              </p>
            </div>

            <div className="modest-card-white">
              <h3 className="modest-card-title">
                Personal Email
              </h3>
              <p className="text-[#5f5346] wrap-break-words">
                himanshisingh0312@gmail.com
                sarthakkesarwani2001@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;