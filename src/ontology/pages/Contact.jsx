import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

  const [status, setStatus] = useState("");

  useEffect(() => {
    document.body.setAttribute("data-page", "contact");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqewerly", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();

        setTimeout(() => {
          setStatus("");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
     

      {/* HEADER */}
      <header className="hero">
        <h1>Contact Information</h1>
        <p>
          Get in touch regarding the
          Geospatial Knowledge Graph Inference research project
        </p>
      </header>

      {/* PROJECT CONTACT */}
      <section className="section show">
        <h2>Project Contact</h2>
        <p>
          This research project is conducted at the
          <strong> Indian Institute of Information Technology Allahabad (IIITA)</strong>.
        </p>
      </section>

      {/* TEAM */}
      <section className="section">
        <h2>Research Team</h2>

        <p><strong>Principal Investigator:</strong> Dr. Triloki Pant</p>
        <p>Email: <a href="mailto:tpant@iiita.ac.in">tpant@iiita.ac.in</a></p>

        <br />

        <p><strong>Co-Principal Investigator:</strong> Prof. Sonali Aggrawal</p>
        <p>Email: <a href="mailto:sonali@iiita.ac.in">sonali@iiita.ac.in</a></p>

        <br />

        <p><strong>Junior Research Assistant:</strong> Md Inzmam</p>
        <p>Email: <a href="mailto:prf.minzmam@iiita.ac.in">prf.minzmam@iiita.ac.in</a></p>
      </section>

      {/* INSTITUTION */}
      <section className="section">
        <h2>Institutional Address</h2>

        <p><strong>Department:</strong> Department of Computer Science and Engineering</p>
        <p><strong>Institution:</strong>CC-3 Indian Institute of Information Technology Allahabad (IIITA)</p>
        <p><strong>Location:</strong> Prayagraj, Uttar Pradesh, India</p>
      </section>


      <Footer />
    </>
  );
}

export default Contact;