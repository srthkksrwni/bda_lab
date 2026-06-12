import "./Experience.css";

function Experience() {
  return (
    <section className="portfolio-experience-page">
      <h1>Experience</h1>

      <div className="portfolio-timeline">

        <div className="portfolio-timeline-section">
          <h2>Industry Experience</h2>

          <div className="portfolio-timeline-card">
            <span>June 2024 – December 2024</span>
            <h3>Data Scientist</h3>
            <p>
              DGRakshak Private Limited, Prayagraj, U.P., India
            </p>
          </div>
        </div>

        <div className="portfolio-timeline-section">
          <h2>Academic Experience</h2>

          <div className="portfolio-timeline-card">
            <span>February 2018 – May 2024</span>
            <h3>Teaching Assistant</h3>
            <p>
              Information Technology Department, Indian Institute of
              Information Technology Allahabad
            </p>
          </div>

          <div className="portfolio-timeline-card">
            <span>10th August 2011 – January 2018</span>
            <h3>Assistant Professor</h3>
            <p>
              Information Technology Department, Galgotias College of
              Engineering & Technology, Greater Noida
            </p>
          </div>

          <div className="portfolio-timeline-card">
            <span>19th July 2010 – 9th August 2011</span>
            <h3>Senior Lecturer</h3>
            <p>
              Computer Science Department, B.B.S.C.E.T., Allahabad
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;