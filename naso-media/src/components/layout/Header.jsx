import styled from '@emotion/styled';
import { useState } from 'react'; // Added useState
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

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  position: absolute;
  top: 100%; // Position below the header
  left: 0;
  right: 0;
  background-color: #001a2f; // Slightly different background
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-top: 1px solid rgba(0, 230, 230, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'flex' : 'none'}; // Control visibility

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none; // Hide on larger screens
  }
`;

const MobileNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;

  &::after {
    left: 50%;
    transform: translateX(-50%);
  }
`;


const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <img 
            src="/logo.png" 
            alt="Naso Media Channel" 
            style={{ background: 'white', padding: '4px', borderRadius: '4px' }}
          />
        </Logo>

        <Nav>
          <NavLink to="/">{t('common.home')}</NavLink>
          <NavLink to="/news">{t('common.news')}</NavLink>
          <NavLink to="/events">{t('common.events')}</NavLink>
          <NavLink to="/media">{t('common.media')}</NavLink>
          <NavLink to="/about">{t('common.about')}</NavLink>
        </Nav>

        <MobileMenuButton aria-label={t('common.menu')} onClick={toggleMobileMenu}> {/* Added onClick handler */}
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>
      {/* Mobile Navigation Menu */}
      <MobileNav isOpen={isMobileMenuOpen}>
        <MobileNavLink to="/" onClick={closeMobileMenu}>{t('common.home')}</MobileNavLink>
        <MobileNavLink to="/news" onClick={closeMobileMenu}>{t('common.news')}</MobileNavLink>
        <MobileNavLink to="/events" onClick={closeMobileMenu}>{t('common.events')}</MobileNavLink>
        <MobileNavLink to="/media" onClick={closeMobileMenu}>{t('common.media')}</MobileNavLink>
        <MobileNavLink to="/about" onClick={closeMobileMenu}>{t('common.about')}</MobileNavLink>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;