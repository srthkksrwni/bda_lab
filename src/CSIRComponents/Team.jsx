// Team.jsx
import "../styles.css";
import { useState, useEffect } from "react";

const Team = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  /* ================= SCROLL + ANIMATION ================= */
  useEffect(() => {
    const cards = document.querySelectorAll(".team-card");

    const fadeCards = () => {
      cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }
      });
    };

    const handleScroll = () => {
      const header = document.querySelector("header");

      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      fadeCards();
    };

    window.addEventListener("scroll", handleScroll);
    fadeCards();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= FORM HANDLING ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", form); // optional

    alert("Message submitted successfully!");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div>

      {/* HEADER */}
      <header>
              <div className="navbar">
      
                <div className="logo-container">
                 
      
                <Link to="/">
                  <img
                    src="https://i.ibb.co/n8s38Yn1/csir-logo.png"
                    className="logo-img"
                    alt="CSIR Logo"
                  />
                </Link>
      
                <Link to="https://www.iiita.ac.in/">
                  <img
                     src="https://i.ibb.co/4R0jkwx2/institute-logo.png"
                      className="logo-img"
                      alt="IIITA Logo"
                  />
                </Link>
      
                  
      
               
      
                <nav className="nav-links">
                  <NavLink to="/" end>Home</NavLink>
                  <NavLink to="/objectives">Objectives</NavLink>
                  <NavLink to="/methodology">Methodology</NavLink>
                  <NavLink to="/technology">Technology</NavLink>
                  <NavLink to="/applications">Applications</NavLink>
                  <NavLink to="/publications">Publications</NavLink>
                  <NavLink to="/team">Team</NavLink>
                </nav>
      
                </div>
      
              </div>
            </header>

      {/* BANNER */}
      <section className="banner">
        <img src="/images/head backgrounds/5079835.jpg" className="banner-img" alt="Banner" />
        <div className="banner-text">
          <h1>Research Team</h1>
        </div>
      </section>

      {/* TEAM */}
      <section className="section show">

        <h2>Team Members</h2>

        <div className="team-row-4">
          {teamMembers.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>

        <h2>Expert Advisory Members</h2>

        <div className="team-row-4">
          {advisors.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>

      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="container">
          <h2>Contact Research Team</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Ontology Based Epidemiology Research | All Rights Reserved
      </footer>

    </div>
  );
};

export default Team;


/* ================= COMPONENT ================= */

const TeamCard = ({ name, role, image, details, link }) => (
  <div className="team-card">

    {image && (
      <div className="team-image">
        <img src={image} alt={name} />
      </div>
    )}

    <div className="team-info">

      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="portfolio-link">
          <h3>{name}</h3>
        </a>
      ) : (
        <h3>{name}</h3>
      )}

      <div className="team-role">{role}</div>

      {details.map((d, i) => (
        <p key={i}>{d}</p>
      ))}

    </div>
  </div>
);


/* ================= DATA ================= */

const teamMembers = [
  {
    name: "Dr. Sonali Agarwal",
    role: "Principal Investigator",
    image: "https://i.ibb.co/nqf1QtVt/sonali-agarwal.png",
    link: "#",
    details: [
      "Position: Assistant Professor",
      "Institute: IIIT Allahabad",
      "Email: sonali@iiita.ac.in",
      "Phone: +91-9415647042"
    ]
  },
  {
    name: "Er. A.H. Khan",
    role: "Co-Principal Investigator",
    image: "/images/male.jpg",
    details: [
      "Position: Principal Scientist",
      "Institute: CSIR-IITR",
      "Email: ahkhan@iitr.res.in"
    ]
  },
  {
    name: "Dr. C. Kesavachandran",
    role: "Co-Principal Investigator",
    image: "/images/keshavchandran.jpg",
    link: "https://niist.irins.org/profile/216473",
    details: [
      "Position: Principal Scientist",
      "Institute: CSIR-IITR"
    ]
  },
  {
    name: "Ritesh Chandra",
    role: "Junior Research Fellow",
    image: "https://i.ibb.co/Z1t2QQ2W/ritesh-chandra.png",
    link: "https://rsi2022001.github.io/Portfolio/",
    details: [
      "Institute: IIIT Allahabad",
      "Email: rsi2022001@iiita.ac.in"
    ]
  }
];

const advisors = [
  {
    name: "Dr. A.K. Srivastava",
    role: "Advisory Expert",
    details: [
      "Expertise: Environmental Epidemiology",
      "Former Director: NIMH Nagpur"
    ]
  },
  {
    name: "Mr. Neeraj Mathur",
    role: "Advisory Expert",
    details: [
      "Expertise: Epidemiological Statistics"
    ]
  },
  {
    name: "Prof. K.K. Shukla",
    role: "Advisory Expert",
    details: [
      "Expertise: Data Mining",
      "IIT (BHU), Varanasi"
    ]
  },
  {
    name: "Prof. A.K. Agrawal",
    role: "Advisory Expert",
    details: [
      "Expertise: Software Engineering"
    ]
  }
];