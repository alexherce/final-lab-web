import React, { Component } from 'react';
import Banner from './banner.js';
import Section_cart from './section_cart.js';
import FeaturedProductsSection from './featured_products_section.js';
import Banner2 from './banner2.js';
import Shipping from './shipping.js';

//
// import CartHeaderDropdownMobile from './cart_header_dropdown_mobile.js';
// import CartHeaderDropdown from './cart_header_dropdown.js';
// import CartHeaderItemMobile from './cart_header_item_mobile.js';
// import CartHeaderItem from './cart_header_item.js';
// import HeaderMobile from './header_mobile.js';
// import ItemSlick from './item_slick.js';
// import MenuMobile from './menu_mobile.js';
// import WrapSlick from './wrap_slick.js';
//

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Banner/>
        <Section_cart/>
        <FeaturedProductsSection/>
        <Banner2/>
        <Shipping/>


      </div>
    );
  }
}
