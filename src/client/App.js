import React, { Component } from 'react';
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
        <Main/>
        <Footer/>
      </div>
    );
  }
}
