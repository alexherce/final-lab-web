import React from "react";

class Slide1 extends React.Component {
  render() {
    return (
      <section className="slide1">
        <div className="wrap-slick1">
          <div className="slick1">
            <div
              className="item-slick1 item1-slick1"
              style={{
                backgroundImage: "url(public/images/pasto1.jpg)"
              }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span
                  className="caption1-slide1 m-text1 t-center animated visible-false m-b-15"
                  data-appear="fadeInDown"
                >
                  Grass Collection 2018
                </span>
                <h2
                  className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37"
                  data-appear="fadeInUp"
                >
                  New arrivals
                </h2>
                <div
                  className="wrap-btn-slide1 w-size1 animated visible-false"
                  data-appear="zoomIn"
                >
                  {}
                  <a
                    href="product.html"
                    className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="item-slick1 item2-slick1"
              style={{
                backgroundImage: "url(public/images/powder2.jpg)"
              }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span
                  className="caption1-slide1 m-text1 t-center animated visible-false m-b-15"
                  data-appear="rollIn"
                >
                  Powder Collection 2018
                </span>
                <h2
                  className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37"
                  data-appear="lightSpeedIn"
                >
                  New arrivals
                </h2>
                <div
                  className="wrap-btn-slide1 w-size1 animated visible-false"
                  data-appear="slideInUp"
                >
                  {}
                  <a
                    href="product.html"
                    className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div
              className="item-slick1 item3-slick1"
              style={{
                backgroundImage: "url(public/images/candy1.jpg)"
              }}
            >
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span
                  className="caption1-slide1 m-text1 t-center animated visible-false m-b-15"
                  data-appear="rotateInDownLeft"
                >
                  Candies Collection 2018
                </span>
                <h2
                  className="caption2-slide1 xl-text1 t-center animated visible-false m-b-37"
                  data-appear="rotateInUpRight"
                >
                  New arrivals
                </h2>
                <div
                  className="wrap-btn-slide1 w-size1 animated visible-false"
                  data-appear="rotateIn"
                >
                  {}
                  <a
                    href="product.html"
                    className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slide1;
