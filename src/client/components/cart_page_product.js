import React from "react";

class cart_page_product extends React.Component {
  render() {
    return (
      <div>
        <div className="cart-img-product b-rad-4 o-f-hidden">
          <img src="images/item-10.jpg" alt="IMG-PRODUCT" />
        </div>
        Men Tshirt $36.00
        <div className="flex-w bo5 of-hidden w-size17">
          <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
            <i className="fs-12 fa fa-minus" aria-hidden="true" />
          </button>
          <input
            className="size8 m-text18 t-center num-product"
            type="number"
            name="num-product1"
            defaultValue={1}
          />
          <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
            <i className="fs-12 fa fa-plus" aria-hidden="true" />
          </button>
        </div>
        $36.00
      </div>
    );
  }
}

export default cart_page_product;
