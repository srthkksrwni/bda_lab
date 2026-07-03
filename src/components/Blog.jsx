import React, { useEffect, useState } from "react";
import "../styles/Blog.css";
import { BLOGS_API } from "../api/blogsApi";
import { API_BASE } from "../api/apiConfig";

function Gallery() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(BLOGS_API.list)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBlogs(data.blogs);
        }
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <h1 className="gallery-title">Insights</h1>
        <div className="title-underline"></div>
        <p className="gallery-subtitle">
          A visual journey of our <span>research</span>,{" "}
          <span>innovation</span>, and <span>lab culture</span>
        </p>
      </header>

      <main className="masonry-container">
        <div className="masonry-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="grid-item">
              {blog.image && (
                <img
                  src={`${API_BASE}/${blog.image}`}
                  alt="Lab Update"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Gallery;