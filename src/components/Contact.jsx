import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; 
import '../styles/contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      'service_j83e6ru',
      'template_8ag5bt9',  
      form.current,
      'ciIVc0lrAo5ideKp0'
    )
    .then(() => {
        setStatus("Message Sent Successfully! ✅");
        form.current.reset();
        setTimeout(() => setStatus(""), 5000);
    }, () => {
        setStatus("Failed to send. ❌ Please try again.");
    });
  };

  return (
    <section className="contact-section" id="contact">
      {/* Background Decor Elements */}
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

        {/* Form ab pure container ki width lega aur center mein rahega */}
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
