import React, { Component } from 'react';
import Banner from './banner.js';
import Title_image from './title_image.js';
import Section_cart from './section_cart.js';


export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title_image/>
        <Section_cart/>

      </div>
    );
  }
}
