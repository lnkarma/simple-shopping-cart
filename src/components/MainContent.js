import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';
import products from '../data/products.json';

function MainContent() {
  return (
    <Grid item container xs={11} spacing={2}>
      {products.map((product, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <MediaCard product={product} key={i + 1} />;
      })}
    </Grid>
  );
}

export default MainContent;
