import React from "react";
import CartHeaderDropdown from "./cart_header_dropdown";
import HeaderMobile from "./header_mobile";
import MenuMobile from "./menu_mobile";

class Header1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        last_name: '',
        email: '',
        cartItems: ''
      }
    };
  }

  handleErrors(res) {
    if (res.error) {
      throw Error(res.error);
    }
    return res;
  }

  ShowExtendedMenu() {
    return (
      <li>
        <a href="/orders">My Orders</a>
      </li>
    );
  }

  componentDidMount() {
    fetch('/api/session/get')
    .then(res => res.json())
    .then((res) => {
      if (!res.userId) return false;
      this.setState({
        userId: res.userId,
        user: res.userInfo,
        cartItems: res.cartItems
      });
    });
  }

  render() {
    return (
      <header className="header1">
        <div className="container-menu-header">
          <div className="topbar">
            <div className="topbar-social">
              <a href="#" className="topbar-social-item fab fa-facebook" />
              <a href="#" className="topbar-social-item fab fa-instagram" />
              <a href="#" className="topbar-social-item fab fa-pinterest-p" />
              <a href="#" className="topbar-social-item fab fa-snapchat-ghost" />
              <a href="#" className="topbar-social-item fab fa-youtube-play" />
            </div>
            <span className="topbar-child1">
              Free shipping on all products!
            </span>
            <div className="topbar-child2">
              <span className="topbar-email">{this.state.user.email}</span>
            </div>
          </div>
          <div className="wrap_header">
            <a href="/" className="logo">
            <h1>marXel</h1>
          </a>
          <div className="wrap_menu">
            <nav className="menu">
              <ul className="main_menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Shop</a>
                </li>
                {this.state.userId &&
                  <this.ShowExtendedMenu/>
                }
              </ul>
            </nav>
          </div>
          <div className="header-icons">
            <a href="/authenticate" className="header-wrapicon1 dis-block">
              <img
                src="/images/icons/icon-header-01.png"
                className="header-icon1"
                alt="ICON"
              />
            </a>
            <span className="linedivide1" />
            <div className="header-wrapicon2">
              <a href="/cart" className="header-wrapicon1 dis-block">
              <img
                src="/images/icons/icon-header-02.png"
                className="header-icon1 js-show-header-dropdown"
                alt="ICON"
              />
              <span className="header-icons-noti">{this.state.cartItems}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <HeaderMobile />
    <MenuMobile/>
  </header>
);
}
}

export default Header1;
