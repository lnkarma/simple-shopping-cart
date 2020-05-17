import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes, { string, number } from 'prop-types';
import products from '../data/products.json';
import { SetCartContext } from './CartContext';

const useStyles = makeStyles({
  media: {
    backgroundSize: 'contain',
    padding: '50%',
    // width: '100%',
    // border: '1px solid red',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function ShoppingCartItem({ product }) {
  const classes = useStyles();
  const mainProduct = products.find((p) => p.name === product.id);
  const dispatch = useContext(SetCartContext);
  const incrementQuantity = () => {
    dispatch({ type: 'add', product: { id: product.id, quantity: 1 } });
  };
  const decrementQuantity = () => {
    dispatch({ type: 'add', product: { id: product.id, quantity: -1 } });
  };

  return (
    <Card>
      <Grid container alignItems="center" direction="row">
        <Grid item xs={4} md={3} xl={1}>
          <CardMedia
            image={mainProduct.photo}
            className={classes.media}
            title={product.id}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" noWrap>
              {product.id}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              {mainProduct.description}
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-Between',
                //   border: '1px solid red',
              }}
            >
              <Typography>{product.quantity}</Typography>
              <ButtonGroup>
                <Button
                  disabled={product.quantity <= 1}
                  onClick={decrementQuantity}
                >
                  -
                </Button>
                <Button onClick={incrementQuantity}>+</Button>
              </ButtonGroup>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

ShoppingCartItem.propTypes = {
  product: PropTypes.shape({
    id: string,
    quantity: number,
  }).isRequired,
};

export default React.memo(ShoppingCartItem);
