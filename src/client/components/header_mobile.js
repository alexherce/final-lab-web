import React from "react";
import CartHeaderDropdownMobile from "./cart_header_dropdown_mobile";

class HeaderMobile extends React.Component {
  render() {
    return (
      <div className="wrap_header_mobile">
        {}
        <a href="index.html" className="logo-mobile">
          <img src="public/images/icons/logo.png" alt="IMG-LOGO" />
        </a>
        {}
        <div className="btn-show-menu">
          {}
          <div className="header-icons-mobile">
            <a href="#" className="header-wrapicon1 dis-block">
              <img
                src="public/images/icons/icon-header-01.png"
                className="header-icon1"
                alt="ICON"
              />
            </a>
            <span className="linedivide2" />
            <div className="header-wrapicon2">
              <img
                src="public/images/icons/icon-header-02.png"
                className="header-icon1 js-show-header-dropdown"
                alt="ICON"
              />
              <span className="header-icons-noti">0</span>
              {}
              <CartHeaderDropdownMobile />
            </div>
          </div>
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMobile;
