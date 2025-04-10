import React, { useState } from "react";

// These image URLs should be replaced with your actual images
const IMAGES = {
  article1: "/images/article1.jpg",
  article2: "/images/article2.jpg",
  article3: "/images/article3.jpg",
  article4: "/images/article4.jpg",
  article5: "/images/article5.jpg",
  articleFeatured: "/images/article-featured.jpg",
  authorProfile1: "/images/author1.jpg",
  authorProfile2: "/images/author2.jpg",
  authorProfile3: "/images/author3.jpg",
  authorProfile4: "/images/author4.jpg",
};

// Sample article data
const ARTICLES = [
  {
    id: 1,
    title: "مستقبل العملات الرقمية والبلوكتشين في الاقتصاد العربي",
    excerpt:
      "تحليل لمستقبل العملات المشفرة وتقنية البلوكتشين وتأثيرها على القطاع المالي في المنطقة العربية.",
    author: "د. محمد الفهد",
    authorImage: "authorProfile1",
    date: "9 أبريل 2025",
    readTime: "7 دقائق",
    image: "article1",
    category: "اقتصاد",
  },
  {
    id: 2,
    title: "التحول الرقمي في المؤسسات الحكومية: التحديات والحلول",
    excerpt:
      "نظرة على العقبات التي تواجه المؤسسات الحكومية في رحلة التحول الرقمي والاستراتيجيات الناجحة للتغلب عليها.",
    author: "م. سارة العبدالله",
    authorImage: "authorProfile2",
    date: "7 أبريل 2025",
    readTime: "5 دقائق",
    image: "article2",
    category: "تكنولوجيا",
  },
  {
    id: 3,
    title: "الهوية الرقمية وحماية الخصوصية في العصر الرقمي",
    excerpt:
      "مناقشة للتوازن بين الابتكار التكنولوجي وحماية خصوصية المستخدمين في ظل انتشار تقنيات التعرف والهوية الرقمية.",
    author: "فاطمة القحطاني",
    authorImage: "authorProfile3",
    date: "4 أبريل 2025",
    readTime: "6 دقائق",
    image: "article3",
    category: "خصوصية",
  },
  {
    id: 4,
    title: "تطور صناعة المحتوى الرقمي العربي: الواقع والتحديات",
    excerpt:
      "تحليل لواقع صناعة المحتوى الرقمي باللغة العربية والفرص المتاحة للمبدعين في المنطقة.",
    author: "عبدالله العمري",
    authorImage: "authorProfile4",
    date: "1 أبريل 2025",
    readTime: "8 دقائق",
    image: "article4",
    category: "إعلام",
  },
  {
    id: 5,
    title: "الذكاء الاصطناعي في التعليم: نماذج ناجحة من العالم العربي",
    excerpt:
      "استعراض لأبرز تطبيقات الذكاء الاصطناعي في القطاع التعليمي العربي والنتائج الإيجابية المحققة.",
    author: "د. نورا الشمري",
    authorImage: "authorProfile1",
    date: "28 مارس 2025",
    readTime: "6 دقائق",
    image: "article5",
    category: "تعليم",
  },
];

// Add this CSS to your existing CSS file or create a new one
const cssStyles = `
.articles-container {
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

.featured-article {
  position: relative;
  margin-bottom: 4rem;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #00e6e6;
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
  height: 400px;
}

.featured-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.featured-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,16,31,0.9), rgba(0,16,31,0.4), transparent);
}

.featured-title {
  color: #ffffff;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.8);
}

.featured-excerpt {
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 700px;
}

.category-tag {
  background-color: rgba(0, 230, 230, 0.2);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  border: 1px solid #00e6e6;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.author-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #00e6e6;
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  color: #ffffff;
  font-weight: bold;
}

.article-meta {
  display: flex;
  gap: 1rem;
  color: #83d0d0;
  font-size: 0.9rem;
}

.read-more-button {
  background-color: transparent;
  color: #00e6e6;
  border: 1px solid #00e6e6;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.read-more-button:hover {
  background-color: rgba(0, 230, 230, 0.2);
  box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
}

.articles-section {
  margin-top: 3rem;
}

.section-title {
  color: #00e6e6;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  border-right: 3px solid #00e6e6;
  padding-right: 1rem;
}

.featured-articles-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.medium-article-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 230, 230, 0.3);
}

.medium-article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
}

.medium-card-image {
  height: 200px;
  overflow: hidden;
}

.medium-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.medium-article-card:hover .medium-card-image img {
  transform: scale(1.05);
}

.medium-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.medium-card-title {
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.medium-card-excerpt {
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex: 1;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.article-card {
  background-color: rgba(0, 30, 40, 0.7);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
}

.card-image {
  height: 180px;
  overflow: hidden;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .card-image img {
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

.card-content {
  padding: 1.5rem;
}

.card-title {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.card-excerpt {
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
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 230, 230, 0.2);
}

.card-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.small-author-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}

.small-author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-author-name {
  color: #83d0d0;
  font-size: 0.8rem;
}

.card-read-time {
  color: #83d0d0;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .featured-content {
    padding: 1rem;
  }
  
  .featured-title {
    font-size: 1.8rem;
  }
  
  .featured-excerpt {
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .featured-articles-row {
    grid-template-columns: 1fr;
  }
}
`;

const Articles = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const categories = [
    "الكل",
    "تكنولوجيا",
    "اقتصاد",
    "خصوصية",
    "إعلام",
    "تعليم",
  ];

  const filteredArticles =
    activeFilter === "الكل"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === activeFilter);

  return (
    <>
      {/* Add the styles to the page */}
      <style>{cssStyles}</style>

      <div className="articles-container">
        <h1 className="page-title">المقالات</h1>

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

        <div className="featured-article">
          <div className="featured-image">
            <img
              src={IMAGES.articleFeatured}
              alt="الذكاء الاصطناعي في الصحافة"
            />
          </div>
          <div className="featured-content">
            <div className="category-tag">رأي</div>
            <h2 className="featured-title">
              الذكاء الاصطناعي وتأثيره على مستقبل الصحافة والإعلام
            </h2>
            <p className="featured-excerpt">
              كيف تتغير صناعة الإعلام بفعل الذكاء الاصطناعي؟ وما هي الفرص
              والتحديات التي ستواجهها وسائل الإعلام العربية في العصر الرقمي
              الجديد؟ هذا المقال يتناول التغييرات الجذرية التي تشهدها صناعة
              الإعلام بفعل تقنيات الذكاء الاصطناعي الحديثة.
            </p>
            <div className="author-section">
              <div className="author-image">
                <img src={IMAGES.authorProfile3} alt="صورة الكاتب" />
              </div>
              <div>
                <div className="author-name">د. أحمد الناصر</div>
                <div className="article-meta">
                  <span>12 أبريل 2025</span>
                  <span>10 دقائق للقراءة</span>
                </div>
              </div>
            </div>
            <button className="read-more-button">قراءة المقال</button>
          </div>
        </div>

        <div className="articles-section">
          <h2 className="section-title">مقالات مختارة</h2>
          <div className="featured-articles-row">
            <div className="medium-article-card">
              <div className="medium-card-image">
                <img src={IMAGES.article1} alt="مستقبل التقنية" />
              </div>
              <div className="medium-card-content">
                <div className="category-tag">استراتيجية</div>
                <h3 className="medium-card-title">
                  استراتيجيات الأمن السيبراني للشركات في 2025
                </h3>
                <p className="medium-card-excerpt">
                  في ظل تزايد التهديدات الإلكترونية، تحتاج الشركات إلى تبني
                  استراتيجيات متطورة لحماية بياناتها وعملياتها. يستعرض هذا
                  المقال أبرز الاستراتيجيات التي يجب على الشركات تبنيها في عام
                  2025.
                </p>
                <div className="card-meta">
                  <div className="card-author">
                    <div className="small-author-image">
                      <img src={IMAGES.authorProfile2} alt="صورة الكاتب" />
                    </div>
                    <span className="card-author-name">م. خالد الجاسم</span>
                  </div>
                  <span className="card-read-time">8 دقائق</span>
                </div>
              </div>
            </div>

            <div className="medium-article-card">
              <div className="medium-card-image">
                <img src={IMAGES.article2} alt="التسويق الرقمي" />
              </div>
              <div className="medium-card-content">
                <div className="category-tag">تسويق</div>
                <h3 className="medium-card-title">
                  مستقبل التسويق الرقمي: اتجاهات وتوقعات لعام 2025
                </h3>
                <p className="medium-card-excerpt">
                  تتطور استراتيجيات التسويق الرقمي باستمرار مع ظهور تقنيات جديدة
                  وتغير سلوك المستهلكين. نستعرض في هذا المقال أهم التوجهات
                  التسويقية التي ستشكل عام 2025.
                </p>
                <div className="card-meta">
                  <div className="card-author">
                    <div className="small-author-image">
                      <img src={IMAGES.authorProfile4} alt="صورة الكاتب" />
                    </div>
                    <span className="card-author-name">ليلى المطيري</span>
                  </div>
                  <span className="card-read-time">6 دقائق</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="articles-section">
          <h2 className="section-title">كل المقالات</h2>
          <div className="article-grid">
            {filteredArticles.map((article) => (
              <div key={article.id} className="article-card">
                <div className="card-image">
                  <img src={IMAGES[article.image]} alt={article.title} />
                  <div className="card-category">{article.category}</div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-excerpt">{article.excerpt}</p>
                  <div className="card-meta">
                    <div className="card-author">
                      <div className="small-author-image">
                        <img
                          src={IMAGES[article.authorImage]}
                          alt={article.author}
                        />
                      </div>
                      <span className="card-author-name">{article.author}</span>
                    </div>
                    <span className="card-read-time">{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
