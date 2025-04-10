import { Global, ThemeProvider } from '@emotion/react';
import { theme, globalStyles } from '../../styles/theme';
import PropTypes from 'prop-types';

/**
 * RTLWrapper component provides RTL support and global styling
 * Wraps the entire application to provide theme and RTL context
 */
const RTLWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <div dir="rtl" lang="ar">
        {children}
      </div>
    </ThemeProvider>
  );
};

RTLWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RTLWrapper;