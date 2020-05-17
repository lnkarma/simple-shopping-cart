import React, { useReducer } from 'react';
import produce from 'immer';
import PropTypes from 'prop-types';

export const CartContext = React.createContext();
export const SetCartContext = React.createContext();

const reducer = (productsDraft, action) => {
  switch (action.type) {
    case 'add': {
      const productToUpdate = productsDraft.find(
        (product) => product.id === action.product.id
      );
      if (productToUpdate) {
        productToUpdate.quantity += action.product.quantity;
        break;
      }
      productsDraft.push(action.product);
      break;
    }

    default:
  }
};

const curriedReducer = produce(reducer);

function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(curriedReducer, []);
  return (
    <CartContext.Provider value={cart}>
      <SetCartContext.Provider value={dispatch}>
        {children}
      </SetCartContext.Provider>
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContextProvider;
