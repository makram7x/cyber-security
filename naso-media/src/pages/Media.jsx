import React, { useState } from "react";

// These image URLs should be replaced with your actual images
// Define the media items - only images are included now
// Define the media items - includes images and videos now
const MEDIA_ITEMS = [
  // Images
  {
    id: 1,
    title: "صورة إعلامية 1",
    type: "صور",
    category: "عام",
    thumbnail: "/media1.jpg",
    date: "20 أبريل 2025",
  },
  {
    id: 2,
    title: "صورة إعلامية 2",
    type: "صور",
    category: "عام",
    thumbnail: "/media2.jpg",
    date: "20 أبريل 2025",
  },
  {
    id: 3,
    title: "صورة إعلامية 3",
    type: "صور",
    category: "عام",
    thumbnail: "/media3.jpg",
    date: "20 أبريل 2025",
  },
  {
    id: 4,
    title: "صورة حدث 1",
    type: "صور",
    category: "فعاليات",
    thumbnail: "/event1.jpg",
    date: "20 أبريل 2025",
  },
  // Videos
  {
    id: 5,
    title: "فيديو إعلامي 1",
    type: "فيديو", // Changed type
    category: "عام",
    thumbnail: "/vid1.mp4", // Video path
    date: "21 أبريل 2025",
  },
  {
    id: 6,
    title: "فيديو إعلامي 2",
    type: "فيديو", // Changed type
    category: "عام",
    thumbnail: "/vid2.mp4", // Video path
    date: "21 أبريل 2025",
  },
  {
    id: 7,
    title: "فيديو إعلامي 3",
    type: "فيديو", // Changed type
    category: "عام",
    thumbnail: "/vid3.mp4", // Video path
    date: "21 أبريل 2025",
  },
  {
    id: 8,
    title: "فيديو إعلامي 4",
    type: "فيديو", // Changed type
    category: "عام",
    thumbnail: "/vid4.mp4", // Video path
    date: "21 أبريل 2025",
  },
];

// CSS Styles
const cssStyles = `
.media-container {
  padding: 2rem;
  background-color: #00101F;
  color: #00e6e6;
  min-height: 100vh;
  direction: rtl;
}

.page-title {
  color: #00e6e6;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 230, 230, 0.4);
}

.page-subtitle {
  color: #83d0d0;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.media-card {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.media-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
}

.media-thumbnail {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.media-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.media-card:hover .media-thumbnail img {
  transform: scale(1.05);
}

.media-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 16, 31, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.media-card:hover .media-overlay {
  opacity: 1;
}

.media-content {
  padding: 1.5rem;
}

.media-title {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.media-info {
  display: flex;
  justify-content: space-between;
  color: #83d0d0;
  font-size: 0.9rem;
}

`;

const Media = () => {
  // No filtering needed now, display all items
  const allMedia = MEDIA_ITEMS;

  return (
    <>
      {/* Add the styles to the page */}
      <style>{cssStyles}</style>

      <div className="media-container">
        <h1 className="page-title">المكتبة الإعلامية</h1>
        <p className="page-subtitle">
          عرض الصور والفيديوهات المتاحة
        </p>

        {/* Media Grid */}
        <div className="media-grid">
          {allMedia.map((item) => (
              <div key={item.id} className="media-card">
                <div className="media-thumbnail">
                  {item.type === "صور" ? (
                    <img src={item.thumbnail} alt={item.title} />
                  ) : (
                    <video width="100%" height="100%" controls style={{ objectFit: 'cover' }}>
                      <source src={item.thumbnail} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {/* Overlay might need adjustment for videos, removed for now */}
                  {/* <div className="media-overlay"> */}
                  {/* </div> */}
                </div>
                {/* Removed media-content div to hide title and date */}
              </div>
            ))}
        </div>
        {/* Removed Categories Section */}
        {/* Removed Pagination */}
      </div>
    </>
  );
};

export default Media;
