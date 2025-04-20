import React from "react";
import { EVENTS } from "../data/eventsData"; // Import events data

// Removed local IMAGES constant as images are in eventsData
// Removed local EVENTS definition, using imported data

// CSS styles remain mostly unchanged
const cssStyles = `
.events-container {
  padding: 2rem;
  background-color: #00101F;
  color: #00e6e6;
  min-height: 100vh;
  direction: rtl;
}
.page-title {
  color: #00e6e6;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0,230,230,0.4);
  border-bottom: 1px solid #00e6e6;
  padding-bottom: 1rem;
}
/* Filter section styles removed as filters are removed */
.section-title {
  color: #00e6e6;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  border-right: 3px solid #00e6e6;
  padding-right: 1rem;
}
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
.event-card {
  background-color: rgba(0,30,40,0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0,230,230,0.4);
}
.event-image {
  height: 180px;
  overflow: hidden;
  position: relative;
}
.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.event-card:hover .event-image img {
  transform: scale(1.05);
}
.card-category {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0,40,60,0.8);
  color: #00e6e6;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid #00e6e6;
}
.event-date-badge {
  background-color: rgba(0,230,230,0.9);
  color: #00101F;
  width: fit-content;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  margin-bottom: 1rem;
}
.date-day {
  font-size: 1.5rem;
  line-height: 1;
}
.date-month {
  font-size: 0.8rem;
  text-transform: uppercase;
}
.event-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.event-title {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}
.event-description {
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0,230,230,0.2);
  color: #83d0d0;
  font-size: 0.9rem;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.meta-icon {
  font-size: 1.1rem;
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
.timeline-section {
  margin: 4rem 0;
  position: relative;
  padding-top: 2rem;
}
.timeline-container {
  position: relative;
  margin-top: 3rem;
}
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  width: 2px;
  background-color: #00e6e6;
  box-shadow: 0 0 8px rgba(0,230,230,0.5);
}
.timeline-event {
  display: flex;
  margin-bottom: 2rem;
  padding-right: 70px;
  position: relative;
}
.timeline-dot {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #00e6e6;
  box-shadow: 0 0 10px rgba(0,230,230,0.8);
}
.timeline-dot::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #00e6e6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.timeline-content {
  background-color: rgba(0,30,40,0.7);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  width: 100%;
  border: 1px solid rgba(0,230,230,0.3);
}
.timeline-date {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: #00e6e6;
  font-weight: bold;
}
/* Hexagonal CTA styles removed */
/* Featured Speakers styles removed */
@media (max-width: 768px) {
  /* Featured event styles removed */
  .timeline-date {
    position: static;
    transform: none;
    text-align: left; /* Adjusted from right */
    display: block;
    margin-bottom: 0.5rem;
  }
  .timeline-event {
    padding-right: 30px;
  }
  /* Hexagonal CTA responsive styles removed */
}
`;

const getDateInfo = (dateString) => {
  const months = {
    يناير: "JAN", فبراير: "FEB", مارس: "MAR", أبريل: "APR", مايو: "MAY", يونيو: "JUN",
    يوليو: "JUL", أغسطس: "AUG", سبتمبر: "SEP", أكتوبر: "OCT", نوفمبر: "NOV", ديسمبر: "DEC",
    Jan: "JAN", Feb: "FEB", Mar: "MAR", Apr: "APR", May: "MAY", Jun: "JUN",
    Jul: "JUL", Aug: "AUG", Sep: "SEP", Oct: "OCT", Nov: "NOV", Dec: "DEC"
  };

  // Handle null or undefined dateString gracefully
  if (!dateString) {
      return { day: "?", month: "?" };
  }

  const parts = dateString.split(/[\s-]+/); // Split by space or hyphen
  let day = "?";
  let month = "?";

  if (parts.length >= 2) {
      // Attempt to find a month name
      const monthPart = parts.find(part => months[part]);
      if (monthPart) {
          month = months[monthPart];
          // Find the day part (usually the first number)
          const dayPart = parts.find(part => !isNaN(parseInt(part)));
          if (dayPart) {
              day = dayPart;
          }
      } else {
          // Fallback if month name format is unexpected
          day = parts[0]; // Assume first part is day/range
          month = parts[1] ? parts[1].substring(0, 3).toUpperCase() : '?'; // Use first 3 letters of second part
      }
  } else if (parts.length === 1) {
      // Handle cases like just "May 2025" if necessary, though unlikely for events
      day = "?"; // Or parse differently if needed
      month = "?";
  }

  // Ensure day doesn't exceed reasonable length (e.g., handle ranges like "7-8")
  if (day.length > 5) day = day.substring(0, 5);

  return { day, month };
};


const Events = () => {
  // Filter upcoming events for the grid
  const upcomingEvents = EVENTS.filter((event) => event.upcoming); // Filter directly from imported EVENTS

  // Filter past events for the timeline
  const pastEvents = EVENTS.filter((event) => !event.upcoming).sort(
    (a, b) => {
      // Robust date parsing needed here if formats vary significantly
      try {
        // Attempt to parse the first part of the date string if it's a range
        const parseDate = (dateStr) => {
          if (!dateStr) return new Date(0); // Handle null/undefined dates
          const parts = dateStr.split('-')[0].trim();
          // Replace Arabic month names before creating Date object
          const englishDateStr = parts.replace(/يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر/i, (match) => {
             switch(match.toLowerCase()) {
               case 'يناير': return 'Jan'; case 'فبراير': return 'Feb'; case 'مارس': return 'Mar';
               case 'أبريل': return 'Apr'; case 'مايو': return 'May'; case 'يونيو': return 'Jun';
               case 'يوليو': return 'Jul'; case 'أغسطس': return 'Aug'; case 'سبتمبر': return 'Sep';
               case 'أكتوبر': return 'Oct'; case 'نوفمبر': return 'Nov'; case 'ديسمبر': return 'Dec';
               default: return match;
             }
          });
          const date = new Date(englishDateStr);
          return isNaN(date) ? new Date(0) : date; // Handle invalid date parsing
        };
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA; // Sort descending (most recent first)
      } catch (e) {
        console.error("Error parsing dates for sorting:", a.date, b.date, e);
        return 0; // Avoid crashing if date format is unexpected
      }
    }
  ); // Filter directly from imported EVENTS

  return (
    <>
      <style>{cssStyles}</style>
      <div className="events-container">
        <h1 className="page-title">فعاليات الأمن السيبراني في الإمارات</h1>

        {/* Filter Buttons Section Removed */}
        {/* Featured Event Section Removed */}

        {/* Upcoming Events Section */}
        <h2 className="section-title">الفعاليات القادمة</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => {
            const { day, month } = getDateInfo(event.date);
            return (
              <div className="event-card" key={event.id}>
                <div className="event-image">
                  {/* Directly use image path from event data */}
                  <img src={event.image} alt={event.title} />
                  <span className="card-category">{event.category}</span>
                </div>
                <div className="event-content">
                  <div className="event-date-badge">
                    <span className="date-day">{day}</span>
                    <span className="date-month">{month}</span>
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="card-meta">
                    <div className="meta-item">
                      <span className="meta-icon">🕒</span> {event.time}
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📍</span> {event.location}
                    </div>
                  </div>
                  {event.website && (
                    <a href={event.website} target="_blank" rel="noopener noreferrer" className="card-button">
                      التفاصيل والتسجيل
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Past Events Timeline Section */}
        {pastEvents.length > 0 && (
          <div className="timeline-section">
            <h2 className="section-title">الفعاليات السابقة</h2>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              {pastEvents.map((event) => (
                <div className="timeline-event" key={event.id}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{event.date}</div>
                  <div className="timeline-content">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    <div className="card-meta">
                      <div className="meta-item">
                        <span className="meta-icon">🕒</span> {event.time}
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">📍</span> {event.location}
                      </div>
                    </div>
                     {event.website && (
                      <a href={event.website} target="_blank" rel="noopener noreferrer" className="card-button">
                        عرض التفاصيل
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hexagonal CTA Section - Removed */}
        {/* Featured Speakers Section - Removed */}
      </div>
    </>
  );
};

export default Events;
