import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { CssBaseline } from '@material-ui/core';
import Theme from './theme';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CartContextProvider from './components/CartContext';

ReactDOM.render(
  <Theme>
    <CartContextProvider>
      <CssBaseline />
      <App />
    </CartContextProvider>
  </Theme>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
