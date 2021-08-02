import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class CartIcon extends React.Component {
  render() {
    return (
      <Link
        to="/cartshop"
        data-testid="shopping-cart-button"
      >
        <FiShoppingCart />
      </Link>
    );
  }
}
