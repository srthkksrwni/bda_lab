import { useEffect, useState } from "react";
import "./ContactMessages.css";
import { CONTACT_API } from "../../api/contactApi";

function ContactMessages() {
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(CONTACT_API.list);
      const data = await response.json();

      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      console.log("Error fetching contact messages:", error);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    return (
      msg.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      msg.email?.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleReply = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this message?");

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${CONTACT_API.delete}?id=${id}`);
      const data = await response.json();

      if (data.success) {
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== id)
        );
        alert("Message deleted successfully.");
      } else {
        alert("Delete failed.");
      }
    } catch (error) {
      console.log("Error deleting message:", error);
      alert("Something went wrong.");
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

      {filteredMessages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        filteredMessages.map((msg) => (
          <div className="message-card" key={msg.id}>
            <h2>{msg.full_name}</h2>

            <p>
              <strong>Email:</strong> {msg.email}
            </p>

            <p>
              <strong>Phone:</strong> {msg.phone}
            </p>

            <h4>Query</h4>
            <p>{msg.query_message}</p>

            <small>{msg.created_at}</small>

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
        ))
      )}
    </div>
  );
}

export default ContactMessages;