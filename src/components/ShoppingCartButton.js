import React, { useContext } from 'react';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropTypes from 'prop-types';
import { CartContext } from './CartContext';

function ShoppingCartButton({ onClick }) {
  const cart = useContext(CartContext);

  return (
    <IconButton color="inherit" edge="end" onClick={onClick}>
      <Badge
        color="secondary"
        badgeContent={cart.reduce(
          (totalProducts, product) => totalProducts + product.quantity,
          0
        )}
        max={99}
      >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

ShoppingCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShoppingCartButton;
