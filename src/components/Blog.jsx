import React, { useEffect, useState } from "react";
import "../styles/Blog.css";

function Gallery() {
  const [blogs, setBlogs] = useState([]);

  const API_URL = "http://localhost/bda_lab/backend/blogs/list.php";
  const IMAGE_URL = "http://localhost/bda_lab/backend/";

  useEffect(() => {
    fetch(API_URL)
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
              <img
                src={`${IMAGE_URL}${blog.image}`}
                alt={blog.title || "Lab Update"}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Gallery;