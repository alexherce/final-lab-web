import React from "react";
import CartHeaderDropdown from "./cart_header_dropdown";
import HeaderMobile from "./header_mobile";
import MenuMobile from "./menu_mobile";

class Header1 extends React.Component {
  render() {
    return (
      <header className="header1">
        {}
        <div className="container-menu-header">
          <div className="topbar">
            <div className="topbar-social">
              <a href="#" className="topbar-social-item fa fa-facebook" />
              <a href="#" className="topbar-social-item fa fa-instagram" />
              <a href="#" className="topbar-social-item fa fa-pinterest-p" />
              <a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
              <a href="#" className="topbar-social-item fa fa-youtube-play" />
            </div>
            <span className="topbar-child1">
              Free shipping for standard order over $100
            </span>
            <div className="topbar-child2">
              <span className="topbar-email">marxel@gmail.com</span>
              <div className="topbar-language rs1-select2">
                <select className="selection-1" name="time">
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>
          <div className="wrap_header">
            {}
            <a href="index.html" className="logo">
              <h1>marXel</h1>
              {}
            </a>
            {}
            <div className="wrap_menu">
              <nav className="menu">
                <ul className="main_menu">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="product.html">Shop</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            {}
            <div className="header-icons">
              <a href="#" className="header-wrapicon1 dis-block">
                <img
                  src="public/images/icons/icon-header-01.png"
                  className="header-icon1"
                  alt="ICON"
                />
              </a>
              <span className="linedivide1" />
              <div className="header-wrapicon2">
                <a href="/cart" className="header-wrapicon1 dis-block">
                <img
                  src="public/images/icons/icon-header-02.png"
                  className="header-icon1 js-show-header-dropdown"
                  alt="ICON"
                />
                <span className="header-icons-noti">0</span>
              </a>
              </div>
            </div>
          </div>
        </div>
        {}
        <HeaderMobile />
        {}
        <MenuMobile />
      </header>
    );
  }
}

export default Header1;
