export const EVENTS = [
  {
    id: 2,
    title: "GISEC 2025: Gulf Information Security Expo",
    description:
      "معرض يضم أحدث التقنيات والحلول في مجال الأمن السيبراني، بمشاركة كبرى الشركات العالمية والمحلية.",
    date: "6 مايو 2025",
    time: "٩:٠٠ ص - ٥:٠٠ م",
    location: "دبي المعارض الدولية، دبي",
    image: "/gisec-home.jpg", // Updated path from Events.jsx
    category: "معرض",
    featured: false,
    upcoming: true,
    website: "https://gisec.ae/",
  },
  {
    // Updated Gartner Summit details
    id: 3,
    title: "Gartner Security & Risk Management Summit 2025",
    description:
      "انضم إلى القمة الرائدة في الأمن السيبراني في الشرق الأوسط لاكتشاف أحدث الاستراتيجيات والأدوات لتعزيز أمن معلومات مؤسستك.",
    date: "7-8 أبريل 2025", // Updated date from image
    time: "٨:٠٠ ص - ٤:٠٠ م", // Keeping original time unless specified otherwise
    location: "مركز دبي الدولي للمؤتمرات، دبي", // Keeping specific location
    image: "/event1.jpg", // Path from Events.jsx
    category: "قمة",
    featured: false, // Set to false as it's a past event
    upcoming: false, // Set to false as it's a past event
    website:
      "https://www.gartner.com/en/conferences/emea/security-risk-management-uae", // Added website link
  },
  {
    // Replaced Workshop with Digital Transformation Summit
    id: 4,
    title: "37th Edition DIGITAL TRANSFORMATION SUMMIT",
    description:
      "انضم إلى النسخة السابعة والثلاثين من قمة التحول الرقمي لاستكشاف أحدث الاتجاهات والتقنيات في التحول الرقمي.", // New description
    date: "29 أبريل 2025", // Updated date
    time: "٨:٣٠ ص - ٦:٠٠ م", // Updated time
    location: "فندق ومنتجعات شيراتون أبوظبي", // Updated location
    image: "/dts-logo-2.png", // Updated path from Events.jsx
    category: "قمة", // Updated category to Summit
    featured: false, // Assuming not featured
    upcoming: true, // Date is upcoming
    website: "https://digitransformationsummit.com/uae/", // Added website link
  },
  {
    id: 6,
    title: "UAE Cybersecurity Hackathon 2025",
    description:
      "هاكاثون يجمع المبرمجين وخبراء الأمن لتطوير حلول مبتكرة تواكب التحديات السيبرانية العالمية.",
    date: "18-20 مارس 2025",
    time: "على مدار 3 أيام",
    location: "مركز دبي للتقنيات، دبي",
    image: "/images/event6.jpg", // Path from Events.jsx IMAGES const
    category: "هاكاثون",
    featured: false,
    upcoming: false,
    website: "https://hackathon.ae/", // Added website link
  },
  {
    id: 7,
    title: "TechNext AI & Cybersecurity Summit 2025", // Updated from image
    description:
      "ملتقى يهدف إلى رفع مستوى الوعي بالأمن السيبراني من خلال جلسات نقاشية وعروض تعليمية تفاعلية.", // Keeping original description
    date: "6 Nov 2025", // Updated from image
    time: "١٠:٠٠ ص - ٤:٠٠ م", // Keeping original time
    location: "Dubai, UAE", // Updated from image
    image: "/technext.png", // Updated path from Events.jsx
    category: "قمة", // Updated category to Summit
    featured: false, // Keeping original featured status
    upcoming: true, // Updated based on new date
    website: "https://technextcon.com/?infosec-conferences_com", // Added website link
  },
];