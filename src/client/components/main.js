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
    document.title = "Home | marXel";
  }

  render() {
    return (
      <div>
        <Banner/>
        <Shipping/>
      </div>
    );
  }
}
