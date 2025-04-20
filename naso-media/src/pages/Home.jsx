import React from "react";
import { newsItems } from "../data/newsData"; // Import news data
import { EVENTS } from "../data/eventsData"; // Import events data

// Filter data for the Home page
const homeNews = newsItems.slice(0, 3); // Show first 3 news items
const upcomingEventsHome = EVENTS.filter(event => event.upcoming).slice(0, 3); // Show first 3 upcoming events

// Sample Video Data
const videoHighlights = [
  { id: 1, title: "مقابلة حصرية: تحديات الأمن السيبراني 2025", src: "/vid1.mp4" },
  { id: 2, title: "تغطية مؤتمر GISEC: أبرز النقاشات", src: "/vid2.mp4" },
  { id: 3, title: "شرح مبسط: كيف تحمي بياناتك الشخصية؟", src: "/vid3.mp4" },
  { id: 4, title: "نظرة على مستقبل الذكاء الاصطناعي في الإعلام", src: "/vid4.mp4" },
];
const homeVideos = videoHighlights.slice(0, 3); // Show first 3 videos

// CSS Styles (Simplified) - Using standard backticks
const cssStyles = `
.home-container {
  padding: 0; /* Remove padding to allow hero full width */
  background-color: #00101F;
  color: #00e6e6;
  min-height: 100vh;
  direction: rtl;
}

.hero-section {
  position: relative;
  height: 60vh; /* Adjust height as needed */
  min-height: 400px;
  background-image: linear-gradient(rgba(0, 16, 31, 0.7), rgba(0, 16, 31, 0.9)), url('/OIP.jpeg');
  background-size: contain;
  background-repeat: no-repeat; /* Add no-repeat when using contain */
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  color: #ffffff;
  margin-bottom: 3rem; /* Space below hero */
  border-bottom: 2px solid #00e6e6; /* Add border */
  box-shadow: 0 5px 15px rgba(0, 230, 230, 0.2); /* Add shadow */
}

.hero-content {
  max-width: 800px;
}

.hero-headline {
  font-size: 3rem; /* Larger headline */
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.hero-subheadline {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #e0e0e0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.hero-cta-button {
  background-color: #00e6e6;
  color: #00101F;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none; /* Remove underline from link */
  display: inline-block; /* Allow padding and margin */
}

.hero-cta-button:hover {
  background-color: #00c4c4; /* Slightly darker teal */
  box-shadow: 0 0 15px rgba(0, 230, 230, 0.5);
  transform: translateY(-2px);
}

.main-content-area { /* Added wrapper for padding */
  padding: 0 2rem 2rem 2rem; /* Add padding back for content below hero */
}

.section-title {
  color: #00e6e6;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-right: 3px solid #00e6e6;
  padding-right: 1rem;
  margin-top: 2rem;
}

.news-grid, .events-grid-home, .video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.news-card, .event-card-home, .video-card {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 230, 230, 0.2);
}

.news-card:hover, .event-card-home:hover, .video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
}

.card-image {
  height: 180px;
  overflow: hidden;
  position: relative;
  background-color: #002030;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .card-image img, .event-card-home:hover .card-image img {
  transform: scale(1.05);
}

.video-player {
  width: 100%;
  height: 180px;
  background-color: #000;
}

.card-category {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 40, 60, 0.8);
  color: #00e6e6;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid #00e6e6;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
  min-height: 3.4em; /* Approx 2 lines for title */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-text {
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.card-meta {
  color: #83d0d0;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-top: 1px solid rgba(0, 230, 230, 0.2);
  padding-top: 1rem;
  margin-top: auto;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-icon {
  font-size: 1rem;
}

.card-button {
  background-color: transparent;
  color: #00e6e6;
  border: 1px solid #00e6e6;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  width: fit-content;
  align-self: flex-start;
}

.card-button:hover {
  background-color: rgba(0,230,230,0.2);
}

@media (max-width: 768px) {
  .hero-headline {
    font-size: 2.2rem; /* Adjust headline size for mobile */
  }
  .hero-subheadline {
    font-size: 1.1rem; /* Adjust subheadline size for mobile */
  }
  .news-grid, .events-grid-home, .video-grid {
    grid-template-columns: 1fr;
  }
}
`; // Standard closing backtick

// Simple helper function (consider moving to utils later)
const formatDateSimple = (dateString) => {
  return dateString || '';
};

const Home = () => {
  return (
    <div className="home-container">
      <style>{cssStyles}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">بوابة الإعلام الرقمي للأمن السيبراني</h1>
          <p className="hero-subheadline">
            أحدث الأخبار والتحليلات والفعاليات في عالم الأمن الرقمي والتكنولوجيا باللغة العربية.
          </p>
          {/* Optional CTA Button - Link to News or About page? */}
          {/* <a href="/news" className="hero-cta-button">استكشف الأخبار</a> */}
        </div>
      </section>

      {/* Wrap remaining content for padding */}
      <div className="main-content-area">

        {/* Latest News Section */}
        <h2 className="section-title">آخر الأخبار</h2>
        <div className="news-grid">
          {homeNews.map((item, index) => (
            <div className="news-card" key={`news-${index}`}>
              <div className="card-image">
                <img src={item.image} alt={item.alt || item.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
                <div className="card-meta">
                  {/* Optional date display */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Section */}
        <h2 className="section-title">الفعاليات القادمة</h2>
        <div className="events-grid-home">
          {upcomingEventsHome.map((event) => (
             <div className="event-card-home" key={`event-${event.id}`}>
               <div className="card-image">
                 <img src={event.image} alt={event.title} />
                 <span className="card-category">{event.category}</span>
               </div>
               <div className="card-content">
                 <h3 className="card-title">{event.title}</h3>
                 <p className="card-text">{event.description}</p>
                 <div className="card-meta">
                   <div className="meta-item">
                     <span className="meta-icon">📅</span> {event.date}
                   </div>
                   <div className="meta-item">
                     <span className="meta-icon">🕒</span> {event.time}
                   </div>
                   <div className="meta-item">
                     <span className="meta-icon">📍</span> {event.location}
                   </div>
                 </div>
                 {event.website && (
                   <a href={event.website} target="_blank" rel="noopener noreferrer" className="card-button">
                     التفاصيل
                   </a>
                 )}
               </div>
             </div>
          ))}
        </div>

        {/* Video Highlights Section */}
        <h2 className="section-title">مقاطع فيديو مميزة</h2>
        <div className="video-grid">
          {homeVideos.map((video) => (
            <div className="video-card" key={`video-${video.id}`}>
              <video className="video-player" controls src={video.src} title={video.title}>
                Your browser does not support the video tag.
              </video>
              {/* Removed card-content div to hide title/description */}
            </div>
          ))}
        </div>

      </div> {/* End main-content-area */}
    </div>
  );
};

export default Home;
