import React from "react";
import WrapSlick from "./wrap_slick";

class FeaturedProductsSection extends React.Component {
  render() {
    return (
      <section className="newproduct bgwhite p-t-45 p-b-105">
        <div className="container">
          <div className="sec-title p-b-60">
            <h3 className="m-text5 t-center">Featured Products</h3>
          </div>
          {}
          <WrapSlick />
          <WrapSlick />
          <WrapSlick />
          <WrapSlick />
          <WrapSlick />
          <WrapSlick />
          <WrapSlick />
        </div>
      </section>
    );
  }
}

export default FeaturedProductsSection;
