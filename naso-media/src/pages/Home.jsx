import React, { useState, useEffect } from "react";

// These image URLs should be replaced with your actual images
const IMAGES = {
  slider1: "/images/slider1.jpg",
  slider2: "/images/slider2.jpg",
  slider3: "/images/slider3.jpg",
  news1: "/images/news1.jpg",
  news2: "/images/news2.jpg",
  news3: "/images/news3.jpg",
  news4: "/images/news4.jpg",
  news5: "/images/news5.jpg",
  news6: "/images/news6.jpg",
  report1: "/images/report1.jpg",
  report2: "/images/report2.jpg",
  event1: "/images/event1.jpg",
  event2: "/images/event2.jpg",
  authorProfile1: "/images/author1.jpg",
  authorProfile2: "/images/author2.jpg",
  infographic1: "/images/infographic1.jpg",
  videoThumbnail1: "/images/video1.jpg",
};

// Sample data for the home page
const FEATURED_SLIDES = [
  {
    id: 1,
    title: "قمة التكنولوجيا العربية 2025: نحو مستقبل رقمي مستدام",
    excerpt:
      "تغطية شاملة لأحداث القمة التكنولوجية الأكبر في المنطقة العربية والتي تناقش الاتجاهات المستقبلية في مجال التكنولوجيا والاستدامة الرقمية.",
    image: "slider1",
    category: "فعاليات",
    date: "15 أبريل 2025",
  },
  {
    id: 2,
    title: "الذكاء الاصطناعي يعيد تشكيل مستقبل الإعلام العربي",
    excerpt:
      "تقرير خاص عن تأثير تقنيات الذكاء الاصطناعي على صناعة الإعلام في العالم العربي والتحديات والفرص المتاحة للمؤسسات الإعلامية.",
    image: "slider2",
    category: "تكنولوجيا",
    date: "10 أبريل 2025",
  },
  {
    id: 3,
    title: "استراتيجيات الأمن السيبراني للمؤسسات في عام 2025",
    excerpt:
      "دليل شامل لأحدث استراتيجيات الأمن السيبراني التي يجب على المؤسسات تبنيها في ظل تزايد التهديدات الإلكترونية في المنطقة.",
    image: "slider3",
    category: "أمن رقمي",
    date: "5 أبريل 2025",
  },
];

const LATEST_NEWS = [
  {
    id: 1,
    title: "انطلاق المرحلة الثانية من مبادرة التحول الرقمي الحكومي",
    excerpt:
      "أعلنت وزارة الاتصالات عن بدء المرحلة الثانية من مبادرة التحول الرقمي للخدمات الحكومية والتي تشمل تطوير أكثر من 150 خدمة إلكترونية جديدة.",
    image: "news1",
    category: "أخبار",
    date: "9 أبريل 2025",
  },
  {
    id: 2,
    title: "شركات التقنية العربية تجذب استثمارات قياسية في الربع الأول",
    excerpt:
      "سجلت الشركات الناشئة في مجال التكنولوجيا بالمنطقة العربية رقماً قياسياً في حجم الاستثمارات خلال الربع الأول من العام الجاري.",
    image: "news2",
    category: "اقتصاد",
    date: "7 أبريل 2025",
  },
  {
    id: 3,
    title: "إطلاق أول منصة ذكاء اصطناعي عربية متخصصة في المحتوى التعليمي",
    excerpt:
      "تم الإعلان عن إطلاق أول منصة ذكاء اصطناعي متخصصة في إنتاج وتحليل المحتوى التعليمي باللغة العربية لدعم قطاع التعليم في المنطقة.",
    image: "news3",
    category: "تكنولوجيا",
    date: "5 أبريل 2025",
  },
  {
    id: 4,
    title: "تعاون عربي مشترك لتطوير مهارات الشباب في مجال البرمجة",
    excerpt:
      "أعلنت عدة دول عربية عن إطلاق مبادرة مشتركة لتدريب مليون شاب عربي على مهارات البرمجة والتطوير التقني خلال السنوات الثلاث القادمة.",
    image: "news4",
    category: "تعليم",
    date: "3 أبريل 2025",
  },
  {
    id: 5,
    title: "افتتاح أكبر مركز بيانات صديق للبيئة في المنطقة العربية",
    excerpt:
      "تم افتتاح أكبر مركز بيانات صديق للبيئة في المنطقة العربية والذي يعتمد بالكامل على الطاقة المتجددة لتشغيل خدمات الحوسبة السحابية.",
    image: "news5",
    category: "بنية تحتية",
    date: "1 أبريل 2025",
  },
  {
    id: 6,
    title: "دراسة: 70% من وظائف المستقبل في المنطقة العربية ستكون تقنية",
    excerpt:
      "كشفت دراسة حديثة أن 70% من الوظائف المستقبلية في المنطقة العربية ستكون مرتبطة بالتكنولوجيا والمهارات الرقمية خلال العقد القادم.",
    image: "news6",
    category: "دراسات",
    date: "30 مارس 2025",
  },
];

const TRENDING_TOPICS = [
  "التحول الرقمي الحكومي",
  "الذكاء الاصطناعي والإعلام",
  "استراتيجيات الأمن السيبراني",
  "العملات الرقمية والبلوكتشين",
  "مستقبل التعليم الرقمي",
  "البيانات الضخمة واتخاذ القرار",
  "الحوسبة السحابية",
  "إنترنت الأشياء والمدن الذكية",
];

const FEATURED_REPORTS = [
  {
    id: 1,
    title: "تقرير: مستقبل التجارة الإلكترونية في العالم العربي",
    excerpt:
      "تحليل شامل لاتجاهات وتطورات قطاع التجارة الإلكترونية في المنطقة العربية والفرص المتاحة للنمو خلال السنوات القادمة.",
    image: "report1",
    category: "تقارير",
    date: "8 أبريل 2025",
  },
  {
    id: 2,
    title: "المشهد الإعلامي الرقمي في 2025: التحديات والتوجهات",
    excerpt:
      "رصد وتحليل للتحولات في المشهد الإعلامي الرقمي وأبرز التحديات التي تواجه المؤسسات الإعلامية في ظل التطورات التكنولوجية المتسارعة.",
    image: "report2",
    category: "تقارير",
    date: "2 أبريل 2025",
  },
];

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "مؤتمر التحول الرقمي للقطاع الحكومي",
    date: "15 مايو 2025",
    location: "فندق الريتز كارلتون، الرياض",
    image: "event1",
  },
  {
    id: 2,
    title: "ورشة عمل: أساسيات الأمن السيبراني للشركات",
    date: "22 أبريل 2025",
    location: "مركز الابتكار التقني، دبي",
    image: "event2",
  },
];

const FEATURED_AUTHORS = [
  {
    id: 1,
    name: "د. أحمد الناصر",
    title: "خبير التحول الرقمي",
    image: "authorProfile1",
  },
  {
    id: 2,
    name: "م. سارة الخالدي",
    title: "متخصصة في الأمن السيبراني",
    image: "authorProfile2",
  },
];

// CSS Styles
const cssStyles = `
.home-container {
  padding: 2rem;
  background-color: #00101F;
  color: #00e6e6;
  min-height: 100vh;
  direction: rtl;
}

.slider-section {
  position: relative;
  height: 500px;
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 25px rgba(0, 230, 230, 0.5);
  border: 2px solid #00e6e6;
}

.slider-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  background-size: cover;
  background-position: center;
}

.slider-slide.active {
  opacity: 1;
}

.slider-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 3rem;
  background: linear-gradient(to top, rgba(0,16,31,0.95), rgba(0,16,31,0.7), transparent);
}

.slider-category {
  background-color: rgba(0, 230, 230, 0.2);
  color: #00e6e6;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
  border: 1px solid #00e6e6;
  font-size: 0.9rem;
}

.slider-title {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
}

.slider-excerpt {
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 800px;
}

.slider-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #83d0d0;
}

.slider-button {
  background-color: transparent;
  color: #00e6e6;
  border: 2px solid #00e6e6;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  margin-top: 1rem;
}

.slider-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
  box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
}

.slider-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
}

.slider-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-dot.active {
  background-color: #00e6e6;
  box-shadow: 0 0 10px rgba(0, 230, 230, 0.8);
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  margin-bottom: 3rem;
}

.section-title {
  color: #00e6e6;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-right: 3px solid #00e6e6;
  padding-right: 1rem;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.news-card {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
}

.news-image {
  height: 180px;
  overflow: hidden;
  position: relative;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-category {
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

.news-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-title {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.news-excerpt {
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.news-meta {
  color: #83d0d0;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 230, 230, 0.2);
  padding-top: 1rem;
}

.sidebar {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 230, 230, 0.3);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.sidebar-section {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 230, 230, 0.2);
}

.sidebar-section:last-child {
  border-bottom: none;
}

.sidebar-title {
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(0, 230, 230, 0.2);
}

.trending-list {
  list-style: none;
  padding: 0;
}

.trending-item {
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(0, 230, 230, 0.1);
  color: #e0e0e0;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.trending-item:last-child {
  border-bottom: none;
}

.trending-item::before {
  content: '#';
  color: #00e6e6;
  margin-left: 0.5rem;
  font-weight: bold;
}

.trending-item:hover {
  color: #00e6e6;
  transform: translateX(-5px);
}

.author-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: rgba(0, 40, 50, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.author-card:hover {
  background-color: rgba(0, 50, 60, 0.7);
  transform: translateX(-5px);
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #00e6e6;
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.author-title {
  color: #83d0d0;
  font-size: 0.9rem;
}

.reports-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.report-card {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 230, 230, 0.3);
}

.report-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
}

.report-image {
  height: 200px;
  overflow: hidden;
}

.report-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.report-card:hover .report-image img {
  transform: scale(1.05);
}

.report-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.report-title {
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.report-excerpt {
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
}

.report-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #83d0d0;
  font-size: 0.9rem;
  border-top: 1px solid rgba(0, 230, 230, 0.2);
  padding-top: 1rem;
}

.events-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.event-card {
  display: flex;
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 230, 230, 0.3);
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
}

.event-image {
  width: 120px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-content {
  flex: 1;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.event-title {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.event-meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: #83d0d0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.event-button {
  background-color: transparent;
  color: #00e6e6;
  border: 1px solid #00e6e6;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  width: fit-content;
}

.event-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
}

.media-section {
  margin-bottom: 3rem;
}

.media-row {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.video-card {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 230, 230, 0.3);
  position: relative;
}

.video-thumbnail {
  height: 300px;
  position: relative;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
}

.video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(0, 230, 230, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #00101F;
  font-size: 2rem;
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.5);
}

.video-content {
  padding: 1.5rem;
}

.video-title {
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.video-meta {
  color: #83d0d0;
  font-size: 0.9rem;
}

.infographic-card {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 230, 230, 0.3);
  position: relative;
  height: 100%;
}

.infographic-image {
  height: 250px;
}

.infographic-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.infographic-content {
  padding: 1.2rem;
}

.infographic-title {
  color: #ffffff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.infographic-meta {
  color: #83d0d0;
  font-size: 0.9rem;
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

.cta-button {
  background-color: transparent;
  color: #00e6e6;
  border: 2px solid #00e6e6;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 1.1rem;
}

.cta-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
  box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
}

@media (max-width: 1200px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .main-content {
    grid-template-columns: 1fr;
  }
  
  .slider-title {
    font-size: 2rem;
  }
  
  .slider-excerpt {
    font-size: 1rem;
  }
  
  .slider-overlay {
    padding: 2rem;
  }
  
  .reports-row,
  .events-row {
    grid-template-columns: 1fr;
  }
  
  .media-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .hexagonal-cta {
    padding: 2rem 1rem;
    clip-path: polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%);
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .cta-text {
    font-size: 1rem;
  }
}
`;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Add the styles to the page */}
      <style>{cssStyles}</style>

      <div className="home-container">
        {/* Featured Slider */}
        <div className="slider-section">
          {FEATURED_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`slider-slide ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${IMAGES[slide.image]})` }}
            >
              <div className="slider-overlay">
                <div className="slider-category">{slide.category}</div>
                <h2 className="slider-title">{slide.title}</h2>
                <p className="slider-excerpt">{slide.excerpt}</p>
                <div className="slider-meta">
                  <span>{slide.date}</span>
                </div>
                <button className="slider-button">اقرأ المزيد</button>
              </div>
            </div>
          ))}

          <div className="slider-controls">
            {FEATURED_SLIDES.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="main-content">
          <div>
            <h2 className="section-title">أحدث الأخبار</h2>
            <div className="news-grid">
              {LATEST_NEWS.map((news) => (
                <div key={news.id} className="news-card">
                  <div className="news-image">
                    <img src={IMAGES[news.image]} alt={news.title} />
                    <div className="news-category">{news.category}</div>
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{news.title}</h3>
                    <p className="news-excerpt">{news.excerpt}</p>
                    <div className="news-meta">
                      <span>{news.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">المواضيع الرائجة</h3>
              <ul className="trending-list">
                {TRENDING_TOPICS.map((topic, index) => (
                  <li key={index} className="trending-item">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">كتّاب مميزون</h3>
              {FEATURED_AUTHORS.map((author) => (
                <div key={author.id} className="author-card">
                  <div className="author-image">
                    <img src={IMAGES[author.image]} alt={author.name} />
                  </div>
                  <div className="author-info">
                    <div className="author-name">{author.name}</div>
                    <div className="author-title">{author.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Reports */}
        <div>
          <h2 className="section-title">تقارير مميزة</h2>
          <div className="reports-row">
            {FEATURED_REPORTS.map((report) => (
              <div key={report.id} className="report-card">
                <div className="report-image">
                  <img src={IMAGES[report.image]} alt={report.title} />
                </div>
                <div className="report-content">
                  <h3 className="report-title">{report.title}</h3>
                  <p className="report-excerpt">{report.excerpt}</p>
                  <div className="report-meta">
                    <span>{report.category}</span>
                    <span>{report.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="hexagonal-cta">
          <h2 className="cta-title">انضم إلى نشرتنا الإخبارية</h2>
          <p className="cta-text">
            احصل على آخر الأخبار والتقارير والتحليلات في مجال التكنولوجيا
            والإعلام الرقمي مباشرة إلى بريدك الإلكتروني.
          </p>
          <button className="cta-button">اشترك الآن</button>
        </div>

        {/* Upcoming Events */}
        <div>
          <h2 className="section-title">الفعاليات القادمة</h2>
          <div className="events-row">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={IMAGES[event.image]} alt={event.title} />
                </div>
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <div>
                      <span className="meta-icon">📅</span> {event.date}
                    </div>
                    <div>
                      <span className="meta-icon">📍</span> {event.location}
                    </div>
                  </div>
                  <button className="event-button">التفاصيل والتسجيل</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Media */}
        <div className="media-section">
          <h2 className="section-title">من المكتبة الإعلامية</h2>
          <div className="media-row">
            <div className="video-card">
              <div className="video-thumbnail">
                <img src={IMAGES.videoThumbnail1} alt="Featured Video" />
                <div className="video-play">▶</div>
              </div>
              <div className="video-content">
                <h3 className="video-title">
                  حوار خاص: مستقبل التكنولوجيا في المنطقة العربية
                </h3>
                <div className="video-meta">12 أبريل 2025 | 18:35 دقيقة</div>
              </div>
            </div>

            <div className="infographic-card">
              <div className="infographic-image">
                <img src={IMAGES.infographic1} alt="Infographic" />
              </div>
              <div className="infographic-content">
                <h3 className="infographic-title">
                  اتجاهات التسوق الإلكتروني في العالم العربي
                </h3>
                <div className="infographic-meta">10 أبريل 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
