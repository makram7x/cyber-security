import styled from '@emotion/styled';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.navy};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary.navy};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary.lightGrey};
  flex-shrink: 0;
`;

const About = () => {
  return (
    <Container>
      <Section>
        <Title>من نحن</Title>
        <ProfileSection>
          <ProfileImage />
          <div>
            <Subtitle>Mr. Khalifa Nasser</Subtitle>
            <Text>إعلامي محترف في قناة Naso</Text>
          </div>
        </ProfileSection>
        
        <Text>
          نحن منصة إعلامية رائدة في تقديم المحتوى العربي، نسعى لتقديم محتوى إعلامي متميز
          يلبي تطلعات جمهورنا العربي ويواكب التطورات العالمية.
        </Text>
      </Section>

      <Section>
        <Subtitle>رؤيتنا</Subtitle>
        <Text>
          أن نكون المنصة الإعلامية الأولى في تقديم المحتوى العربي الهادف والمتميز،
          ونسعى لتحقيق التميز في كافة المجالات الإعلامية.
        </Text>
      </Section>

      <Section>
        <Subtitle>رسالتنا</Subtitle>
        <Text>
          تقديم محتوى إعلامي متميز يرتقي بالذائقة العربية ويساهم في نشر الوعي
          والمعرفة في مجتمعنا العربي.
        </Text>
      </Section>
    </Container>
  );
};

export default About;