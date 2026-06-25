import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-page">
      <h1>LET'S CONNECT</h1>
      <p>Have a query? Drop a message below.</p>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email Address" />

        <input type="tel" placeholder="Phone Number" />

        <textarea placeholder="Your Query"></textarea>

        <button type="button">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;