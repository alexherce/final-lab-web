import React, { Component } from 'react';
import './app.css';

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
        {this.state.username ? (
          <h1>Hello {this.state.username}!</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}
