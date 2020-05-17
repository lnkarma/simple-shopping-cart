import React, { useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import Appbar from './components/Appbar';
import MainContent from './components/MainContent';
import MainContentGutter from './components/MainContentGutter';
import ShoppingCart from './components/ShoppingCart';

const reducer = (state, action) => {
  switch (action) {
    case 'MainContent':
      return <MainContent />;

    case 'ShoppingCart':
      return <ShoppingCart />;

    default:
      throw new Error('Invalid view');
  }
};

function App() {
  const [content, dispatch] = useReducer(reducer, <MainContent />);
  return (
    <Grid container direction="column">
      <Grid item>
        <Appbar setView={dispatch} />
      </Grid>
      <Grid item container direction="row">
        <MainContentGutter />
        {content}
        <MainContentGutter />
      </Grid>
    </Grid>
  );
}

export default App;
