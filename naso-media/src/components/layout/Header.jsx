import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #00101F;
  color: #00e6e6;
  padding: ${({ theme }) => theme.spacing.md} 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.spacing.xl};
  
  img {
    height: 40px;
    width: auto;
  }
  
  span {
    color: #00e6e6;
    font-family: ${({ theme }) => theme.typography.fonts.heading};
    font-size: 1.2rem;
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #00e6e6;
  font-family: ${({ theme }) => theme.typography.fonts.heading};
  font-size: ${({ theme }) => theme.typography.sizes.body};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const SearchInput = styled.input`
  background-color: rgba(0, 30, 40, 0.7);
  border: 1px solid rgba(0, 230, 230, 0.5);
  border-radius: 20px;
  color: #ffffff;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fonts.body};
  width: 250px;

  &::placeholder {
    color: #83d0d0;
  }

  &:focus {
    outline: none;
    border-color: #00e6e6;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #00e6e6;
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <img src="/logo.png" alt="Naso Media Channel" />
        </Logo>

        <Nav>
          <NavLink to="/">{t('common.home')}</NavLink>
          <NavLink to="/news">{t('common.news')}</NavLink>
          <NavLink to="/reports">{t('common.reports')}</NavLink>
          <NavLink to="/articles">{t('common.articles')}</NavLink>
          <NavLink to="/events">{t('common.events')}</NavLink>
          <NavLink to="/media">{t('common.media')}</NavLink>
          <NavLink to="/about">{t('common.about')}</NavLink>
        </Nav>

        <SearchContainer>
          <SearchInput 
            type="text" 
            placeholder={t('common.search')}
            aria-label={t('common.search')}
          />
        </SearchContainer>

        <MobileMenuButton aria-label={t('common.menu')}>
          ☰
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;