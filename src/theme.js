import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core';

export const darkModeContext = React.createContext();

const localDarkMode = localStorage.getItem('darkMode');

const Theme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(Boolean(localDarkMode));

  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    if (!darkMode) {
      return localStorage.removeItem('darkMode');
    }
    return localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const themeObject = {
    typography: {
      fontSize: 12,
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  };

  const theme = createMuiTheme(themeObject);
  return (
    <darkModeContext.Provider value={{ toggleDarkMode, darkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </darkModeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Theme;
