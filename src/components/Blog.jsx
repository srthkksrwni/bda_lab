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

  const getYouTubeId = (url) => {
    if (!url) return null;

    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
    );

    return match ? match[1] : null;
  };

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
          {blogs.map((blog) => {
            const youtubeId = getYouTubeId(blog.link);

            return (
              <div key={blog.id} className="grid-item">
                {youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={blog.title || "YouTube video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : blog.image ? (
                  <img
                    src={`${IMAGE_URL}${blog.image}`}
                    alt={blog.title || "Lab Update"}
                    loading="lazy"
                  />
                ) : blog.link ? (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="blog-link-card"
                  >
                    <div className="link-icon">🔗</div>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <span>Open Link →</span>
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Gallery;