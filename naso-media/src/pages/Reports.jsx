import styled from "@emotion/styled";
import { useState } from "react";

// These image URLs should be replaced with your actual images
const IMAGES = {
  report1: "/images/report1.jpg",
  report2: "/images/report2.jpg",
  report3: "/images/report3.jpg",
  reportFeatured: "/images/report-featured.jpg",
  reportChart: "/images/report-chart.jpg",
  reportDocument: "/images/report-document.jpg",
};

// Sample report data
const REPORTS = [
  {
    id: 1,
    title: "تقرير عن أمن المعلومات في عام 2025",
    summary:
      "تحليل شامل لمخاطر الأمن السيبراني والاتجاهات الجديدة في مجال حماية البيانات والخصوصية الرقمية.",
    date: "10 أبريل 2025",
    image: "report1",
    category: "أمن سيبراني",
  },
  {
    id: 2,
    title: "الذكاء الاصطناعي وتأثيره على سوق العمل",
    summary:
      "دراسة تحليلية عن تأثير تقنيات الذكاء الاصطناعي على الوظائف المستقبلية والمهارات المطلوبة في سوق العمل.",
    date: "5 أبريل 2025",
    image: "report2",
    category: "تكنولوجيا",
  },
  {
    id: 3,
    title: "تطور التجارة الإلكترونية في الشرق الأوسط",
    summary:
      "رصد لأهم التطورات في قطاع التجارة الإلكترونية وتأثيرها على اقتصاديات المنطقة خلال السنوات الأخيرة.",
    date: "28 مارس 2025",
    image: "report3",
    category: "اقتصاد رقمي",
  },
  {
    id: 4,
    title: "التحول الرقمي في القطاع التعليمي",
    summary:
      "تقرير يتناول التحديات والفرص المتاحة أمام المؤسسات التعليمية في ظل التحول الرقمي وما بعد جائحة كورونا.",
    date: "15 مارس 2025",
    image: "reportChart",
    category: "تعليم",
  },
  {
    id: 5,
    title: "استراتيجيات التسويق الرقمي الفعالة",
    summary:
      "تحليل لأفضل استراتيجيات التسويق الرقمي وتأثيرها على سلوك المستهلك في العالم العربي.",
    date: "2 مارس 2025",
    image: "reportDocument",
    category: "تسويق",
  },
];

const Container = styled.div`
  padding: 2rem;
  background-color: #00101f; // Dark navy background
  color: #00e6e6; // Teal text
  min-height: 100vh;
  direction: rtl; // Support RTL for Arabic content
`;

const PageTitle = styled.h1`
  color: #00e6e6;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 230, 230, 0.4);
  border-bottom: 1px solid #00e6e6;
  padding-bottom: 1rem;
`;

const FeaturedReport = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
  margin-bottom: 3rem;
  background-color: rgba(0, 40, 50, 0.5);
  border: 2px solid #00e6e6;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(0, 230, 230, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturedContent = styled.div`
  flex: 2;
`;

const FeaturedImage = styled.div`
  flex: 1;
  border: 2px solid #00e6e6;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 230, 230, 0.5);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ReportTitle = styled.h2`
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ReportMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #83d0d0;
`;

const ReportCategory = styled.span`
  background-color: rgba(0, 230, 230, 0.2);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  border: 1px solid #00e6e6;
`;

const ReportDate = styled.span``;

const ReportSummary = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMoreButton = styled.button`
  background-color: transparent;
  color: #00e6e6;
  border: 1px solid #00e6e6;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 230, 230, 0.2);
    box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
  }
`;

const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ReportCard = styled.div`
  background-color: rgba(0, 30, 40, 0.7);
  border: 1px solid #00e6e6;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 230, 230, 0.4);
  }
`;

const CardImage = styled.div`
  height: 180px;
  overflow: hidden;
  border-bottom: 1px solid #00e6e6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #83d0d0;
`;

const CardSummary = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const OctagonalReport = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(0, 50, 60, 0.5);
  border: 2px solid #00e6e6;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 0 15px rgba(0, 230, 230, 0.3);
  clip-path: polygon(
    15% 0%,
    85% 0%,
    100% 15%,
    100% 85%,
    85% 100%,
    15% 100%,
    0% 85%,
    0% 15%
  );
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: ${(props) =>
    props.active ? "rgba(0, 230, 230, 0.3)" : "transparent"};
  color: #00e6e6;
  border: 1px solid #00e6e6;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 230, 230, 0.2);
  }
`;

const Reports = () => {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const categories = [
    "الكل",
    "أمن سيبراني",
    "تكنولوجيا",
    "اقتصاد رقمي",
    "تعليم",
    "تسويق",
  ];

  const filteredReports =
    activeFilter === "الكل"
      ? REPORTS
      : REPORTS.filter((report) => report.category === activeFilter);

  return (
    <Container>
      <PageTitle>تقارير وتحليلات</PageTitle>

      <FilterSection>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterSection>

      <FeaturedReport>
        <FeaturedContent>
          <ReportTitle>
            تقرير خاص: مستقبل التكنولوجيا في العالم العربي
          </ReportTitle>
          <ReportMeta>
            <ReportCategory>تكنولوجيا</ReportCategory>
            <ReportDate>15 أبريل 2025</ReportDate>
          </ReportMeta>
          <ReportSummary>
            يتناول هذا التقرير الشامل آخر التطورات التكنولوجية في المنطقة
            العربية، مع التركيز على الابتكارات الناشئة والاستثمارات في قطاع
            التكنولوجيا. كما يستعرض التقرير التحديات التي تواجه الشركات الناشئة
            والفرص المتاحة في ظل التحول الرقمي المتسارع.
          </ReportSummary>
          <ReportSummary>
            يشمل التقرير مقابلات حصرية مع خبراء ومستثمرين بارزين في المجال،
            بالإضافة إلى تحليل البيانات والإحصاءات المتعلقة بالقطاع التكنولوجي
            في المنطقة خلال السنوات الخمس الماضية.
          </ReportSummary>
          <ReadMoreButton>قراءة التقرير كاملاً</ReadMoreButton>
        </FeaturedContent>
        <FeaturedImage>
          <img src={IMAGES.reportFeatured} alt="مستقبل التكنولوجيا" />
        </FeaturedImage>
      </FeaturedReport>

      <OctagonalReport>
        <ReportTitle>الاتجاهات الرقمية الرئيسية لعام 2025</ReportTitle>
        <ReportMeta>
          <ReportCategory>تحليل</ReportCategory>
          <ReportDate>1 أبريل 2025</ReportDate>
        </ReportMeta>
        <ReportSummary>
          تلخص هذه الدراسة الاتجاهات التكنولوجية الرئيسية التي ستشكل المشهد
          الرقمي في عام 2025 وما بعده. من الذكاء الاصطناعي التوليدي إلى الواقع
          المعزز والميتافيرس، نستعرض كيف ستؤثر هذه التقنيات على حياتنا اليومية
          وعلى قطاعات الأعمال المختلفة.
        </ReportSummary>
        <ReadMoreButton>قراءة التحليل</ReadMoreButton>
      </OctagonalReport>

      <ReportsGrid>
        {filteredReports.map((report) => (
          <ReportCard key={report.id}>
            <CardImage>
              <img src={IMAGES[report.image]} alt={report.title} />
            </CardImage>
            <CardContent>
              <CardTitle>{report.title}</CardTitle>
              <CardMeta>
                <ReportCategory>{report.category}</ReportCategory>
                <ReportDate>{report.date}</ReportDate>
              </CardMeta>
              <CardSummary>{report.summary}</CardSummary>
              <ReadMoreButton>قراءة المزيد</ReadMoreButton>
            </CardContent>
          </ReportCard>
        ))}
      </ReportsGrid>
    </Container>
  );
};

export default Reports;
