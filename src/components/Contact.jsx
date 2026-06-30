import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(form.current);

    const contactData = {
      full_name: formData.get("from_name"),
      email: formData.get("reply_to"),
      phone: formData.get("phone"),
      query_message: formData.get("message"),
    };

    const { full_name, email, phone, query_message } = contactData;

    // Full Name Validation
    if (!/^[A-Za-z ]{3,100}$/.test(full_name)) {
      setStatus("Full name should contain only letters and spaces (3-100 characters).");
      return;
    }

    // Email Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    // Query Validation
    if (query_message.trim().length < 10) {
      setStatus("Query must contain at least 10 characters.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8000/contact/add.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      const data = await response.json();

      if (data.success) {
        emailjs.sendForm(
          "service_i6ewnjs",
          "template_8ag5bt9",
          form.current,
          "ciIVc0lrAo5ideKp0"
        );

        setStatus("Message Sent Successfully! ✅");
        form.current.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Failed to save message. ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error. ❌ Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="bg-circle-1"></div>
      <div className="bg-circle-2"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="contact-container"
      >
        <div className="contact-header">
          <h2 className="section-title">Let's Connect</h2>
          <p>Have a query? Drop a message below.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <input type="text" name="from_name" placeholder=" " required />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="reply_to" placeholder=" " required />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input type="tel" name="phone" placeholder=" " required />
            <label>Phone Number</label>
          </div>

          <div className="input-group">
            <textarea name="message" rows="4" placeholder=" " required></textarea>
            <label>Your Query</label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="submit-btn"
          >
            Send Message
          </motion.button>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="status-msg"
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;