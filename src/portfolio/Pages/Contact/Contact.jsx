import "./Contact.css";

function Contact() {
    return (
        <section className="portfolio-contact-page">
            <h1>Contact</h1>

            {/* Contact Information */}


            <div className="portfolio-contact-card">
                <h2>Contact Information</h2>
                <p>
                    <strong>Name:</strong> Dr. Sadhana Tiwari
                </p>
                <p>
                    <strong>Phone:</strong> +91 XXXXX XXXXX
                </p>



                <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:sadhanatiwari.22@gmail.com">
                        sadhanatiwari.22@gmail.com
                    </a>
                </p>

                <div className="portfolio-contact-links">

                    <div className="portfolio-link-row">
                        <span>Google Scholar</span>
                        <a
                            href="https://scholar.google.com/citations?user=zv8vatkAAAAJ&hl=en&oi=ao"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit Profile
                        </a>
                    </div>

                    <div className="portfolio-link-row">
                        <span>ResearchGate</span>
                        <a href="https://www.researchgate.net/scientific-contributions/Sadhana-Tiwari-2208709971"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit Profile
                        </a>
                    </div>

                    <div className="portfolio-link-row">
                        <span>ORCID</span>
                        <a href="https://orcid.org/0000-0003-1919-3490" target="_blank" rel="noreferrer">
                            Visit Profile
                        </a>
                    </div>

                    <div className="portfolio-link-row">
                        <span>LinkedIn</span>
                        <a href="https://www.linkedin.com/in/dr-sadhana-tiwari-a06218264/?originalSubdomain=in" target="_blank" rel="noreferrer">
                            Visit Profile
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;