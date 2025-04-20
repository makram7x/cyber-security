import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #00101F;
  color: #00e6e6;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Changed from 4 columns to 1 */
  gap: ${({ theme }) => theme.spacing.xl};
  justify-items: center; /* Center the single column */
  text-align: center; /* Center text within the column */

  /* Removed responsive grid changes as it's now always 1 column */
`;

const FooterSection = styled.div`
  h3 {
    color: #00e6e6;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.sizes.h4};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

const FooterLink = styled(Link)`
  color: #00e6e6;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #00e6e6;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #00e6e6;
    &::after {
      width: 100%;
    }
  }
`;

const NewsletterForm = styled.form`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const NewsletterInput = styled.input`
  background-color: rgba(0, 30, 40, 0.7);
  border: 1px solid rgba(0, 230, 230, 0.5);
  border-radius: 20px;
  color: #ffffff;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fonts.body};

  &::placeholder {
    color: #83d0d0;
  }

  &:focus {
    outline: none;
    border-color: #00e6e6;
  }
`;

const SubscribeButton = styled.button`
  background-color: transparent;
  color: #00e6e6;
  border: 2px solid #00e6e6;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fonts.heading};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 230, 230, 0.2);
    box-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  a {
    color: #00e6e6;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #00e6e6;
      text-shadow: 0 0 10px rgba(0, 230, 230, 0.5);
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>{t('common.about')}</h3>
            <FooterLink to="/">Naso Media Channel - المنصة الإعلامية الرائدة في تقديم المحتوى العربي</FooterLink>
            <SocialLinks>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">▶</a>
            </SocialLinks>
          </FooterSection>

          {/* Removed News, Media, and Newsletter sections */}
        </FooterGrid>

        <Copyright>
          <p>{t('footer.copyright')}</p> {/* Removed extra hardcoded text */}
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;