import React, { useState } from "react";

// These image URLs should be replaced with your actual images
const MEDIA_ITEMS = [
  {
    id: 1,
    title: "تغطية مؤتمر التحول الرقمي 2025",
    type: "صور",
    category: "مؤتمرات",
    thumbnail: "/images/media1.jpg",
    date: "15 أبريل 2025",
    featured: true,
  },
  {
    id: 2,
    title: "لقاء مع وزير الاتصالات وتقنية المعلومات",
    type: "فيديوهات",
    category: "مقابلات",
    thumbnail: "/images/media2.jpg",
    duration: "15:42",
    date: "10 أبريل 2025",
  },
  // ... rest of the MEDIA_ITEMS array ...
];

// Categories for each media type
const MEDIA_CATEGORIES = {
  صور: ["الكل", "مؤتمرات", "فعاليات", "معارض", "ندوات"],
  فيديوهات: ["الكل", "مقابلات", "تقارير", "حوارات", "جولات"],
  انفوغراف: ["الكل", "إحصائيات", "أمن رقمي", "بيانات", "تقنية"],
};

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

.media-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 230, 230, 0.3);
}

.media-tab {
  background-color: transparent;
  color: #83d0d0;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.media-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #00e6e6;
  transition: width 0.3s ease;
}

.media-tab:hover {
  color: #00e6e6;
}

.media-tab.active {
  color: #00e6e6;
}

.media-tab.active::after {
  width: 100%;
}

.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.category-filters {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.filter-button {
  background-color: transparent;
  color: #00e6e6;
  border: 1px solid #00e6e6;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.filter-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
}

.filter-button.active {
  background-color: rgba(0, 230, 230, 0.3);
}

.search-box {
  display: flex;
  align-items: center;
  background-color: rgba(0, 30, 40, 0.7);
  border: 1px solid rgba(0, 230, 230, 0.5);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  width: 250px;
}

.search-input {
  background-color: transparent;
  border: none;
  color: #ffffff;
  width: 100%;
  padding: 0.3rem;
  font-size: 0.9rem;
}

.search-input:focus {
  outline: none;
}

.search-input::placeholder {
  color: #83d0d0;
}

.search-icon {
  color: #83d0d0;
  margin-left: 0.5rem;
}

.featured-media {
  margin-bottom: 3rem;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #00e6e6;
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
}

.featured-media-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.7);
}

.featured-media-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,16,31,0.9), rgba(0,16,31,0.4), transparent);
}

.featured-media-title {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
}

.featured-media-meta {
  display: flex;
  gap: 1.5rem;
  color: #83d0d0;
  margin-bottom: 1rem;
}

.view-button {
  background-color: transparent;
  color: #00e6e6;
  border: 2px solid #00e6e6;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.view-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
  box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
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

.media-play-button {
  background-color: rgba(0, 230, 230, 0.8);
  color: #00101F;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.media-duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 16, 31, 0.8);
  color: #00e6e6;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.media-type-badge {
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

.hexagonal-tooltip {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: rgba(0, 230, 230, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  color: #00101F;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
}

.media-pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.page-button {
  background-color: rgba(0, 30, 40, 0.7);
  color: #00e6e6;
  border: 1px solid #00e6e6;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
}

.page-button.active {
  background-color: rgba(0, 230, 230, 0.3);
}

.glowing-border {
  padding: 2rem;
  margin-top: 3rem;
  border: 1px solid #00e6e6;
  border-radius: 10px;
  background-color: rgba(0, 25, 35, 0.5);
  box-shadow: 0 0 15px rgba(0, 230, 230, 0.3);
}

.section-title {
  color: #00e6e6;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background-color: rgba(0, 40, 50, 0.7);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(0, 230, 230, 0.3);
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: #00e6e6;
  box-shadow: 0 0 15px rgba(0, 230, 230, 0.4);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #00e6e6;
}

.category-name {
  color: #ffffff;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .filter-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-box {
    width: 100%;
  }
  
  .featured-media-image {
    height: 300px;
  }
  
  .featured-media-title {
    font-size: 1.5rem;
  }
}
`;

const Media = () => {
  const [activeTab, setActiveTab] = useState("صور");
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchTerm, setSearchTerm] = useState("");

  // Find featured media item
  const featuredItem = MEDIA_ITEMS.find((item) => item.featured);

  // Filter media based on active tab, category, and search term
  const filteredMedia = MEDIA_ITEMS.filter((item) => {
    const matchesTab = item.type === activeTab;
    const matchesCategory =
      activeCategory === "الكل" || item.category === activeCategory;
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTab && matchesCategory && matchesSearch;
  });

  // Get the categories for the active tab
  const currentCategories = MEDIA_CATEGORIES[activeTab] || [];

  return (
    <>
      {/* Add the styles to the page */}
      <style>{cssStyles}</style>

      <div className="media-container">
        <h1 className="page-title">المكتبة الإعلامية</h1>
        <p className="page-subtitle">
          اكتشف مجموعتنا من الصور والفيديوهات والإنفوجرافيك
        </p>

        {/* Media Type Tabs */}
        <div className="media-tabs">
          {Object.keys(MEDIA_CATEGORIES).map((tabName) => (
            <button
              key={tabName}
              className={`media-tab ${activeTab === tabName ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tabName);
                setActiveCategory("الكل");
              }}
            >
              {tabName}
            </button>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="filter-section">
          <div className="category-filters">
            {currentCategories.map((category) => (
              <button
                key={category}
                className={`filter-button ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="ابحث في المكتبة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Featured Media Item */}
        {featuredItem &&
          activeTab === featuredItem.type &&
          activeCategory === "الكل" &&
          searchTerm === "" && (
            <div className="featured-media">
              <img
                src={featuredItem.thumbnail}
                alt={featuredItem.title}
                className="featured-media-image"
              />
              <div className="featured-media-content">
                <h2 className="featured-media-title">{featuredItem.title}</h2>
                <div className="featured-media-meta">
                  <span>{featuredItem.type}</span>
                  <span>{featuredItem.category}</span>
                  <span>{featuredItem.date}</span>
                  {featuredItem.duration && (
                    <span>{featuredItem.duration}</span>
                  )}
                </div>
                <button className="view-button">
                  {featuredItem.type === "فيديوهات"
                    ? "مشاهدة الفيديو"
                    : featuredItem.type === "صور"
                    ? "عرض الصور"
                    : "عرض الإنفوجرافيك"}
                </button>
              </div>
            </div>
          )}

        {/* Media Grid */}
        <div className="media-grid">
          {filteredMedia
            .filter(
              (item) =>
                !item.featured ||
                !(
                  activeTab === featuredItem.type &&
                  activeCategory === "الكل" &&
                  searchTerm === ""
                )
            )
            .map((item) => (
              <div key={item.id} className="media-card">
                <div className="media-thumbnail">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="media-type-badge">{item.category}</div>

                  {item.type === "فيديوهات" && (
                    <>
                      <div className="media-overlay">
                        <button className="media-play-button">▶</button>
                      </div>
                      <div className="media-duration">{item.duration}</div>
                    </>
                  )}

                  {item.type === "انفوغراف" && (
                    <div className="hexagonal-tooltip">i</div>
                  )}

                  {item.type === "صور" && (
                    <div className="media-overlay">
                      <button className="view-button">عرض</button>
                    </div>
                  )}
                </div>
                <div className="media-content">
                  <h3 className="media-title">{item.title}</h3>
                  <div className="media-info">
                    <span>{item.type}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Media Categories Section */}
        <div className="glowing-border">
          <h2 className="section-title">تصفح حسب الفئة</h2>
          <div className="categories-grid">
            {[
              "مؤتمرات",
              "مقابلات",
              "إحصائيات",
              "فعاليات",
              "تقارير",
              "أمن رقمي",
              "معارض",
              "حوارات",
            ].map((category) => (
              <div
                key={category}
                className="category-card"
                onClick={() => {
                  // Find which tab contains this category
                  for (const [tabName, categories] of Object.entries(
                    MEDIA_CATEGORIES
                  )) {
                    if (categories.includes(category)) {
                      setActiveTab(tabName);
                      setActiveCategory(category);
                      break;
                    }
                  }
                }}
              >
                <div className="category-icon">
                  {category === "مؤتمرات" && "🏢"}
                  {category === "مقابلات" && "🎤"}
                  {category === "إحصائيات" && "📊"}
                  {category === "فعاليات" && "🎭"}
                  {category === "تقارير" && "📑"}
                  {category === "أمن رقمي" && "🔒"}
                  {category === "معارض" && "🖼️"}
                  {category === "حوارات" && "💬"}
                </div>
                <div className="category-name">{category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="media-pagination">
          <button className="page-button">«</button>
          <button className="page-button active">1</button>
          <button className="page-button">2</button>
          <button className="page-button">3</button>
          <button className="page-button">»</button>
        </div>
      </div>
    </>
  );
};

export default Media;
