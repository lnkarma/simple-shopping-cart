import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { CartContext } from './CartContext';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartTotals from './ShoppingCartTotals';

function ShoppingCart() {
  const cart = useContext(CartContext);
  return (
    <Grid
      item
      container
      xs={11}
      justify="center"
      // style={{ border: '1px solid blue' }}
      spacing={2}
    >
      <Grid
        item
        container
        spacing={2}
        // justify="space-between"
        xs={12}
        sm={6}
        md={6}
        lg={8}
        xl={9}
        // style={{ border: '1px solid red' }}
      >
        {cart.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid item key={index} xs={12} sm={12} md={12} lg={6} xl={4}>
            <ShoppingCartItem product={product} />
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
        {/* <Grid item> */}
        <ShoppingCartTotals />
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
}

export default ShoppingCart;
