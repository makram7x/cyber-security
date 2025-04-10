import styled from "@emotion/styled";

// These image URLs should be replaced with your actual images
const IMAGES = {
  securityLock: "/images/security-lock.jpg",
  hacker: "/images/hacker.jpg",
  codingLaptop: "/images/coding-laptop.jpg",
  codeScreen: "/images/code-screen.jpg",
};

const Container = styled.div`
  padding: 2rem;
  background-color: #00101f; // Dark navy background
  color: #00e6e6; // Teal text
  min-height: 100vh;
  direction: rtl; // Support RTL for Arabic content
`;

const NewsSection = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.reversed ? "row" : "row-reverse")};
  align-items: center;
  margin-bottom: 3rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: right; // Right-aligned text for Arabic
`;

const SectionTitle = styled.h2`
  color: #00e6e6;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionText = styled.p`
  color: #00e6e6;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  flex: 1;
  border: 2px solid #00e6e6;
  border-radius: 5px;
  padding: 3px;
  box-shadow: 0 0 15px rgba(0, 230, 230, 0.5);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const FeaturedImageContainer = styled(ImageContainer)`
  flex: 2; // Make the featured image larger
`;

const OctagonalBox = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(0, 50, 60, 0.5);
  border: 2px solid #00e6e6;
  border-radius: 15px;
  padding: 2rem;
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

const LayoutRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LayoutColumn = styled.div`
  flex: ${(props) => props.width || 1};
`;

const News = () => {
  return (
    <Container>
      <NewsSection>
        <TextContent>
          <SectionTitle>أفضل ممارسات للأمان</SectionTitle>
          <SectionText>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها.
          </SectionText>
        </TextContent>
        <ImageContainer>
          <img src={IMAGES.securityLock} alt="ممارسات الأمان" />
        </ImageContainer>
      </NewsSection>

      <NewsSection>
        <TextContent>
          <SectionTitle>أفضل ممارسات للأمان</SectionTitle>
          <SectionText>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها.
          </SectionText>
        </TextContent>
        <ImageContainer>
          <img src={IMAGES.codingLaptop} alt="برمجة آمنة" />
        </ImageContainer>
      </NewsSection>

      <NewsSection>
        <TextContent>
          <SectionTitle>أفضل ممارسات للأمان</SectionTitle>
          <SectionText>
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها.
          </SectionText>
        </TextContent>
        <ImageContainer>
          <img src={IMAGES.codeScreen} alt="شاشة برمجة" />
        </ImageContainer>
      </NewsSection>

      <LayoutRow>
        <LayoutColumn width={1}>
          <OctagonalBox>
            <SectionTitle>أفضل ممارسات للأمان</SectionTitle>
            <SectionText>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. هناك حقيقة مثبتة منذ زمن طويل وهي أن
              المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي
              للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
            </SectionText>
          </OctagonalBox>
        </LayoutColumn>
        <LayoutColumn width={2}>
          <FeaturedImageContainer>
            <img src={IMAGES.hacker} alt="قرصنة" />
          </FeaturedImageContainer>
        </LayoutColumn>
      </LayoutRow>
    </Container>
  );
};

export default News;
