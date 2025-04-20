import styled from "@emotion/styled";
import { newsItems } from "../data/newsData"; // Import news data

// Removed local IMAGES constant as images are in newsData

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

// Removed local newsItems definition, using imported data

const News = () => {
  return (
    <Container>
      {/* News Items Provided by User */}
      {newsItems.map((item, index) => (
        <NewsSection key={index} reversed={index % 2 !== 0}> {/* Alternate layout */}
          <TextContent>
            <SectionTitle>{item.title}</SectionTitle>
            <SectionText>{item.text}</SectionText>
          </TextContent>
          <ImageContainer>
            <img src={item.image} alt={item.alt} />
          </ImageContainer>
        </NewsSection>
      ))}
    </Container>
  );
};

export default News;
