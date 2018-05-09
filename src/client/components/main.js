import React, { Component } from 'react';
import Banner from './banner.js';
import Section_cart from './section_cart.js';
import FeaturedProductsSection from './featured_products_section.js';
import Banner2 from './banner2.js';
import Shipping from './shipping.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lol: 'cool',
      products: [
        {
          name: 'Please wait... loading'
        }
      ],
    };
  }

  componentDidMount() {
    document.title = "marXel";

    fetch('/api/products')
    .then(res => res.json())
    .then(res => this.setState({ products: res.products }));
  }

  render() {
    return (
      <div>
        <p>{this.props.match.params.id}</p>
        <Banner productsArray={this.state.products}/>
        <Shipping/>
      </div>
    );
  }
}
