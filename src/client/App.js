import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './app.css';

import Header1 from './components/header1.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  componentDidMount() {
    document.title = "Amazing Page";

    fetch('/api/categories')
    .then(res => res.json())
    .then(res => this.setState({ username: res[0].name }));
  }

  render() {
    return (
      <div>
        <Header1/>
        <Router>
          <div>
            <Route exact path="/" component={Main}/>
            <Route path="/cart" component={Main}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
