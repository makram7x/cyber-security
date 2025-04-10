import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  background-color: ${({ theme }) => theme.colors.primary.black};
`;

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  width: 100%;
`;

/**
 * MainLayout component provides the base layout structure
 * Includes header, main content area, and footer
 */
const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;