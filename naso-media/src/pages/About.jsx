import styled from "@emotion/styled";
import { FaTiktok, FaInstagram, FaCheck, FaShieldAlt } from "react-icons/fa";
import { MdSecurity, MdLaptopMac } from "react-icons/md";
import { IoMdRibbon } from "react-icons/io";
import { BsPeopleFill, BsBook } from "react-icons/bs";
// import { FaUserGraduationCap } from "react-icons/fa6";
import logo from "/logo.png"; // Import the logo

// Theme constants for consistency - using dark theme colors
const theme = {
  colors: {
    primary: {
      main: "#00C6B6",
      dark: "#00A396",
      light: "#33D2C5",
      contrast: "#FFFFFF",
    },
    secondary: {
      main: "#5C83DE",
      dark: "#3A63C2",
      light: "#7B9BE6",
    },
    accent: "#FFB300",
    background: {
      dark: "#121921",
      darker: "#0A1118",
      medium: "#1E2A3A",
      light: "#273545",
      card: "#1A2332",
    },
    text: {
      primary: "#E6EDF3",
      secondary: "#B3C0D0",
      light: "#8596A9",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
  },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.4)",
    md: "0 4px 6px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15)",
    lg: "0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.2)",
  },
};

// Main container with dark background
const Container = styled.div`
  padding: ${theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
  direction: rtl;
  background-color: ${theme.colors.background.dark}; // Reverted to dark
  color: ${theme.colors.text.primary}; // Reverted to primary text color
  font-family: "Tajawal", "Segoe UI", sans-serif;
`;

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary.main},
      ${theme.colors.secondary.main}
    );
    border-radius: 2px;
  }
`;

const Title = styled.h1`
  color: ${theme.colors.primary.main};
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: ${theme.spacing.md};
  text-shadow: 0 0 8px ${theme.colors.primary.main}99, 0 0 12px ${theme.colors.primary.main}77, 0 2px 4px rgba(0, 0, 0, 0.4); // Restored Neon glow
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};

  svg {
    color: ${theme.colors.accent};
  }
`;

const Section = styled.section`
  background-color: ${theme.colors.background.card}; // Reverted to card background
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-right: 4px solid ${(props) => props.accentColor || theme.colors.primary.main};
  box-shadow: 0 0 5px ${(props) => props.accentColor || theme.colors.primary.main}33, ${theme.shadows.md}; // Subtle border glow + existing shadow

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 10px ${(props) => props.accentColor || theme.colors.primary.main}55, ${theme.shadows.lg}; // Enhanced glow on hover
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.sm};
  border-bottom: 2px solid ${theme.colors.background.light}; // Reverted border color
`;

const SectionIcon = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.bgColor || theme.colors.primary.main},
    ${(props) => props.bgGradient || theme.colors.primary.dark}
  );
  color: ${theme.colors.background.dark}; // Reverted icon text color
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${theme.spacing.md};
  box-shadow: 0 0 6px ${(props) => props.bgColor || theme.colors.primary.main}88, 0 3px 6px rgba(0, 0, 0, 0.25); // Icon glow

  svg {
    font-size: 1.2rem;
    filter: drop-shadow(0 0 2px ${theme.colors.background.darker}99); // Restored shadow
  }
`;

const Subtitle = styled.h2`
  color: ${theme.colors.text.primary}; // Reverted subtitle color
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
  text-shadow: 0 0 3px ${theme.colors.primary.main}33; // Restored Subtle neon hint
`;

const Text = styled.p`
  line-height: 1.7;
  color: ${theme.colors.text.secondary}; // Reverted text color
  font-size: 1rem;
  margin-bottom: ${theme.spacing.md};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: ${theme.spacing.md};
  position: relative;
  padding-right: ${theme.spacing.xl};
  display: flex;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 10px;
    width: 20px;
    height: 20px;
    background-color: ${theme.colors.primary.main}20;
    border-radius: 50%;
  }

  .list-icon {
    position: absolute;
    right: 4px;
    top: 10px;
    color: ${theme.colors.primary.main};
    font-size: 0.8rem;
    filter: drop-shadow(0 0 4px ${theme.colors.primary.main}aa); // Restored Neon glow for list icon
  }

  .list-content {
    flex-grow: 1;
  }
`;

const NestedList = styled.ul`
  list-style: none;
  padding-right: ${theme.spacing.xl};
  margin-top: ${theme.spacing.sm};
`;

const StrongText = styled.strong`
  color: ${theme.colors.text.primary}; // Reverted strong text color
  font-weight: 600;
  display: block;
  margin-bottom: ${theme.spacing.xs};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
`;

const TeamCard = styled.div`
  background-color: ${theme.colors.background.medium}; // Reverted team card bg
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  text-align: center;
  box-shadow: ${theme.shadows.sm};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.md};
    background-color: ${theme.colors.background.light}; // Reverted team card hover bg
  }
`;

const TeamName = styled.div`
  font-weight: 600;
  color: ${theme.colors.text.primary}; // Reverted team name color
  margin-bottom: ${theme.spacing.xs};
`;

const TeamID = styled.div`
  font-family: monospace;
  color: ${theme.colors.text.light}; // Reverted team ID text color
  background-color: ${theme.colors.background.darker}; // Reverted team ID bg color
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  display: inline-block;
  margin-top: ${theme.spacing.xs};
`;

const SupervisorCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.background.medium}; // Reverted supervisor card bg
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
`;

const SupervisorAvatar = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    ${theme.colors.secondary.main},
    ${theme.colors.secondary.dark}
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${theme.spacing.lg};
  color: ${theme.colors.background.dark}; // Reverted supervisor avatar text color
  font-size: 1.5rem;
  font-weight: bold;
`;

const SupervisorInfo = styled.div`
  flex-grow: 1;
`;

const SupervisorName = styled.div`
  font-weight: 600;
  color: ${theme.colors.text.primary}; // Reverted supervisor name color
  font-size: 1.1rem;
`;

const SupervisorTitle = styled.div`
  color: ${theme.colors.text.light}; // Reverted supervisor title color
  font-size: 0.9rem;
  margin-top: ${theme.spacing.xs};
`;

const SocialSection = styled(Section)`
  text-align: center;
  background: linear-gradient(
    to right,
    ${theme.colors.background.medium}, // Reverted gradient
    ${theme.colors.background.card}
  );
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.lg};
`;

const SocialLink = styled.a`
  color: ${(props) => props.color || theme.colors.primary.main};
  font-size: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${theme.colors.background.darker}; // Reverted social link bg
  box-shadow: 0 0 8px ${(props) => props.color || theme.colors.primary.main}55, ${theme.shadows.sm}; // Restored Neon glow

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 0 15px ${(props) => props.color || theme.colors.primary.main}88, ${theme.shadows.md}; // Enhanced glow on hover
    color: ${(props) => props.hoverColor || theme.colors.primary.light};
  }
`;

const SocialHandle = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${theme.colors.text.secondary}; // Reverted social handle text color
  margin-top: ${theme.spacing.md};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.background.darker}; // Reverted social handle bg color
  border-radius: 30px;
  display: inline-block;
  box-shadow: ${theme.shadows.sm};
`;

const About = () => {
  return (
    <Container>
      <HeaderSection>
        {/* Add the logo image */}
        <img
          src={logo}
          alt="Campaign Logo"
          style={{
            display: "block",
            margin: "0 auto 1rem auto", // Center and add space below
            maxHeight: "120px", // Kept increased logo size
            backgroundColor: "#FFFFFF", // Added white background to logo
            padding: "0.5rem", // Added padding around logo
            borderRadius: theme.borderRadius.md, // Added slight rounding
            boxShadow: theme.shadows.sm, // Added subtle shadow
          }}
        />
        <Title>
          <FaShieldAlt size={40} />
          حملة ضغطة زر للأمن السيبراني
        </Title>
      </HeaderSection>

      <Section accentColor={theme.colors.primary.main}>
        <SectionHeader>
          <SectionIcon
            bgColor={theme.colors.primary.main}
            bgGradient={theme.colors.primary.light}
          >
            <MdLaptopMac />
          </SectionIcon>
          <Subtitle>نبذة عن الحملة</Subtitle>
        </SectionHeader>
        <Text>
          حملة وطنية توعوية تهدف إلى نشر ثقافة الأمن السيبراني في المجتمع
          الإماراتي من خلال منصة إلكترونية وورش عمل تدريبية. تستهدف الأفراد
          والمؤسسات لتمكينهم من حماية بياناتهم الرقمية.
        </Text>
      </Section>

      <Section accentColor={theme.colors.secondary.main}>
        <SectionHeader>
          <SectionIcon
            bgColor={theme.colors.secondary.main}
            bgGradient={theme.colors.secondary.light}
          >
            <MdSecurity />
          </SectionIcon>
          <Subtitle>لماذا الأمن السيبراني مهم؟</Subtitle>
        </SectionHeader>
        <List>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              يساهم في حماية البيانات و المعلومات الشخصية.
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              يقلل من مخاطر الاختراقات الإلكترونية.
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              يدعم الاستدامة الرقمية ويعزز الثقة بالتقنيات الحديثة.
            </div>
          </ListItem>
        </List>
      </Section>

      <Section accentColor={theme.colors.accent}>
        <SectionHeader>
          <SectionIcon bgColor={theme.colors.accent} bgGradient="#FFD54F">
            <IoMdRibbon />
          </SectionIcon>
          <Subtitle>أهداف الحملة</Subtitle>
        </SectionHeader>
        <List>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              <StrongText>رفع مستوى الوعي السيبراني:</StrongText>
              توعية الأفراد والمؤسسات بأساليب تأمين المعلومات.
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              <StrongText>تطوير المهارات الرقمية:</StrongText>
              توفير تدريبات عملية حول الأمن السيبراني وأحدث أساليب الحماية.
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              <StrongText>تمكين المجتمع:</StrongText>
              إتاحة أدوات تفاعلية لتحسين الأمان الشخصي والمؤسسي.
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              <StrongText>تعزيز التعاون:</StrongText>
              بناء شراكات مع الجامعات والهيئات المختصة لرفع مستوى الوعي الوطني.
            </div>
          </ListItem>
        </List>
      </Section>

      <Section accentColor={theme.colors.primary.dark}>
        <SectionHeader>
          <SectionIcon
            bgColor={theme.colors.primary.dark}
            bgGradient={theme.colors.primary.main}
          >
            <BsBook />
          </SectionIcon>
          <Subtitle>ماذا تتعلم من الحملة؟</Subtitle>
        </SectionHeader>
        <List>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              أساليب حماية البيانات والمعلومات الشخصية.
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              طرق اكتشاف التهديدات الإلكترونية والاستجابة لها.
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              استخدام أدوات الأمان الحديثة مثل المصادقة الثنائية والتشفير.
            </div>
          </ListItem>
        </List>
      </Section>

      <Section accentColor={theme.colors.secondary.dark}>
        <SectionHeader>
          <SectionIcon
            bgColor={theme.colors.secondary.dark}
            bgGradient={theme.colors.secondary.main}
          >
            <BsPeopleFill />
          </SectionIcon>
          <Subtitle>من يستفيد من الحملة؟</Subtitle>
        </SectionHeader>
        <List>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              <StrongText>طلاب الجامعات:</StrongText>
              <NestedList>
                <ListItem>
                  <span className="list-icon">
                    <FaCheck />
                  </span>
                  <div className="list-content">
                    لاكتساب مهارات الأمن السيبراني.
                  </div>
                </ListItem>
              </NestedList>
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              <StrongText>الأفراد المهتمين بالأمن الرقمي:</StrongText>
              <NestedList>
                <ListItem>
                  <span className="list-icon">
                    <FaCheck />
                  </span>
                  <div className="list-content">
                    للتعرف على التهديدات وكيفية التعامل معها.
                  </div>
                </ListItem>
              </NestedList>
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              <StrongText>الموظفون الحكوميون:</StrongText>
              <NestedList>
                <ListItem>
                  <span className="list-icon">
                    <FaCheck />
                  </span>
                  <div className="list-content">لحماية البيانات المؤسسية.</div>
                </ListItem>
              </NestedList>
            </div>
          </ListItem>
          <ListItem>
            <span className="list-icon">
              <FaCheck />
            </span>
            <div className="list-content">
              <StrongText>رواد الأعمال:</StrongText>
              <NestedList>
                <ListItem>
                  <span className="list-icon">
                    <FaCheck />
                  </span>
                  <div className="list-content">لتأمين مشاريعهم الرقمية.</div>
                </ListItem>
              </NestedList>
            </div>
          </ListItem>
        </List>
      </Section>

      <Section accentColor={theme.colors.secondary.light}>
        <SectionHeader>
          <SectionIcon bgColor={theme.colors.secondary.light}>
            {/* <FaUserGraduationCap /> */}
          </SectionIcon>
          <Subtitle>عمل الطلاب</Subtitle>
        </SectionHeader>
        <TeamGrid>
          <TeamCard>
            <TeamName>راشد عبدالله سرور القريني</TeamName>
            <TeamID>202211805</TeamID>
          </TeamCard>
          <TeamCard>
            <TeamName>وليد خميس الكثيري</TeamName>
            <TeamID>202211857</TeamID>
          </TeamCard>
          <TeamCard>
            <TeamName>خليفة محمد القحطاني</TeamName>
            <TeamID>202110077</TeamID>
          </TeamCard>
          <TeamCard>
            <TeamName>السيد ثاني محمد الهاشمي</TeamName>
            <TeamID>201520235</TeamID>
          </TeamCard>
        </TeamGrid>
      </Section>

      <Section accentColor={theme.colors.primary.light}>
        <SectionHeader>
          <SectionIcon>{/* <FaUserGraduationCap /> */}</SectionIcon>
          <Subtitle>مشرف المشروع</Subtitle>
        </SectionHeader>
        <SupervisorCard>
          <SupervisorAvatar>عز</SupervisorAvatar>
          <SupervisorInfo>
            <SupervisorName>أ.د/ عبدالكريم الزياني</SupervisorName>
            <SupervisorTitle>أستاذ كلية تقنية المعلومات</SupervisorTitle>
          </SupervisorInfo>
        </SupervisorCard>
      </Section>

      <SocialSection accentColor={theme.colors.accent}>
        <SectionHeader>
          <Subtitle>
            زوروا منصتنا الإلكترونية أو تابعوا ورش العمل والدورات التدريبية!
          </Subtitle>
        </SectionHeader>
        <SocialLinks>
          <SocialLink
            href="https://www.tiktok.com/@clickthebutton"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            color="#EEE"
            hoverColor="#FF0050"
          >
            <FaTiktok />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/clickthebutton1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            color="#EEE"
            hoverColor="#E1306C"
          >
            <FaInstagram />
          </SocialLink>
        </SocialLinks>
        <SocialHandle>@clickthebutton</SocialHandle>
      </SocialSection>
    </Container>
  );
};

export default About;
