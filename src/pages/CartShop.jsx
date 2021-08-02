import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CartStorage from '../services/cart';

require('./CartShop.css');

export default class CartShop extends React.Component {
  constructor() {
    super();
    this.state = {
      items: CartStorage.items,
      total: this.getTotalValue(CartStorage.items),
    };

    this.changeItemQuantity = this.changeItemQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.updateCartStorage = this.updateCartStorage.bind(this);
    this.updateTotalAmount = this.updateTotalAmount.bind(this);
  }

  getTotalValue(items) {
    const total = items.reduce(
      (amount, { price, quantity }) => (amount + price * quantity),
      0,
    );
    return parseFloat(total.toFixed(2));
  }

  updateCartStorage() {
    const { items: updatedItems } = this.state;
    CartStorage.items = updatedItems;
    CartStorage.save();
  }

  updateTotalAmount() {
    const { items } = this.state;
    this.setState({ total: this.getTotalValue(items) });
  }

  updateCart() {
    this.updateTotalAmount();
    this.updateCartStorage();
  }

  removeItem({ index: itemIndex }) {
    const { items } = this.state;
    items.splice(itemIndex, 1);
    this.setState({ items }, this.updateCart);
  }

  changeItemQuantity({ index: itemIndex }, operation) {
    const { items } = this.state;
    let { quantity } = items[itemIndex];
    const { availableQuantity } = items[itemIndex];
    quantity = operation === '+' ? quantity += 1 : quantity -= 1;
    quantity = quantity < 0 ? 0 : quantity;
    quantity = quantity > availableQuantity ? availableQuantity : quantity;
    this.setState((currentState) => {
      currentState.items[itemIndex].quantity = quantity;
      return currentState;
    }, this.updateCart);
  }

  render() {
    const { items, total } = this.state;
    const cartIsEmpty = items.length === 0;
    const formattedTotal = total.toFixed(2).replace('.', ',');

    return (
      <main>
        <h1>
          <FiShoppingCart />
          Carrinho de compras
        </h1>
        <div className="CartShop__List">
          { cartIsEmpty
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              <div>
                { items.map((item, index) => (
                  <CartItem
                    key={ item.id }
                    index={ index }
                    item={ item }
                    changeQuantity={ this.changeItemQuantity }
                    removeItem={ this.removeItem }
                  />))}
                <strong>Valor Total da Compra:</strong>
                { ` R$ ${formattedTotal}` }
              </div>
            )}
        </div>
        <Link to="/">Continuar comprando</Link>
      </main>
    );
  }
}
