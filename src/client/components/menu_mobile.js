import React from "react";

class MenuMobile extends React.Component {
  render() {
    return (
      <div className="wrap-side-menu">
        <nav className="side-menu">
          <ul className="main-menu">
            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
              <span className="topbar-child1">
                Free shipping for standard order over $100
              </span>
            </li>
            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
              <div className="topbar-child2-mobile">
                <span className="topbar-email">marxel@gmail.com</span>
                <div className="topbar-language rs1-select2">
                  <select className="selection-1" name="time">
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </li>
            <li className="item-topbar-mobile p-l-10">
              <div className="topbar-social-mobile">
                <a href="#" className="topbar-social-item fa fa-facebook" />
                <a href="#" className="topbar-social-item fa fa-instagram" />
                <a href="#" className="topbar-social-item fa fa-pinterest-p" />
                <a
                  href="#"
                  className="topbar-social-item fa fa-snapchat-ghost"
                />
                <a href="#" className="topbar-social-item fa fa-youtube-play" />
              </div>
            </li>
            <li className="item-menu-mobile">
              <a href="index.html">Home</a>
            </li>
            <li className="item-menu-mobile">
              <a href="product.html">Shop</a>
            </li>
            <li className="item-menu-mobile">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MenuMobile;
