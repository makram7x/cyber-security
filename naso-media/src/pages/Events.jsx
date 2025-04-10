import React, { useState } from "react";

// These image URLs should be replaced with your actual images
const IMAGES = {
  event1: "/images/event1.jpg",
  event2: "/images/event2.jpg",
  event3: "/images/event3.jpg",
  event4: "/images/event4.jpg",
  event5: "/images/event5.jpg",
  event6: "/images/event6.jpg",
  eventFeatured: "/images/event-featured.jpg",
  eventSchedule: "/images/event-schedule.jpg",
  speakerProfile1: "/images/speaker1.jpg",
  speakerProfile2: "/images/speaker2.jpg",
  speakerProfile3: "/images/speaker3.jpg",
  venue1: "/images/venue1.jpg",
  venue2: "/images/venue2.jpg",
};

// Sample events data
const EVENTS = [
  {
    id: 1,
    title: "مؤتمر التحول الرقمي للقطاع الحكومي",
    description:
      "مؤتمر يجمع الخبراء والمسؤولين لمناقشة تحديات وفرص التحول الرقمي في المؤسسات الحكومية.",
    date: "15 مايو 2025",
    time: "٩:٠٠ ص - ٥:٠٠ م",
    location: "فندق الريتز كارلتون، الرياض",
    image: "event1",
    category: "مؤتمر",
    featured: true,
    upcoming: true,
  },
  {
    id: 2,
    title: "ورشة عمل: أساسيات الأمن السيبراني للشركات",
    description:
      "ورشة عمل تفاعلية تقدم استراتيجيات وممارسات عملية لحماية الشركات من التهديدات الإلكترونية.",
    date: "22 أبريل 2025",
    time: "١٠:٠٠ ص - ٢:٠٠ م",
    location: "مركز الابتكار التقني، دبي",
    image: "event2",
    category: "ورشة عمل",
    upcoming: true,
  },
  {
    id: 3,
    title: "ملتقى صناع المحتوى العربي",
    description:
      "ملتقى يجمع المبدعين والمؤثرين في مجال صناعة المحتوى العربي لتبادل الخبرات والتجارب.",
    date: "30 أبريل 2025",
    time: "٤:٠٠ م - ٩:٠٠ م",
    location: "مركز الملك فهد الثقافي، الرياض",
    image: "event3",
    category: "ملتقى",
    upcoming: true,
  },
  {
    id: 4,
    title: "قمة الذكاء الاصطناعي والبيانات الضخمة",
    description:
      "قمة تجمع قادة التقنية والمبتكرين لاستكشاف مستقبل الذكاء الاصطناعي وتطبيقاته في المنطقة.",
    date: "12 مايو 2025",
    time: "٩:٠٠ ص - ٦:٠٠ م",
    location: "مركز دبي التجاري العالمي",
    image: "event4",
    category: "قمة",
    upcoming: true,
  },
  {
    id: 5,
    title: "ندوة الإعلام الرقمي: التحديات والفرص",
    description:
      "ندوة تناقش مستقبل الإعلام في العصر الرقمي والتحديات التي تواجه المؤسسات الإعلامية.",
    date: "5 أبريل 2025",
    time: "١١:٠٠ ص - ٢:٠٠ م",
    location: "جامعة الملك سعود، الرياض",
    image: "event5",
    category: "ندوة",
    upcoming: false,
  },
  {
    id: 6,
    title: "هاكاثون الابتكار التقني للشباب",
    description:
      "مسابقة تقنية للمبرمجين والمبتكرين الشباب لتطوير حلول للتحديات المجتمعية.",
    date: "18-20 مارس 2025",
    time: "على مدار 3 أيام",
    location: "مدينة الملك عبدالعزيز للعلوم والتقنية، الرياض",
    image: "event6",
    category: "هاكاثون",
    upcoming: false,
  },
];

// CSS Styles
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
  text-shadow: 0 0 10px rgba(0, 230, 230, 0.4);
  border-bottom: 1px solid #00e6e6;
  padding-bottom: 1rem;
}

.filter-section {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-button {
  background-color: transparent;
  color: #00e6e6;
  border: 1px solid #00e6e6;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
}

.filter-button.active {
  background-color: rgba(0, 230, 230, 0.3);
}

.featured-event {
  position: relative;
  margin-bottom: 4rem;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #00e6e6;
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
  height: 400px;
  display: flex;
}

.featured-event-image {
  flex: 1;
  height: 100%;
  position: relative;
}

.featured-event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-event-image::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  background: linear-gradient(to left, rgba(0,16,31,1), transparent);
}

.featured-event-content {
  flex: 1;
  padding: 2rem;
  background-color: rgba(0,16,31,0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.event-category {
  background-color: rgba(0, 230, 230, 0.2);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  border: 1px solid #00e6e6;
  display: inline-block;
  margin-bottom: 1rem;
  width: fit-content;
}

.featured-event-title {
  color: #ffffff;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.featured-event-description {
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.event-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: #83d0d0;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-icon {
  font-size: 1.1rem;
}

.register-button {
  background-color: transparent;
  color: #00e6e6;
  border: 2px solid #00e6e6;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: auto;
  width: fit-content;
}

.register-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
  box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
}

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
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
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
  background-color: rgba(0, 40, 60, 0.8);
  color: #00e6e6;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid #00e6e6;
}

.event-date-badge {
  position: absolute;
  left: 1rem;
  top: 1rem;
  background-color: rgba(0, 230, 230, 0.9);
  color: #00101F;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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
  border-top: 1px solid rgba(0, 230, 230, 0.2);
  color: #83d0d0;
  font-size: 0.9rem;
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
  background-color: rgba(0, 230, 230, 0.2);
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
  box-shadow: 0 0 8px rgba(0, 230, 230, 0.5);
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
  box-shadow: 0 0 10px rgba(0, 230, 230, 0.8);
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
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 100%;
  border: 1px solid rgba(0, 230, 230, 0.3);
}

.timeline-date {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: #00e6e6;
  font-weight: bold;
}

.hexagonal-cta {
  position: relative;
  background: linear-gradient(to bottom right, rgba(0, 40, 60, 0.8), rgba(0, 20, 35, 0.8));
  margin: 3rem 0;
  padding: 3rem;
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
  border: 2px solid #00e6e6;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.3);
}

.cta-title {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-text {
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 700px;
}

.featured-speakers {
  margin: 4rem 0;
}

.speakers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.speaker-card {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  text-align: center;
  border: 1px solid rgba(0, 230, 230, 0.3);
}

.speaker-card:hover {
  transform: translateY(-5px);
}

.speaker-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 2rem auto 1rem;
  overflow: hidden;
  border: 2px solid #00e6e6;
}

.speaker-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.speaker-name {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.speaker-title {
  color: #83d0d0;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .featured-event {
    flex-direction: column;
    height: auto;
  }
  
  .featured-event-image {
    height: 200px;
  }
  
  .featured-event-image::after {
    width: 100%;
    height: 50px;
    top: auto;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,16,31,1), transparent);
  }
  
  .timeline-date {
    position: static;
    transform: none;
    text-align: left;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .timeline-event {
    padding-right: 30px;
  }
  
  .hexagonal-cta {
    padding: 2rem 1rem;
    clip-path: polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%);
  }
}
`;

// Helper function to extract date info
const getDateInfo = (dateString) => {
  // This is a simplified example - in a real app, you'd use proper date parsing
  const months = {
    يناير: "JAN",
    فبراير: "FEB",
    مارس: "MAR",
    أبريل: "APR",
    مايو: "MAY",
    يونيو: "JUN",
    يوليو: "JUL",
    أغسطس: "AUG",
    سبتمبر: "SEP",
    أكتوبر: "OCT",
    نوفمبر: "NOV",
    ديسمبر: "DEC",
  };

  // Simple parsing for the "15 مايو 2025" format
  const parts = dateString.split(" ");
  if (parts.length === 3) {
    const day = parts[0];
    const month = months[parts[1]] || parts[1];
    return { day, month };
  }

  // For date ranges like "18-20 مارس 2025"
  if (parts[0].includes("-")) {
    const dayRange = parts[0];
    const month = months[parts[1]] || parts[1];
    return { day: dayRange, month };
  }

  return { day: "?", month: "?" };
};

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const categories = [
    "الكل",
    "مؤتمر",
    "ورشة عمل",
    "ملتقى",
    "قمة",
    "ندوة",
    "هاكاثون",
  ];

  // Find featured event and separate upcoming and past events
  const featuredEvent = EVENTS.find((event) => event.featured);

  const upcomingEvents = EVENTS.filter(
    (event) => event.upcoming && !event.featured
  );
  const pastEvents = EVENTS.filter((event) => !event.upcoming);

//   const filteredEvents =
//     activeFilter === "الكل"
//       ? [...upcomingEvents, ...pastEvents]
//       : [...upcomingEvents, ...pastEvents].filter(
//           (event) => event.category === activeFilter
//         );

  return (
    <>
      {/* Add the styles to the page */}
      <style>{cssStyles}</style>

      <div className="events-container">
        <h1 className="page-title">الفعاليات</h1>

        <div className="filter-section">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {featuredEvent && (
          <div className="featured-event">
            <div className="featured-event-image">
              <img
                src={IMAGES[featuredEvent.image]}
                alt={featuredEvent.title}
              />
            </div>
            <div className="featured-event-content">
              <div className="event-category">{featuredEvent.category}</div>
              <h2 className="featured-event-title">{featuredEvent.title}</h2>
              <p className="featured-event-description">
                {featuredEvent.description}
              </p>
              <div className="event-meta">
                <div className="meta-item">
                  <span className="meta-icon">📅</span>
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🕒</span>
                  <span>{featuredEvent.time}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">📍</span>
                  <span>{featuredEvent.location}</span>
                </div>
              </div>
              <button className="register-button">التسجيل الآن</button>
            </div>
          </div>
        )}

        <div className="hexagonal-cta">
          <h2 className="cta-title">اشترك في قائمة الفعاليات</h2>
          <p className="cta-text">
            احصل على إشعارات حول أحدث الفعاليات والمؤتمرات في مجال التكنولوجيا
            والإعلام الرقمي. كن أول من يعلم عن الفعاليات القادمة وفرص التواصل مع
            الخبراء والمختصين.
          </p>
          <button className="register-button">اشترك الآن</button>
        </div>

        <section>
          <h2 className="section-title">الفعاليات القادمة</h2>
          <div className="events-grid">
            {upcomingEvents.map((event) => {
              const dateInfo = getDateInfo(event.date);
              return (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <img src={IMAGES[event.image]} alt={event.title} />
                    <div className="card-category">{event.category}</div>
                    <div className="event-date-badge">
                      <span className="date-day">{dateInfo.day}</span>
                      <span className="date-month">{dateInfo.month}</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    <div className="card-meta">
                      <div className="meta-item">
                        <span className="meta-icon">🕒</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="card-button">تفاصيل وتسجيل</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="featured-speakers">
          <h2 className="section-title">متحدثون مميزون</h2>
          <div className="speakers-grid">
            <div className="speaker-card">
              <div className="speaker-image">
                <img src={IMAGES.speakerProfile1} alt="Speaker" />
              </div>
              <h3 className="speaker-name">د. أحمد العليان</h3>
              <p className="speaker-title">
                خبير الأمن السيبراني - جامعة الملك سعود
              </p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image">
                <img src={IMAGES.speakerProfile2} alt="Speaker" />
              </div>
              <h3 className="speaker-name">م. سارة الخالدي</h3>
              <p className="speaker-title">
                مديرة التحول الرقمي - وزارة الاتصالات
              </p>
            </div>
            <div className="speaker-card">
              <div className="speaker-image">
                <img src={IMAGES.speakerProfile3} alt="Speaker" />
              </div>
              <h3 className="speaker-name">أ. خالد النصر</h3>
              <p className="speaker-title">
                الرئيس التنفيذي - شركة تقنيات المستقبل
              </p>
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <h2 className="section-title">فعاليات سابقة</h2>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {pastEvents.map((event) => (
              <div key={event.id} className="timeline-event">
                <div className="timeline-dot"></div>
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="card-meta">
                    <div className="meta-item">
                      <span className="meta-icon">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="card-button">عرض التغطية</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
