import React from "react";

class CartHeaderItem extends React.Component {
  render() {
    return (
      <li className="header-cart-item">
        <div className="header-cart-item-img">
          <img src="public/images/item-cart-01.jpg" alt="IMG" />
        </div>
        <div className="header-cart-item-txt">
          <a href="#" className="header-cart-item-name">
            White Shirt With Pleat Detail Back
          </a>
          <span className="header-cart-item-info">1 x $19.00</span>
        </div>
      </li>
    );
  }
}

export default CartHeaderItem;
