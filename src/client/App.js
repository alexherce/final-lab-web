import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './app.css';

import Header1 from './components/header1.js';
import Main from './components/main.js';
import Cart from './components/cart.js';
import Products from './components/products.js';
import Auth from './components/login.js';
import ProductDetail from './components/product_detail.js';
import LogIn from './components/login.js';
import Orders from './components/orders.js';
import Footer from './components/footer.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header1/>
        <Router>
          <div>
            <Route exact path="/" component={Main}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/authenticate" component={Auth}/>
            <Route exact path="/products/category/:catId" component={Products}/>
            <Route exact path="/products/detail/:prodId" component={ProductDetail}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/login" component={LogIn}/>
            <Route exact path="/orders" component={Orders}/>

          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
