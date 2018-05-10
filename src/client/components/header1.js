import React from "react";
import CartHeaderDropdown from "./cart_header_dropdown";
import HeaderMobile from "./header_mobile";
import MenuMobile from "./menu_mobile";

class Header1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Alex',
        last_name: 'Herce',
        email: 'alex@shop.com'
      }
    };
  }

  // componentDidMount() {
  //   document.title = "Products | marXel";
  //
  //   if(this.props.match.params.prodId) {
  //     fetch('/api/products/' + this.props.match.params.prodId)
  //     .then(res => res.json())
  //     .then((res) => {
  //       if (res.error) return false;
  //       this.setState({
  //         product: res
  //       });
  //     })
  //   }
  // }

  render() {
    return (
      <header className="header1">
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
                </ul>
              </nav>
            </div>
            <div className="header-icons">
              <a href="#" className="header-wrapicon1 dis-block">
                <img
                  src="/public/images/icons/icon-header-01.png"
                  className="header-icon1"
                  alt="ICON"
                />
              </a>
              <span className="linedivide1" />
              <div className="header-wrapicon2">
                <a href="/cart" className="header-wrapicon1 dis-block">
                <img
                  src="/public/images/icons/icon-header-02.png"
                  className="header-icon1 js-show-header-dropdown"
                  alt="ICON"
                />
                <span className="header-icons-noti">0</span>
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
