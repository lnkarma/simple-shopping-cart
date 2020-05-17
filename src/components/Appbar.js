import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import useTheme from '@material-ui/core/styles/useTheme';
import { darkModeContext } from '../theme';
import ShoppingCartButton from './ShoppingCartButton';

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({});
  // const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

function Appbar({ setView }) {
  const { toggleDarkMode, darkMode } = useContext(darkModeContext);
  const theme = useTheme();
  const updateDarkMode = () => {
    toggleDarkMode();
  };

  const classes = useStyles();

  const setview = (view) => {
    return () => setView(view);
  };

  return (
    // <div className={classes.root}>
    // </div>
    <>
      <HideOnScroll>
        <AppBar
          className={classes.appbar}
          color={darkMode ? 'default' : 'primary'}
        >
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={setview('MainContent')}
            >
              Shoppin
            </Typography>
            <IconButton color="inherit" onClick={updateDarkMode}>
              {theme.palette.type === 'dark' ? (
                <BrightnessHighIcon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <ShoppingCartButton onClick={setview('ShoppingCart')} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box mb={2} />
    </>
  );
}

Appbar.propTypes = {
  setView: PropTypes.func.isRequired,
};

export default Appbar;
