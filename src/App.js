import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartShop from './pages/CartShop';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route path="/cartshop" render={ (props) => <CartShop { ...props } /> } />
        <Route
          path="/product-details/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </Router>
  );
}

export default App;
