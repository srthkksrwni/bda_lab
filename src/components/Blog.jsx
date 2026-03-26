import React from 'react';
import { blogdata } from '../data/blogdata'; // Check filename spelling
import '../styles/Blog.css';

function Gallery() {
  return (
    <div className="gallery-page">
      {/* --- AESTHETIC HEADER SECTION --- */}
      <header className="gallery-header">
        <h1 className="gallery-title">Insights</h1> 
        <div className="title-underline"></div>
        <p className="gallery-subtitle">
          A visual journey of our <span>research</span>, <span>innovation</span>, and <span>lab culture</span>
        </p>
      </header>

      {/* --- MASONRY GRID SECTION --- */}
      <main className="masonry-container">
        <div className="masonry-grid">
          {blogdata.map((item) => (
            <div key={item.id} className="grid-item">
              {item.type === "image" ? (
                <img src={item.src} alt="Lab Update" loading="lazy" />
              ) : item.isYouTube ? (
                <div className="video-wrapper">
                  <iframe 
                    src={item.src} 
                    title="Lab Video"
                    frameBorder="0" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <video controls muted loop className="local-video">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Gallery;
