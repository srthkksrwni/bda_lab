import logo from "../assets/iiita-logo.png";

function Footer() {
  return (
    <footer className="ontology-footer">
      <div className="ontology-footer-content">
        <img src={logo} alt="IIITA Logo" className="ontology-footer-logo" />

        <p>
          © 2026 | Funded Academic Research Project <br />
          Indian Institute of Information Technology Allahabad (IIITA)
        </p>
      </div>
    </footer>
  );
}

export default Footer;