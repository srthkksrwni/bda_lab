import { useState } from "react";
import "./ContactMessages.css";

function ContactMessages() {
  const [search, setSearch] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      full_name: "Mohit Kumar",
      email: "mohit@gmail.com",
      phone: "9876543210",
      query: "I want information about the BDA Lab internship program and research opportunities.",
      date: "24 June 2026",
    },
    {
      id: 2,
      full_name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543211",
      query: "How can I apply for the Summer Internship at IIIT Allahabad? Please guide me regarding the application process.",
      date: "25 June 2026",
    },
    {
      id: 3,
      full_name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "9876501234",
      query: "Please share details about ongoing AI and Machine Learning projects.",
      date: "28 June 2026",
    },
    {
      id: 4,
      full_name: "Rohit Gupta",
      email: "rohit@gmail.com",
      phone: "9475501234",
      query: "Please share details about ongoing AI and Machine Learning projects.",
      date: "26 June 2026",
    },
  ]);

  const filteredMessages = messages.filter((msg) => {
    return (
      msg.full_name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleReply = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this message?");

    if (confirmDelete) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  return (
    <div className="messages-page">
      <div className="top-bar">
        <h1>Contact Messages</h1>

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredMessages.map((msg) => (
        <div className="message-card" key={msg.id}>
          <h2>{msg.full_name}</h2>

          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Phone:</strong> {msg.phone}</p>

          <h4>Query</h4>
          <p>{msg.query}</p>

          <small>{msg.date}</small>

          <div className="actions">
            <button
              className="reply-btn"
              onClick={() => handleReply(msg.email)}
            >
              Reply
            </button>

            <button
              className="delete-btn"
              onClick={() => handleDelete(msg.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactMessages;