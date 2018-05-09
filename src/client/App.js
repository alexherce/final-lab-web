import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './app.css';

import Header1 from './components/header1.js';
import Main from './components/main.js';
import Cart from './components/cart.js';
import Footer from './components/footer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header1/>
        <Router>
          <div>
            <Route exact path="/" component={Main}/>
            <Route exact path="/:id" component={Main}/>
            <Route path="/cart" component={Cart}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
