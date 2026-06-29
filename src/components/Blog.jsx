import React from "react";
import { blogdata } from "../data/blogdata";
import "../styles/Blog.css";

function Gallery() {
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

      {/* Masonry Grid */}
      <main className="masonry-container">
        <div className="masonry-grid">
          {blogdata
            .filter((item) => item.type === "image")
            .map((item) => (
              <div key={item.id} className="grid-item">
                <img
                  src={item.src}
                  alt={item.title || "Lab Update"}
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