import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartIcon from '../components/CartIcon';
import AddToCartButton from '../components/AddToCartButton';
import EvaluationForms from '../components/EvaluationForms';

require('./ProductDetails.css');

export default class ProductDetails extends Component {
  render() {
    const { location: { state } } = this.props;
    const { id, title, price, thumbnail, attributes } = state;
    const titleToHtml = `${title} - R$ ${price}`;
    return (
      <div className="content-product">
        <header className="header-product">
          <Link to="/">Voltar</Link>
          <CartIcon />
        </header>
        <div className="details-product">
          <section className="head-product">
            <p
              data-testid="product-detail-name"
              className="title-product"
            >
              <strong>
                { titleToHtml }
              </strong>
            </p>
            <img src={ thumbnail } alt={ title } />
          </section>
          <section className="body-product">
            <p><strong>Especificações Técnicas</strong></p>
            <ul>
              { attributes
                ? attributes.map((attribute) => {
                  const { name, value } = attribute;
                  return (
                    <li
                      key={ `${id}-${name}` }
                    >
                      { name }
                      { `: ${value}` }
                    </li>
                  );
                })
                : <span />}
            </ul>
          </section>
          <AddToCartButton product={ state } testid="product-detail-add-to-cart" />
        </div>
        <div>
          <EvaluationForms />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      availableQuantity: PropTypes.number.isRequired,
      attributes: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.string.isRequired),
      ),
    }),
  }).isRequired,
};
