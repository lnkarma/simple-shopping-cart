import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';
import { CartContext } from './CartContext';
import products from '../data/products.json';

function ShoppingCartTotals() {
  const cart = useContext(CartContext);
  const discountPercent = 10;
  const deliveryCharge = 100;
  const cartTotal = cart.reduce((total, product) => {
    const productFound = products.find((p) => p.name === product.id);
    const totalProductPrice = productFound.price * product.quantity;
    return total + totalProductPrice;
  }, 0);
  const couponDiscount = ((cartTotal * discountPercent) / 100).toFixed(2);
  const orderTotal = Number((cartTotal - couponDiscount).toFixed(2));
  const total = (orderTotal + deliveryCharge).toFixed(2);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} container justify="space-between">
            <Typography gutterBottom>Cart Total</Typography>
            <Typography>{cartTotal.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={12} container justify="space-between">
            <Typography gutterBottom>Coupon Discount</Typography>
            <Typography>{couponDiscount}</Typography>
          </Grid>
          <Grid item xs={12} container justify="space-between">
            <Typography gutterBottom>Order Total</Typography>
            <Typography>{orderTotal}</Typography>
          </Grid>
          <Grid item xs={12} container justify="space-between">
            <Typography gutterBottom>Delivery Charge</Typography>
            <Typography>{deliveryCharge}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} container justify="space-between">
            <Typography gutterBottom>Total</Typography>
            <Typography>{total}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="primary">
          Checkout
        </Button>
      </CardActions>
    </Card>
  );
}

export default ShoppingCartTotals;
