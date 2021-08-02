import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingMsg from './LoadingMsg';
import ProductCard from './ProductCard';
import AddToCartButton from './AddToCartButton';

require('./SearchResults.css');

export default class SearchResults extends Component {
  reshapeObjects(products) {
    return products.map(({
      title,
      thumbnail,
      price,
      id,
      attributes,
      available_quantity: availableQuantity,
    }) => {
      attributes = attributes.map(({ name, value_name: value }) => ({ name, value }));
      return {
        id,
        title,
        thumbnail,
        price,
        attributes,
        availableQuantity,
      };
    });
  }

  render() {
    const { results, loading } = this.props;
    const products = this.reshapeObjects(results);

    return (
      <div className="list">
        { loading
          ? <LoadingMsg />
          : products.map((product) => (
            <ProductCard
              product={ product }
              key={ product.id }
            >
              <AddToCartButton product={ product } testid="product-add-to-cart" />
            </ProductCard>
          ))}
      </div>
    );
  }
}

SearchResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};
