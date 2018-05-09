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
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
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
