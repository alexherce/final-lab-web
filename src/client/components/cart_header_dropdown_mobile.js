import React from "react";
import CartHeaderItemMobile from "./cart_header_item_mobile";

class CartHeaderDropdownMobile extends React.Component {
  render() {
    return (
      <div className="header-cart header-dropdown">
        <ul className="header-cart-wrapitem">
          <CartHeaderItemMobile />
        </ul>
        <div className="header-cart-total">Total: $75.00</div>
        <div className="header-cart-buttons">
          <div className="header-cart-wrapbtn">
            {}
            <a
              href="cart.html"
              className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
            >
              View Cart
            </a>
          </div>
          <div className="header-cart-wrapbtn">
            {}
            <a
              href="#"
              className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
            >
              Check Out
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CartHeaderDropdownMobile;
